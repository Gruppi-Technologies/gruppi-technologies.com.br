import { styled } from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.surface.secondary};

  padding: 2.4rem 0 10.9rem 0;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${theme.colors.primary.dark};

  margin-bottom: 1.5rem;

  @media (max-width: 420px) {
    font-size: 3rem;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
`;
