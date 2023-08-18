import { createContext, useState } from "react";

export const ModalStates = createContext();

export function ModalProvider({ children }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(e) {
    e.stopPropagation();
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const valueToShare = {
    openModal,
    closeModal,
    modalIsOpen,
    setIsOpen,
  };

  return (
    <ModalStates.Provider value={valueToShare}>{children}</ModalStates.Provider>
  );
}

export default ModalStates;
