import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.span`
  display: flex;
  align-items: center;

  color: ${theme.colors.semantic.alert};
  font-weight: 500;
  font-size: 1.4rem;

  svg {
    min-width: 1.4rem;
    min-height: 1.4rem;
    max-width: 1.8rem;
    max-width: 1.8rem;
    margin-right: 0.6rem;
    margin-bottom: 0.05rem;
  }
`;
