export function Modal({ title, isActive, onClose, className, children }) {
  return (
    <div className={`modal ${isActive ? "is-active" : ""} ${className}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title modal-rule-title">
            {title ?? "Edit Rule"}
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        {children}
      </div>
    </div>
  );
}

export default Modal;
