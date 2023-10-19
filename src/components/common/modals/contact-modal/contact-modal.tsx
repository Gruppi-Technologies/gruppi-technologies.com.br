import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Input from '../../input/input';
import Textarea from '../../textarea/textarea';
import Modal, { Props as ModalProps } from '../modal/modal';
import { Form } from './styles';
import { FormData } from './types';
import validationSchema from './validation-schema';

interface Props extends ModalProps {
  loading: boolean;
  onSubmit: (data: FormData) => Promise<void>;
}

export const ContactModal: FC<Props> = ({ isOpen = false, onSubmit, loading: isLoading = false, ...rest }) => {
  const {
    register,
    reset: resetForm,
    handleSubmit,
    formState,
  } = useForm<FormData>({ resolver: yupResolver(validationSchema) });

  const onSubmitForm: SubmitHandler<FormData> = (data) => {
    onSubmit?.(data);
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  return (
    <Modal isOpen={isOpen} {...rest}>
      <Modal.Content>
        <Form onSubmit={handleSubmit(onSubmitForm)}>
          <Input
            type="text"
            {...register('name', { required: true })}
            label="Nome"
            isRequired
            errorMessage={formState.errors.name?.message}
          />
          <Input
            type="text"
            {...register('email', { required: true })}
            label="Email"
            isRequired
            errorMessage={formState.errors.email?.message}
          />
          <Input
            type="text"
            {...register('phone', { required: true })}
            label="Telefone"
            isRequired
            errorMessage={formState.errors.phone?.message}
          />
          <Textarea
            {...register('message', { required: true })}
            label="Mensagem"
            isRequired
            errorMessage={formState.errors.message?.message}
          />
          <Modal.ActionButton title="Enviar" type="submit" loading={isLoading ? true : undefined} />
        </Form>
      </Modal.Content>
    </Modal>
  );
};
