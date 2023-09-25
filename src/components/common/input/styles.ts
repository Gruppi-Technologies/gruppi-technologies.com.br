import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 0.4rem;

  label {
    color: ${theme.colors.primary.dark};
    font-weight: 500;
  }

  input:focus {
    border-color: ${theme.colors.primary.mid};
    box-shadow: 0px 0px 0px 0.1rem ${theme.colors.primary.mid};
  }
`;

export const BaseInput = styled.input`
  padding: 1rem;
  border-radius: ${theme.borderRadius};
  border: 1px solid ${theme.colors.neutral[200]};

  outline: none;

  color: ${theme.colors.neutral[800]};
  transition:
    border-color 0.15s,
    box-shadow 0.15s,
    border-color 0.15s;

  &::placeholder {
    color: ${theme.colors.neutral[500]};
    opacity: 0.6;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.3rem;
`;

export const Required = styled.span`
  color: ${theme.colors.semantic.negative};
`;
