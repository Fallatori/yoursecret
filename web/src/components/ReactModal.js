import Modal from "react-modal";

export function ReactModal({
  closeModal,
  modalIsOpen,
  ariaTitle,
  className,
  children,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel={ariaTitle}
      className={`modal-card ${className ?? ""}`}
      overlayClassName="modal is-active modal-background"
      appElement={document.getElementById("root") || undefined}
    >
      {children}
    </Modal>
  );
}
