import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.4rem;

  background-color: ${theme.colors.primary.light};

  border-top: 1px solid ${theme.colors.primary.mid};
  border-bottom: 1px solid ${theme.colors.primary.mid};
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 4rem;
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 3.6rem;
  font-weight: 500;
  color: ${theme.colors.primary.dark};

  @media (max-width: 350px) {
    font-size: 3rem;
  }
`;
