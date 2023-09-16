import { FC } from 'react';

import { WhatsAppLogo } from '@/components/icons/whatsapp-logo';
import globalConfig from '@/config/global-config/global-config';

import { WHATSAPP_LINK_LABEL } from './constants';
import { Link, WhatsAppLogoContainer } from './styles';

export const WhatsAppLink: FC = () => (
  <Link href={globalConfig.whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={WHATSAPP_LINK_LABEL}>
    <WhatsAppLogoContainer>
      <WhatsAppLogo />
    </WhatsAppLogoContainer>
  </Link>
);
