import { styled } from 'styled-components';

import theme from '@/styles/theme';

export const Link = styled.a`
  width: 5.6rem;
  height: 5.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 2rem;
  padding: 0.8rem;

  cursor: pointer;

  position: fixed;

  right: 2.4rem;
  bottom: 2.4rem;

  background-color: ${theme.colors.whatsapp.standard};

  z-index: 99;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${theme.colors.whatsapp.onHover};
  }
`;

export const WhatsAppLogoContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;
