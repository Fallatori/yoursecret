import axios from "axios";
import useRefreshContext from "../hooks/useRefreshContext";
import { CrazyDavis } from "./CrazyDavis";
import { ReactModal } from "./ReactModal";
import { EditReactModal } from "./EditReactModal";
import useModalContext from "../hooks/modalStatesContext";

export function EditContainer({ id, text, onComplete }) {
  const { setShouldRefresh } = useRefreshContext();
  const { closeModal, modalIsOpen, openModal } = useModalContext();

  const handleSubmit = async (data) => {
    try {
      await axios.put(`http://localhost:3001/api/secrets/${id}`, { data });
      setShouldRefresh(true);
      onComplete();
    } catch (err) {
      console.log({ err });
      console.error(err);
    }
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/api/secrets/${id}`);
    console.log("EditContainer setting refresh true");
    setShouldRefresh(true);
  };

  return (
    <>
      <div className="edit-container">
        <CrazyDavis text="✎" onClick={openModal} />
        <CrazyDavis text="╳" onClick={handleDelete} />
      </div>
      <ReactModal
        className="react-modal"
        modalIsOpen={modalIsOpen}
        closeModal={() => {
          console.log("Closing modal and such");
          closeModal();
        }}
        ariaTitle="Edit card"
      >
        <EditReactModal
          text={text}
          onSubmit={handleSubmit}
          closeModal={closeModal}
        />
      </ReactModal>
    </>
  );
}
