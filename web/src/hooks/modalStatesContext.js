import { useContext } from "react";
import ModalStates from "../context/modalStates";

function useModalContext() {
  return useContext(ModalStates);
}

export default useModalContext;
