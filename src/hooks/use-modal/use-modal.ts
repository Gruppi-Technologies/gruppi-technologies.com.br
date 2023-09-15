import { ModalContext, ModalContextValue } from '@/contexts/modal-context/modal-context';

type Modal = ModalContextValue;

export function useModal(): Modal {
  return ModalContext.useContext();
}
