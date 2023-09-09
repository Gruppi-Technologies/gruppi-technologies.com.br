import Image from 'next/image';
import { FC } from 'react';

import { Button } from '../button/button';
import { ButtonWrapper, Container, Content, LogoWrapper } from './styles';

export const Header: FC = () => (
  <Container>
    <Content>
      <LogoWrapper>
        <Image src="/images/brand/logo.png" alt="Gruppi Technologies" fill quality={100} />
      </LogoWrapper>
      <ButtonWrapper>
        <Button title="Contato" size="thin" />
      </ButtonWrapper>
    </Content>
  </Container>
);
