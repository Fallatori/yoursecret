import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export const RandomModal = ({ isActive, onClose }) => {
  const [text, setText] = useState();

  useEffect(() => {
    const fetchSecret = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/secrets/random"
      );
      setText(response.data.text);
    };
    fetchSecret();
  }, []);

  return (
    <Modal
      isActive={isActive}
      onClose={onClose}
      title="This is your rule!"
      className="better-modal-lol"
    >
      <section className="modal-card-foot">
        <p>{text}</p>
      </section>
    </Modal>
  );
};
