import styled, { css, keyframes } from 'styled-components';

import { LoadingIcon } from '@/components/icons/loading-icon';
import theme from '@/styles/theme';

import { ButtonSize, ButtonVariant } from './types';

interface ButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  loading?: boolean;
}

function getStylesByVariant(variant: ButtonVariant) {
  if (variant === 'primary') {
    return css`
      background-color: ${theme.colors.primary.mid};

      border: none;

      color: white;

      &:hover {
        background-color: ${theme.colors.primary.dark};
      }
    `;
  }
  if (variant === 'outline') {
    return css`
      background-color: transparent;

      border: 2px solid ${theme.colors.primary.dark};
      color: ${theme.colors.primary.dark};

      svg {
        color: ${theme.colors.primary.dark};
      }

      &:hover {
        background-color: ${theme.colors.primary.dark};
        color: white;
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

  transition:
    0.3s background-color ease,
    0.3s color ease;

  ${({ variant }) => getStylesByVariant(variant)};

  &:disabled {
    background-color: ${theme.colors.neutral[200]};
    cursor: not-allowed;
    color: ${theme.colors.neutral[500]};
  }

  p {
    visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
  }
`;

export const Title = styled.p`
  font-weight: 800;
`;

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnimatedLoadingIcon = styled(LoadingIcon)`
  width: auto;
  height: 45%;

  position: absolute;
  top: 50%;
  left: 50%;

  animation:
    ${rotate} 0.75s infinite linear,
    ${fadeIn} 0.15s;
`;

export const IconWrapper = styled.div`
  max-width: 1.8rem;
  max-height: 1.8rem;
`;
