import { FC, useState } from 'react';
import { toast } from 'react-toastify';

import { Footer } from '@/components/common/footer/footer';
import { Header } from '@/components/common/header/header';
import { MODALS } from '@/components/common/modals/constants';
import { ContactInfoModal } from '@/components/common/modals/contact-info-modal/contact-info-modal';
import { ContactModal } from '@/components/common/modals/contact-modal/contact-modal';
import { FormData } from '@/components/common/modals/contact-modal/types';
import { Page } from '@/components/common/page/page';
import { WhatsAppLink } from '@/components/common/whatsapp-link/whatsapp-link';
import { useModal } from '@/hooks/use-modal/use-modal';

import { AboutUsSection } from './components/about-us-section/about-us-section';
import { FAQSection } from './components/faq-section/faq-section';
import { HeroSection } from './components/hero-section/hero-section';
import { MakeRightChoiceSection } from './components/make-right-choice-section/make-right-choice-section';
import { ServiceSection } from './components/service-section/service-section';
import {
  PAGE_TITLE,
  PAGE_DESCRIPTION,
  PAGE_URL,
  PAGE_PREVIEW_IMAGE_URL,
  PAGE_PREVIEW_IMAGE_ALT,
  TOAST_CONFIG,
  SUCCESS_MAIL_MESSAGE,
  FAIL_MAIL_MESSAGE,
} from './constants';

export const HomePage: FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: FormData) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        toast(SUCCESS_MAIL_MESSAGE, TOAST_CONFIG.success);
        closeModal(MODALS.CONTACT_FORM);
      } else {
        toast(FAIL_MAIL_MESSAGE, TOAST_CONFIG.fail);
        console.error(FAIL_MAIL_MESSAGE);
      }
      setIsLoading(false);
    } catch (error) {
      toast(FAIL_MAIL_MESSAGE, TOAST_CONFIG.fail);
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

        <WhatsAppLink />

        <Footer />
      </Page>
      <ContactModal
        isOpen={isModalOpen(MODALS.CONTACT_FORM)}
        onRequestClose={() => closeModal(MODALS.CONTACT_FORM)}
        onSubmit={handleSubmit}
        loading={isLoading}
      />
      <ContactInfoModal
        isOpen={isModalOpen(MODALS.CONTACT_INFO)}
        onRequestClose={() => closeModal(MODALS.CONTACT_INFO)}
      />
    </>
  );
};
