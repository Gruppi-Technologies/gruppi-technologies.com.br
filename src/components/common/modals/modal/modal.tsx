import { FC, ReactNode } from 'react';
import { Props as ModalProps } from 'react-modal';

import { CloseButton } from '@/components/common/close-button/close-button';
import globalConfig from '@/config/global-config/global-config';

import { ModalActionButton } from '../modal-action-button/modal-action-button';
import { ModalActionsWrapper } from '../modal-actions-wrapper/modal-actions-wrapper';
import { ModalContent } from '../modal-content/modal-content';
import { ModalHeader, StyledModal } from './styles';

export interface Props extends ModalProps {
  title?: ReactNode;
  children?: ReactNode;
  enableScrollOnOverflow?: boolean;
}

const ModalComponent: FC<Props> = ({
  onRequestClose,
  children,
  enableScrollOnOverflow = true,
  ariaHideApp = globalConfig.mode() !== 'test',
  ...rest
}) => (
  <StyledModal
    onRequestClose={onRequestClose}
    ariaHideApp={ariaHideApp}
    shouldFocusAfterRender
    shouldReturnFocusAfterClose
    shouldCloseOnOverlayClick
    enableScrollOnOverflow={enableScrollOnOverflow}
    preventScroll
    {...rest}
  >
    <ModalHeader>
      <CloseButton onClick={onRequestClose} />
    </ModalHeader>

    {children}
  </StyledModal>
);

type ExtendedModal = typeof ModalComponent & {
  Content: typeof ModalContent;
  Actions: typeof ModalActionsWrapper;
  ActionButton: typeof ModalActionButton;
};

const Modal: ExtendedModal = Object.assign(ModalComponent, {
  Content: ModalContent,
  Actions: ModalActionsWrapper,
  ActionButton: ModalActionButton,
});

export default Modal;
