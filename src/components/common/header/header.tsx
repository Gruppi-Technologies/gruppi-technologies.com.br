import Image from 'next/image';
import { FC } from 'react';

import { COMPANY_NAME } from '@/components/pages/home-page/constants';
import { useModal } from '@/hooks/use-modal/use-modal';

import { Button } from '../button/button';
import { MODALS } from '../modals/constants';
import { ButtonWrapper, Container, Content, LogoWrapper } from './styles';

export const Header: FC = () => {
  const { openModal } = useModal();

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <Image src="/images/brand/logo.svg" alt={COMPANY_NAME} fill quality={100} />
        </LogoWrapper>
        <ButtonWrapper>
          <Button title="Contato" size="thin" onClick={() => openModal(MODALS.CONTACT_INFO)} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};
