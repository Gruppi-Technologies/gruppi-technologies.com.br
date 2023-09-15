import { createContext } from '@/utils/contexts';

export interface ModalContextValue {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextValue>('ModalContext');
