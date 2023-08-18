import "bulma/css/bulma.css";
import "./App.css";
import CreateRule from "./components/CreateContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import List from "./components/List";
import { useRef, useState } from "react";
import { ReactModal } from "./components/ReactModal";
import { SecretModalContents } from "./components/SecretModalContents";
import useModalContext from "./hooks/modalStatesContext";
import { useSize } from "./hooks/useSize";

function App() {
  const [showList, setShowList] = useState(false);
  const { modalIsOpen, openModal, closeModal } = useModalContext();

  const boxRef = useRef(null);
  const size = useSize(boxRef);

  const getContent = () => {
    if (showList)
      return (
        <div className="list-container">
          <List />
        </div>
      );
    return (
      <>
        <button className="random-btn button" onClick={openModal}>
          Get Random Rule
        </button>

        <ReactModal
          className="react-modal secret-modal"
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        >
          <SecretModalContents />
        </ReactModal>
      </>
    );
  };

  //Main content flex space between
  //Navbar bulma fixed top
  //currentContent should be Center
  //CreateRule fixed bottom

  return (
    <div className="main-content">
      <Navbar
        onClickList={() => setShowList((v) => !v)}
        showingList={showList}
      />
      <div className="central-content">{getContent()}</div>
      <Modal />
      <div style={{ height: size?.height }}></div>
      <div className="create-box" ref={boxRef}>
        <CreateRule />
      </div>
    </div>
  );
}

export default App;
