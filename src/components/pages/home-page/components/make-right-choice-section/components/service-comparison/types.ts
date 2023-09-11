import { ReactElement } from 'react';

export interface ServiceComparisonItemProps {
  id?: string;
  text: string;
  icon: ReactElement;
  variant?: ServiceComparisonVariant;
}

export type ServiceComparisonVariant = 'positive' | 'negative';
