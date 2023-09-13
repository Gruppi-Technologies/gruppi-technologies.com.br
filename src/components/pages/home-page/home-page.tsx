import { FC } from 'react';

import { Footer } from '@/components/common/footer/footer';
import { Header } from '@/components/common/header/header';
import { Page } from '@/components/common/page/page';

import { AboutUsSection } from './components/about-us-section/about-us-section';
import { FAQSection } from './components/faq-section/faq-section';
import { HeroSection } from './components/hero-section/hero-section';
import { MakeRightChoiceSection } from './components/make-right-choice-section/make-right-choice-section';
import { ServiceSection } from './components/service-section/service-section';
import { PAGE_TITLE, PAGE_DESCRIPTION, PAGE_URL, PAGE_PREVIEW_IMAGE_URL, PAGE_PREVIEW_IMAGE_ALT } from './constants';

export const HomePage: FC = () => (
  <Page
    title={PAGE_TITLE}
    description={PAGE_DESCRIPTION}
    url={PAGE_URL}
    previewImageURL={PAGE_PREVIEW_IMAGE_URL}
    previewImageAlt={PAGE_PREVIEW_IMAGE_ALT}
  >
    <Header />

    <main>
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <MakeRightChoiceSection />
      <FAQSection />
    </main>

    <Footer />
  </Page>
);
