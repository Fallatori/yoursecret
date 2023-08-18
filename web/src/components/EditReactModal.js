import { useState } from "react";

export const EditReactModal = ({ onClose, onSubmit, text, closeModal }) => {
  const [inputContent, setInputContent] = useState(text);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <header className="modal-card-head modal-edit-head">
        <p className="modal-card-title modal-rule-title">Edit Rule</p>
      </header>
      <form>
        <section className="modal-card-body modal-edit-body">
          <textarea
            rows="3"
            cols="33"
            className="textarea"
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          ></textarea>
        </section>
        <footer className="modal-card-foot modal-edit-foot">
          <button
            type="button"
            className="button is-info"
            onClick={() => {
              onSubmit(inputContent);
              closeModal();
            }}
          >
            Save changes
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={closeModal}
          >
            Cancel
          </button>
        </footer>
      </form>
    </div>
  );
};
