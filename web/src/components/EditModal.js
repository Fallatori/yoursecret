import { useState } from "react";

import Modal from "./Modal";

export const EditModal = ({ isActive, onClose, onSubmit, text }) => {
  const [inputContent, setInputContent] = useState(text);
  return (
    <Modal isActive={isActive} onClose={onClose}>
      <form>
        <section className="modal-card-body">
          <textarea
            rows="3"
            cols="33"
            className="textarea"
            type="text"
            value={inputContent}
            onChange={(e) => setInputContent(e.target.value)}
          ></textarea>
        </section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button is-info"
            onClick={() => {
              onSubmit(inputContent);
              onClose();
            }}
          >
            Save changes
          </button>
          <button type="button" className="button is-danger" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </form>
    </Modal>
  );
};
