import { useState, useEffect } from "react";
import axios from "axios";

export const SecretModalContents = () => {
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
    <>
      <div className="modal-card-head">
        <h2 className="modal-card-title">This is your rule!</h2>
        {/*<button onClick={closeModal} className="delete"></button>*/}
      </div>
      <div className="modal-card-foot">
        <div className="secret">{text}</div>
      </div>
    </>
  );
};
