import styled from 'styled-components';

import theme from '@/styles/theme';

export const InformationContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InformationContent = styled.div`
  width: 100%;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.8rem;

  gap: 1rem;
`;

export const InfoText = styled.span`
  display: block;
  word-wrap: break-word;
`;

export const IconWrapper = styled.div`
  min-width: 2.4rem;
  max-width: 2.4rem;

  color: ${theme.colors.primary.mid};
`;
