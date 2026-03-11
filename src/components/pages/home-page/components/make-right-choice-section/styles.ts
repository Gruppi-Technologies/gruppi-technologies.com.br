import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary.dark};

  padding: 2.4rem;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 5rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${theme.colors.primary.light};

  @media (max-width: 350px) {
    font-size: 3rem;
  }
`;

export const ServicesComparisonWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  @media (max-width: 980px) {
    flex-direction: column;

    & > :last-child {
      order: -1;
    }
  }
`;

export const ButtonWrapper = styled.div`
  max-width: 20rem;
`;
