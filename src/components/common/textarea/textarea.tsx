import { ForwardedRef, forwardRef } from 'react';

import withRefIncludedInProps from '@/components/higher-order/with-ref-included-in-props';
import { HTMLTextareaProps } from '@/types/html';

import { Alert } from '../alert/alert';
import { BaseTextarea, Container, LabelContainer, Required } from './styles';

type InheritedHTMLTextareaProps = Omit<HTMLTextareaProps, 'id'>;

type TextareaProps = { ref?: ForwardedRef<HTMLTextAreaElement> } & InheritedHTMLTextareaProps;

type Props = {
  label?: string;
  errorMessage?: string;
  isRequired?: boolean;
} & TextareaProps;

const Textarea = ({ name, label, isRequired, errorMessage, ...rest }: Props): JSX.Element => (
  <Container>
    {label && (
      <LabelContainer>
        <label htmlFor={name}>{label}</label>
        {isRequired && <Required> *</Required>}
      </LabelContainer>
    )}
    <BaseTextarea id={name} name={name} {...rest} />
    {errorMessage && <Alert role="alert" message={errorMessage} />}
  </Container>
);

export default forwardRef(withRefIncludedInProps(Textarea)) as typeof Textarea;
