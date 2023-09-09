import { Mode } from './types';

export class GlobalConfig {
  private _mode: Mode;

  constructor() {
    this._mode = process.env.NODE_ENV ?? 'development';
  }

  mode(): Mode {
    return this._mode;
  }
}

const globalConfig = new GlobalConfig();

export default globalConfig;
