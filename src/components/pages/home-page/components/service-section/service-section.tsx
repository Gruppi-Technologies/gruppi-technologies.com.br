import { FC } from 'react';

import { Button } from '@/components/common/button/button';
import { DesktopIcon } from '@/components/icon/desktop-icon';
import { MaintanceIcon } from '@/components/icon/maintance-icon';
import { MobileIcon } from '@/components/icon/mobile-icon';
import { SEOIcon } from '@/components/icon/seo-icon';

import { ServiceCard } from './components/service-card/service-card';
import { FIRST_DESCRIPTION, SECOND_DESCRIPTION, SECTION_TITLE, SERVICES } from './constants';
import {
  ButtonWrapper,
  Container,
  Content,
  Description,
  ServiceCardsWrapper,
  ServicesContainer,
  Title,
} from './styles';

export const ServiceSection: FC = () => (
  <Container>
    <Content>
      <Title>{SECTION_TITLE}</Title>
      <ServicesContainer>
        <Description>{FIRST_DESCRIPTION}</Description>
        <ServiceCardsWrapper>
          <ServiceCard
            title={SERVICES.web.title}
            description={SERVICES.web.description}
            renderIcon={() => <DesktopIcon />}
          />
          <ServiceCard
            title={SERVICES.mobile.title}
            description={SERVICES.mobile.description}
            renderIcon={() => <MobileIcon />}
          />
          <ServiceCard
            title={SERVICES.seo.title}
            description={SERVICES.seo.description}
            renderIcon={() => <SEOIcon />}
          />
          <ServiceCard
            title={SERVICES.maintenance.title}
            description={SERVICES.maintenance.description}
            renderIcon={() => <MaintanceIcon />}
          />
        </ServiceCardsWrapper>
        <Description>{SECOND_DESCRIPTION}</Description>
        <ButtonWrapper>
          <Button title="Quero saber mais" />
        </ButtonWrapper>
      </ServicesContainer>
    </Content>
  </Container>
);
