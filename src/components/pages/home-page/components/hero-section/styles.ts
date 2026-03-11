import { styled } from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.primary.dark};

  padding: 6rem 0;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const HeroDescription = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  color: white;

  font-size: 3.6rem;
`;

export const HeroHighlited = styled.span`
  color: ${theme.colors.primary.mid};
`;

export const HeroSubtitle = styled.h3`
  color: white;

  font-weight: 400;
`;

export const HeroSubtitleHighlited = styled.span`
  color: ${theme.colors.primary.light};
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 20rem;
`;

export const HeroImageWrapper = styled.div`
  width: 50%;
  max-width: 100rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
