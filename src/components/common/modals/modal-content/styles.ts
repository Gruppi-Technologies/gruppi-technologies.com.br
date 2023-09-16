import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;

  font-size: 1.4rem;
  line-height: 2rem;

  padding: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  color: ${theme.colors.neutral[500]};
`;
