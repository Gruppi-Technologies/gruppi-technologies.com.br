import { FC } from 'react';

import { Footer } from '@/components/common/footer/footer';
import { Header } from '@/components/common/header/header';
import { ContactModal } from '@/components/common/modals/contact-modal/contact-modal';
import { FormData } from '@/components/common/modals/contact-modal/types';
import { Page } from '@/components/common/page/page';
import { useModal } from '@/hooks/use-modal/use-modal';

import { AboutUsSection } from './components/about-us-section/about-us-section';
import { FAQSection } from './components/faq-section/faq-section';
import { HeroSection } from './components/hero-section/hero-section';
import { MakeRightChoiceSection } from './components/make-right-choice-section/make-right-choice-section';
import { ServiceSection } from './components/service-section/service-section';
import { PAGE_TITLE, PAGE_DESCRIPTION, PAGE_URL, PAGE_PREVIEW_IMAGE_URL, PAGE_PREVIEW_IMAGE_ALT } from './constants';

export const HomePage: FC = () => {
  const { isModalOpen, closeModal } = useModal();

  async function handleSubmit(data: FormData) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        closeModal();
      } else {
        console.error('Erro ao enviar o e-mail');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
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
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} onSubmit={handleSubmit} />
    </>
  );
};
