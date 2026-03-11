import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { FormData } from '@/components/common/modals/contact-form-modal/types';
import { mailOptions, transporter } from '@/config/nodemailer/nodemailer';

// Limites de tamanho (proteção contra payloads enormes e spam)
const LIMITS = {
  name: 200,
  email: 100,
  phone: 30,
  message: 5000,
} as const;

// Rate limit: máximo de requisições por IP por janela de tempo
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minuto
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: NextApiRequest): string {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  if (request.socket?.remoteAddress) return request.socket.remoteAddress;
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return false;
  entry.count += 1;
  return true;
}

/** Escapa HTML para evitar injeção no corpo do e-mail (XSS no cliente de e-mail). */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function readEmailTemplate() {
  const templatePath = path.join(process.cwd(), '/src/template/contact-email.html');
  return fs.readFileSync(templatePath, 'utf-8');
}

function fillTemplate(template: string, data: FormData) {
  return template
    .replace('[name]', escapeHtml(data.name))
    .replace('[phone]', escapeHtml(data.phone))
    .replace('[email]', escapeHtml(data.email))
    .replace('[message]', escapeHtml(data.message));
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateBody(body: unknown): { ok: true; data: FormData } | { ok: false; status: number; message: string } {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return { ok: false, status: 400, message: 'Requisição inválida' };
  }
  const b = body as Record<string, unknown>;
  const name = typeof b.name === 'string' ? b.name.trim() : '';
  const email = typeof b.email === 'string' ? b.email.trim() : '';
  const phone = typeof b.phone === 'string' ? b.phone.trim() : '';
  const message = typeof b.message === 'string' ? b.message.trim() : '';

  if (!name || !email || !phone || !message) {
    return { ok: false, status: 400, message: 'Todos os campos são obrigatórios' };
  }
  if (name.length > LIMITS.name) {
    return { ok: false, status: 400, message: `Nome com no máximo ${LIMITS.name} caracteres` };
  }
  if (email.length > LIMITS.email) {
    return { ok: false, status: 400, message: `E-mail com no máximo ${LIMITS.email} caracteres` };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, status: 400, message: 'E-mail inválido' };
  }
  if (phone.length > LIMITS.phone) {
    return { ok: false, status: 400, message: `Telefone com no máximo ${LIMITS.phone} caracteres` };
  }
  if (message.length > LIMITS.message) {
    return { ok: false, status: 400, message: `Mensagem com no máximo ${LIMITS.message} caracteres` };
  }

  return { ok: true, data: { name, email, phone, message } };
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    return response.status(405).end();
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return response.status(429).json({ message: 'Muitas tentativas. Tente novamente em alguns minutos.' });
  }

  const validation = validateBody(request.body);
  if (!validation.ok) {
    return response.status(validation.status).json({ message: validation.message });
  }

  const { data } = validation;
  const subject = 'Olá, gostaria de mais informações';
  const template = readEmailTemplate();
  const emailBody = fillTemplate(template, data);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject,
      text: `Contato: ${data.name} (${data.email}) - ${data.message.slice(0, 200)}`,
      html: emailBody,
    });

    return response.status(200).json({ message: 'E-mail enviado com sucesso' });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Erro ao enviar e-mail' });
  }
};
