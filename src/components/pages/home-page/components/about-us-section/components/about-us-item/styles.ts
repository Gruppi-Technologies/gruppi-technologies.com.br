import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  height: 100%;

  max-width: 40rem;
  min-height: 20rem;

  color: ${theme.colors.primary.dark};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  gap: 0.8rem;
`;

export const Title = styled.h3`
  font-size: 2.8rem;

  @media (max-width: 350px) {
    font-size: 2.3rem;
  }
`;

export const Text = styled.p`
  text-align: justify;
`;
