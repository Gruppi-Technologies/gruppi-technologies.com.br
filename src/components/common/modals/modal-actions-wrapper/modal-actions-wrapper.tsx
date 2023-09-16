import { FC, ReactNode } from 'react';

import { BaseModalActionsWrapper } from './styles';

interface Props {
  children: ReactNode;
}

export const ModalActionsWrapper: FC<Props> = ({ children }) => {
  return <BaseModalActionsWrapper>{children}</BaseModalActionsWrapper>;
};
