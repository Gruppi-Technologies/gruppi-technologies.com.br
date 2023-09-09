import { FC } from 'react';

import { Page } from '@/components/common/page/page';

import { PAGE_TITLE, PAGE_DESCRIPTION, PAGE_URL, PAGE_PREVIEW_IMAGE_URL, PAGE_PREVIEW_IMAGE_ALT } from './constants';
import { Container, Title } from './styles';

export const HomePage: FC = () => (
  <Page
    title={PAGE_TITLE}
    description={PAGE_DESCRIPTION}
    url={PAGE_URL}
    previewImageURL={PAGE_PREVIEW_IMAGE_URL}
    previewImageAlt={PAGE_PREVIEW_IMAGE_ALT}
  >
    <Container>
      <Title>Hello World</Title>
    </Container>
  </Page>
);
