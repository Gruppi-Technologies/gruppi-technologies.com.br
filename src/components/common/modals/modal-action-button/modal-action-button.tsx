import { FC } from 'react';

import { Button, Props as ButtonProps } from '@/components/common/button/button';

import { Container } from './styles';

export const ModalActionButton: FC<ButtonProps> = ({ title, ...rest }) => (
  <Container>
    <Button size="thin" {...rest} title={title} />
  </Container>
);
