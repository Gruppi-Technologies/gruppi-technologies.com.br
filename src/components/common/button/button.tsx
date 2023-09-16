import { FC, ReactNode } from 'react';

import { HTMLButtonProps } from '@/types/html';

import { AnimatedLoadingIcon, Container, IconWrapper, Title } from './styles';
import { ButtonSize, ButtonVariant } from './types';

export interface Props extends HTMLButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  renderIcon?: () => ReactNode;
}

export const Button: FC<Props> = ({
  title,
  variant = 'primary',
  size = 'large',
  renderIcon,
  loading: isLoading = false,
  ...rest
}) => (
  <Container $variant={variant} size={size} loading={isLoading ? true : undefined} {...rest}>
    {!isLoading && <Title>{title}</Title>}
    {renderIcon && <IconWrapper>{renderIcon?.()}</IconWrapper>}
    {isLoading && <AnimatedLoadingIcon aria-hidden={!isLoading} />}
  </Container>
);
