import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

import { FormData } from '@/components/common/modals/contact-modal/types';
import { mailOptions, transporter } from '@/config/nodemailer/nodemailer';

function readEmailTemplate() {
  const templatePath = path.join(process.cwd(), '/src/template/contact-email.html');
  return fs.readFileSync(templatePath, 'utf-8');
}

function fillTemplate(template: string, data: FormData) {
  return template
    .replace('[name]', data.name)
    .replace('[phone]', data.phone)
    .replace('[email]', data.email)
    .replace('[message]', data.message);
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method === 'POST') {
    const data = request.body;

    if (!data.name || !data.email || !data.phone || !data.message) {
      return response.status(400).json({ message: 'Bad request ' });
    }

    const subject = 'Olá, gostaria de mais informações';
    const template = readEmailTemplate();
    const emailBody = fillTemplate(template, data);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject,
        text: 'This is a test string',
        html: emailBody,
      });

      return response.status(200).json({ message: 'E-mail enviado com sucesso' });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ message: 'Erro ao enviar e-mail' });
    }
  } else {
    return response.status(405).end();
  }
};
