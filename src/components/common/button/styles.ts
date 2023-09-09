import styled, { css } from 'styled-components';

import theme from '@/styles/theme';

import { ButtonSize, ButtonVariant } from './types';

interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
}

function getStylesByVariant(variant: ButtonVariant) {
  if (variant === 'primary') {
    return css`
      background-color: ${theme.colors.primary.mid};

      border: none;

      color: white;
    `;
  }
  if (variant === 'white-outline') {
    return css`
      background-color: ${theme.colors.surface.primary};

      border: 2px solid ${theme.colors.primary.dark};
      color: ${theme.colors.primary.dark};

      svg {
        color: ${theme.colors.primary.dark};
      }
    `;
  }
  return '';
}

export const Container = styled.button<ButtonProps>`
  width: 100%;

  min-height: ${({ size }) => (size === 'large' ? '5rem' : '4.2rem')};
  max-height: ${({ size }) => (size === 'large' ? '5rem' : '4.2rem')};

  padding: ${({ size }) => (size === 'large' ? '2.4rem' : '1.4rem')};

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  border-radius: ${theme.borderRadius};

  position: relative;

  &:hover {
    filter: brightness(95%);
  }

  ${({ variant }) => getStylesByVariant(variant)};
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  max-width: 1.8rem;
  max-height: 1.8rem;
`;
