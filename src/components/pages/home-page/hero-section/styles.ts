import { styled } from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.neutral[900]};
`;

export const Content = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${theme.colors.primary.mid};
`;
