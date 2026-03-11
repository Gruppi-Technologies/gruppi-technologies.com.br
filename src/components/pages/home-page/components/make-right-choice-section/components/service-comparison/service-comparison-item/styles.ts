import styled from 'styled-components';

import theme from '@/styles/theme';

import { ServiceComparisonVariant } from '../types';

interface ContainerProps {
  variant: ServiceComparisonVariant;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;

  max-width: 40rem;
  min-width: 37rem;

  color: ${({ variant }) =>
    variant === 'positive' ? `${theme.colors.primary.light}` : `${theme.colors.neutral[200]}`};

  border-radius: 3rem;
  border: 1px solid
    ${({ variant }) => (variant === 'positive' ? `${theme.colors.primary.light}` : `${theme.colors.neutral[200]}`)};

  display: flex;
  align-items: center;

  padding: 1.4rem;
  gap: 1rem;

  &:hover {
    color: ${({ variant }) =>
      variant === 'positive' ? `${theme.colors.semantic.positive}` : `${theme.colors.semantic.negative}`};
    border-color: ${({ variant }) =>
      variant === 'positive' ? `${theme.colors.semantic.positive}` : `${theme.colors.semantic.negative}`};
  }

  @media (max-width: 540px) {
    font-size: 1.4rem;
    min-width: 3.5rem;
  }
`;

export const Text = styled.span``;

export const IconWrapper = styled.div`
  max-width: 2.4rem;
  max-height: 2.4rem;
`;
