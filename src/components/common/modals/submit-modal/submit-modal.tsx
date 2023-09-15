import { FC } from 'react';

import { ButtonVariant } from '@/components/common/button/types';
import Modal, { Props as ModalProps } from '@/components/common/modals/modal/modal';

export interface Props extends ModalProps {
  submitButtonText?: string;
  submitButtonVariant?: ButtonVariant;
  shouldCloseOnSubmit?: boolean;
  onSubmit?: () => void;
  disableButton?: boolean;
}

export const SubmitModal: FC<Props> = ({
  submitButtonText = 'Enviar',
  submitButtonVariant = 'primary',
  onSubmit,
  children,
  ...rest
}) => {
  function handleConfirm() {
    onSubmit?.();
  }

  return (
    <Modal {...rest}>
      <Modal.Content>{children}</Modal.Content>

      <Modal.Actions>
        <Modal.ActionButton
          title={submitButtonText}
          variant={submitButtonVariant}
          onClick={handleConfirm}
          type="submit"
        />
      </Modal.Actions>
    </Modal>
  );
};
