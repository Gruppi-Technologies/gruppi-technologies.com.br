import { PROJECT_DESCRIPTION, PROJECT_TITLE } from './constants';
import { Mode } from './types';

interface GlobalConfigOptions {
  mode: Mode;
  projectTitle: string;
  projectDescription: string;
  projectURL: string;
}

export class GlobalConfig {
  private _mode: Mode;
  private _projectTitle: string;
  private _projectDescription: string;
  private _projectURL: string;

  constructor({ mode, projectTitle, projectDescription, projectURL }: GlobalConfigOptions) {
    this._mode = mode;
    this._projectTitle = projectTitle;
    this._projectDescription = projectDescription;
    this._projectURL = projectURL;
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
}

const globalConfig = new GlobalConfig({
  mode: process.env.NODE_ENV ?? 'development',
  projectTitle: PROJECT_TITLE,
  projectDescription: PROJECT_DESCRIPTION,
  projectURL: process.env.NEXT_PUBLIC_PROJECT_URL,
});

export default globalConfig;
