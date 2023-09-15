import { ReactNode, useState, useCallback, useMemo } from 'react';

import { ModalContext, ModalContextValue } from './modal-context';

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const modal = useMemo<ModalContextValue>(
    () => ({
      isModalOpen,
      openModal,
      closeModal,
    }),
    [isModalOpen, openModal, closeModal],
  );

  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};
