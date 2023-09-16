import { FC } from 'react';

import { AlertIcon } from '@/components/icons/alert-icon';
import { HTMLSpanProps } from '@/types/html';

import { Container } from './styles';

interface Props extends HTMLSpanProps {
  message: string;
}

export const Alert: FC<Props> = ({ message, ...rest }) => (
  <Container aria-label={message} {...rest}>
    <AlertIcon />
    {message}
  </Container>
);
