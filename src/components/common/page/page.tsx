import Head from 'next/head';
import { FC, ReactNode } from 'react';

import globalConfig from '@/config/global-config/global-config';
import theme from '@/styles/theme';

import { DEFAULT_DESCRIPTION } from './constants';
import { withBasePageTitle } from './utils';

interface Props {
  title?: string;
  description?: string;
  url?: string;
  previewImageURL?: string;
  previewImageAlt?: string;
  children?: ReactNode;
}

export const Page: FC<Props> = ({
  title: partialTitle,
  description = DEFAULT_DESCRIPTION,
  url,
  previewImageURL,
  previewImageAlt,
  children,
}) => {
  const title = withBasePageTitle(partialTitle);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content={theme.colors.primary.mid} />

        <meta name="application-name" content={title} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={globalConfig.projectTitle()} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />

        {url && <meta property="og:url" content={url} />}
        {url && <meta name="twitter:url" content={url} />}

        {previewImageURL && <meta property="og:image" content={previewImageURL} />}
        {previewImageURL && <meta name="twitter:image" content={previewImageURL} />}

        {previewImageAlt && <meta property="og:image:alt" content={previewImageAlt} />}
        {previewImageAlt && <meta property="twitter:image:alt" content={previewImageAlt} />}
      </Head>

      {children}
    </>
  );
};
