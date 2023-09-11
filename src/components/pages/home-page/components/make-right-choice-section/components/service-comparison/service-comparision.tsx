import { FC } from 'react';

import { ServiceComparisonItem } from './service-comparison-item/service-comparison-item';
import { Container, Title } from './styles';
import { ServiceComparisonItemProps, ServiceComparisonVariant } from './types';

interface Props {
  title: string;
  variant: ServiceComparisonVariant;
  item: ServiceComparisonItemProps[];
}

export const ServiceComparison: FC<Props> = ({ variant = 'positive', title, item }) => (
  <Container variant={variant}>
    <Title>{title}</Title>

    <>
      {item.map((item) => (
        <ServiceComparisonItem key={item.id} text={item.text} icon={item.icon} variant={variant} />
      ))}
    </>
  </Container>
);
