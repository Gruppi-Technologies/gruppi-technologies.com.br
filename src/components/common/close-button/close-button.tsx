import { FC } from 'react';

import { CloseIcon } from '@/components/icons/close-icon';
import { HTMLButtonProps } from '@/types/html';

import { CLOSE_BUTTON_LABEL } from './constants';
import { BaseCloseButton } from './styles';

interface Props extends HTMLButtonProps {
  label?: string;
}

export const CloseButton: FC<Props> = ({ label = CLOSE_BUTTON_LABEL, ...rest }) => (
  <BaseCloseButton type="button" aria-label={label} {...rest}>
    <CloseIcon />
  </BaseCloseButton>
);
