import { FC } from 'react';

import { Button } from '@/components/common/button/button';
import { useModal } from '@/hooks/use-modal/use-modal';

import { STANDARD_BUTTON_TITLE } from '../../constants';
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

export const ServiceSection: FC = () => {
  const { openModal } = useModal();

  return (
    <Container>
      <Content>
        <Title>{SECTION_TITLE}</Title>
        <ServicesContainer>
          <Description>{FIRST_DESCRIPTION}</Description>
          <ServiceCardsWrapper>
            <>
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </>
          </ServiceCardsWrapper>
          <Description>{SECOND_DESCRIPTION}</Description>
          <ButtonWrapper>
            <Button title={STANDARD_BUTTON_TITLE} onClick={openModal} />
          </ButtonWrapper>
        </ServicesContainer>
      </Content>
    </Container>
  );
};
