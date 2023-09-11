import { FC, ReactNode } from 'react';

import { Container, IconWrapper, ServiceDescription, ServiceTitle } from './styles';

interface Props {
  renderIcon: () => ReactNode;
  title: string;
  description: string;
}

export const ServiceCard: FC<Props> = ({ title, description, renderIcon }) => (
  <Container>
    <IconWrapper>{renderIcon()}</IconWrapper>
    <ServiceTitle>{title}</ServiceTitle>
    <ServiceDescription>{description}</ServiceDescription>
  </Container>
);
