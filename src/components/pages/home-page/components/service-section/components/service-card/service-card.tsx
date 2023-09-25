import { FC, ReactElement } from 'react';

import { Container, IconWrapper, ServiceDescription, ServiceTitle } from './styles';

interface Props {
  title: string;
  description: string;
  icon: ReactElement;
}

export const ServiceCard: FC<Props> = ({ title, description, icon }) => (
  <Container>
    <IconWrapper>{icon}</IconWrapper>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
  </Container>
);
