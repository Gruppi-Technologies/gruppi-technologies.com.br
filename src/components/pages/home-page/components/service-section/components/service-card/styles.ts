import { styled } from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  height: 100%;

  max-width: 35rem;
  min-height: 25rem;

  padding: 3.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 1.6rem;

  color: ${theme.colors.primary.dark};

  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.primary.dark};

  @media (max-width: 1280px) {
    padding: 2.4rem;
  }
`;

export const ServiceTitle = styled.h4`
  font-weight: 500;
  text-align: center;
`;

export const ServiceDescription = styled.p`
  font-size: 1.4rem;

  text-align: justify;
`;

export const IconWrapper = styled.div`
  max-width: 2.5rem;
  max-height: 2.5rem;
`;
