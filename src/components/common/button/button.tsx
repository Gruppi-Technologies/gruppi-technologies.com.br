import { FC, ReactNode } from 'react';

import { HTMLButtonProps } from '@/types/html';

import { Container, IconWrapper, Title } from './styles';
import { ButtonSize, ButtonVariant } from './types';

export interface Props extends HTMLButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  renderIcon?: () => ReactNode;
}

export const Button: FC<Props> = ({ title, variant = 'primary', size = 'large', renderIcon, ...rest }) => (
  <Container variant={variant} size={size} {...rest}>
    <Title>{title}</Title>
    {renderIcon && <IconWrapper>{renderIcon?.()}</IconWrapper>}
  </Container>
);
