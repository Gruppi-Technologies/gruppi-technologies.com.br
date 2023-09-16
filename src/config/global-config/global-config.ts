import { PROJECT_DESCRIPTION, PROJECT_TITLE, WHATSAPP_LINK } from './constants';
import { Mode } from './types';

interface GlobalConfigOptions {
  mode: Mode;
  projectTitle: string;
  projectDescription: string;
  projectURL: string;
  whatsappLink: string;
}

export class GlobalConfig {
  private _mode: Mode;
  private _projectTitle: string;
  private _projectDescription: string;
  private _projectURL: string;
  private _whatsappLink: string;

  constructor({ mode, projectTitle, projectDescription, projectURL, whatsappLink }: GlobalConfigOptions) {
    this._mode = mode;
    this._projectTitle = projectTitle;
    this._projectDescription = projectDescription;
    this._projectURL = projectURL;
    this._whatsappLink = whatsappLink;
  }

  mode(): Mode {
    return this._mode;
  }

  projectTitle(): string {
    return this._projectTitle;
  }

  projectDescription(): string {
    return this._projectDescription;
  }

  projectURL(): string {
    return this._projectURL;
  }

  whatsappLink(): string {
    return this._whatsappLink;
  }
}

const globalConfig = new GlobalConfig({
  mode: process.env.NODE_ENV ?? 'development',
  projectTitle: PROJECT_TITLE,
  projectDescription: PROJECT_DESCRIPTION,
  projectURL: process.env.NEXT_PUBLIC_PROJECT_URL,
  whatsappLink: WHATSAPP_LINK,
});

export default globalConfig;
