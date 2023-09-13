import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  background-color: ${theme.colors.neutral[900]};
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
  width: 15rem;
  height: 22.8rem;

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

  border-top: 1px solid ${theme.colors.neutral[800]};
  background-color: ${theme.colors.neutral[900]};
`;

export const CompanyText = styled.span`
  color: ${theme.colors.neutral[500]};
`;
