import Image from 'next/image';
import { FC } from 'react';

import { COMPANY_NAME } from '@/components/pages/home-page/constants';

import { CURRENT_YEAR } from './constants';
import { CompanyCopyright, CompanyText, Container, Content, LogoWrapper } from './styles';

export const Footer: FC = () => (
  <Container>
    <Content>
      <LogoWrapper>
        <Image src="/images/brand/vertical-logo.png" alt={COMPANY_NAME} fill objectFit="contain" />
      </LogoWrapper>
    </Content>
    <CompanyCopyright>
      <CompanyText>
        {COMPANY_NAME} {CURRENT_YEAR}
      </CompanyText>
    </CompanyCopyright>
  </Container>
);
