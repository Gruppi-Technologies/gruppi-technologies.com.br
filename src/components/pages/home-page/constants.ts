import { ToastOptions } from 'react-toastify';

import globalConfig from '@/config/global-config/global-config';
import { DEFAULT_PREVIEW_IMAGE_URL } from '@/utils/preview-images';

export const PAGE_TITLE = 'Página inicial';
export const PAGE_DESCRIPTION = globalConfig.projectDescription();
export const PAGE_URL = globalConfig.projectURL();
export const PAGE_PREVIEW_IMAGE_URL = DEFAULT_PREVIEW_IMAGE_URL;
export const PAGE_PREVIEW_IMAGE_ALT = globalConfig.projectTitle();
export const COMPANY_NAME = 'Gruppi Technologies';

export const STANDARD_BUTTON_TITLE = 'Quero saber mais';

export const SUCCESS_MAIL_MESSAGE = 'Informações enviadas com sucesso! Entraremos em contato em breve.';
export const FAIL_MAIL_MESSAGE = 'Erro ao enviar e-mail';

export const TOAST_CONFIG: { [key in string]: ToastOptions } = {
  success: {
    hideProgressBar: true,
    autoClose: 2000,
    type: 'success',
  },
  fail: {
    hideProgressBar: true,
    autoClose: 2000,
    type: 'error',
  },
};
