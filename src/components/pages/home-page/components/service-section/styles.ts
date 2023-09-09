import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.surface.secondary};

  padding: 2.4rem 0;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 3.8rem;
`;

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 3.8rem;
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${theme.colors.primary.dark};
`;

export const Description = styled.p`
  color: ${theme.colors.primary.dark};
  text-align: center;
`;

export const ServiceCardsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  gap: 3.5rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1280px) {
    gap: 2.4rem;
  }

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
`;
