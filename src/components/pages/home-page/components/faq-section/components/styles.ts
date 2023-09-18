import { styled } from 'styled-components';

import theme from '@/styles/theme';

interface FaqCardContainerProps {
  $expanded?: boolean;
}

export const FaqCardContainer = styled.div<FaqCardContainerProps>`
  width: 60%;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  cursor: pointer;

  border-radius: ${theme.borderRadius};

  padding: 2rem;
  transition: all 0.1s ease-out;

  color: ${theme.colors.primary.dark};

  background-color: ${({ $expanded }) =>
    $expanded ? `${theme.colors.surface.primary}` : `${theme.colors.primary.light}`};

  @media (max-width: 980px) {
    width: 80%;
  }

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const FaqCardContent = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Question = styled.span`
  font-weight: 500;
  font-size: 2.4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Answer = styled.p`
  font-size: 2rem;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

interface IconWrapperProps {
  $rotated?: boolean;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  max-width: 2.4rem;
  max-height: 2.4rem;

  transition: transform 0.3s ease-in-out;
  transform: ${({ $rotated }) => ($rotated ? 'rotate(45deg)' : 'rotate(0)')};
`;
