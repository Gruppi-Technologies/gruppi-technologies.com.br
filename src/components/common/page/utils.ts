import globalConfig from '@/config/global-config/global-config';

export function withBasePageTitle(partialTitle: string | undefined): string {
  const basePageTitle = globalConfig.projectTitle();
  return partialTitle ? `${partialTitle} | ${basePageTitle}` : basePageTitle;
}
