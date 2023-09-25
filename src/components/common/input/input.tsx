import { ForwardedRef, forwardRef } from 'react';

import withRefIncludedInProps from '@/components/higher-order/with-ref-included-in-props';
import { HTMLInputProps } from '@/types/html';

import { Alert } from '../alert/alert';
import { BaseInput, Container, LabelContainer, Required } from './styles';

type InheritedHTMLInputProps = Omit<HTMLInputProps, 'id'>;

type InputProps = { ref?: ForwardedRef<HTMLInputElement> } & InheritedHTMLInputProps;

type Props = {
  label?: string;
  isRequired?: boolean;
  errorMessage?: string;
} & InputProps;

const Input = ({ name, label, type, isRequired, errorMessage, ...rest }: Props): JSX.Element => {
  return (
    <Container>
      {label && (
        <LabelContainer>
          <label htmlFor={name}>{label}</label>
          {isRequired && <Required> *</Required>}
        </LabelContainer>
      )}
      <BaseInput id={name} name={name} type={type} {...rest} />
      {errorMessage && <Alert role="alert" message={errorMessage} />}
    </Container>
  );
};

export default forwardRef(withRefIncludedInProps(Input)) as typeof Input;
