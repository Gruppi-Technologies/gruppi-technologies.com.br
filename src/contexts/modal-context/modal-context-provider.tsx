import { ReactNode, useState, useCallback, useMemo } from 'react';

import { ModalContext, ModalContextValue, ModalState } from './modal-context';

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalState>({});

  const openModal = useCallback((modalId: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: true,
    }));
  }, []);

  const closeModal = useCallback((modalId: string) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalId]: false,
    }));
  }, []);

  const isModalOpen = useCallback(
    (modalId: string) => {
      return !!modals[modalId];
    },
    [modals],
  );

  const modalContextValue = useMemo<ModalContextValue>(
    () => ({
      modals,
      openModal,
      closeModal,
      isModalOpen,
    }),
    [modals, openModal, closeModal, isModalOpen],
  );

  return <ModalContext.Provider value={modalContextValue}>{children}</ModalContext.Provider>;
};
