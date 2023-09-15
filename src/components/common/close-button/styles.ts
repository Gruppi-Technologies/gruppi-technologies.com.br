import styled from 'styled-components';

import theme from '@/styles/theme';

export const BaseCloseButton = styled.button`
  max-width: 2.5rem;
  max-height: 2.5rem;

  border-radius: 50%;
  background-color: ${theme.colors.neutral[100]};

  color: ${theme.colors.neutral[500]};

  padding: 0.375rem;

  border: none;

  &:hover {
    background-color: ${theme.colors.neutral[200]};
  }
`;
