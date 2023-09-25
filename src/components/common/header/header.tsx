import Image from 'next/image';
import { FC } from 'react';

import { COMPANY_NAME } from '@/components/pages/home-page/constants';
import globalConfig from '@/config/global-config/global-config';

import { Button } from '../button/button';
import { ButtonWrapper, Container, Content, LogoWrapper } from './styles';

export const Header: FC = () => (
  <Container>
    <Content>
      <LogoWrapper>
        <Image src="/images/brand/logo.png" alt={COMPANY_NAME} fill quality={100} />
      </LogoWrapper>
      <ButtonWrapper>
        <Button title="Contato" size="thin" onClick={() => window.open(globalConfig.whatsappLink())} />
      </ButtonWrapper>
    </Content>
  </Container>
);
