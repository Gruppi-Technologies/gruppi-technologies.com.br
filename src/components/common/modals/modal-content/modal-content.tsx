import { FC } from 'react';

import { HTMLDivProps } from '@/types/html';

import { Container } from './styles';

export const ModalContent: FC<HTMLDivProps> = ({ children, ...rest }) => <Container {...rest}>{children}</Container>;
