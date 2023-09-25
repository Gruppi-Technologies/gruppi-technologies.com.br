import { GlobalConfig } from '../global-config';

describe('Global config', () => {
  const mode = 'test';
  const projectTitle = 'title';
  const projectDescription = 'description';
  const projectURL = 'http://localhost:3001';
  const whatsappLink = 'wa.me';

  it('should initialize correctly', () => {
    const globalConfig = new GlobalConfig({ mode, projectTitle, projectDescription, projectURL, whatsappLink });
    expect(globalConfig.mode()).toBe(mode);
    expect(globalConfig.projectTitle()).toBe(projectTitle);
    expect(globalConfig.projectDescription()).toBe(projectDescription);
    expect(globalConfig.projectURL()).toBe(projectURL);
    expect(globalConfig.whatsappLink()).toBe(whatsappLink);
  });
});
