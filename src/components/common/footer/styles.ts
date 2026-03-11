import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  background-color: ${theme.colors.primary.dark};
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding: 2.4rem;

  position: relative;
`;

export const LogoWrapper = styled.div`
  width: 40rem;
  height: 26.6rem;

  position: relative;
`;

export const ContactContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: end;
`;

export const CompanyCopyright = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  border-top: 1px solid ${theme.colors.primary.mid};
  background-color: ${theme.colors.primary.dark};
`;

export const CompanyText = styled.span`
  color: ${theme.colors.primary.light};
`;
