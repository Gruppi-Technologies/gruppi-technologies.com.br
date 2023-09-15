import styled from 'styled-components';

import theme from '@/styles/theme';

export const Form = styled.form`
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

export const ButtonWrapper = styled.div`
  max-width: 20rem;
`;
