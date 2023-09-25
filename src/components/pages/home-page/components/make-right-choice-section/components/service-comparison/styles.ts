import styled from 'styled-components';

import theme from '@/styles/theme';

import { ServiceComparisonVariant } from './types';

interface ContainerProps {
  variant: ServiceComparisonVariant;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 2rem;

  h3 {
    color: ${({ variant }) =>
      variant === 'positive' ? `${theme.colors.primary.mid}` : `${theme.colors.neutral[500]}`};
  }
`;

export const Title = styled.h3`
  font-weight: bold;
  margin-bottom: 1.6rem;
`;
