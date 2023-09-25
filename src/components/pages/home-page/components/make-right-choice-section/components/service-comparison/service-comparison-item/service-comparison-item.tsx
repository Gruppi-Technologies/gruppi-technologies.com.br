import { FC } from 'react';

import { ServiceComparisonItemProps } from '../types';
import { Container, IconWrapper, Text } from './styles';

export const ServiceComparisonItem: FC<ServiceComparisonItemProps> = ({ variant = 'positive', text, icon }) => (
  <Container variant={variant}>
    <IconWrapper>{icon}</IconWrapper>
    <Text>{text}</Text>
  </Container>
);
