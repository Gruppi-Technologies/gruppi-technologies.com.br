import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.header`
  width: 100%;
  min-height: 7.5rem;

  border-bottom: 1px solid ${theme.colors.primary.mid};

  background-color: ${theme.colors.primary.dark};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrapper = styled.div`
  width: 15rem;
  height: 6.6rem;

  position: relative;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 18rem;

  @media (max-width: 540px) {
    max-width: 13rem;
  }
`;
