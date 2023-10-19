import { createContext } from '@/utils/contexts';

export interface ModalState {
  [key: string]: boolean;
}

export interface ModalContextValue {
  modals: ModalState;
  isModalOpen: (modalId: string) => boolean;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
}

export const ModalContext = createContext<ModalContextValue>('ModalContext');
