import { useContext } from "react";
import RefreshContext from "../context/items";

function useRefreshContext() {
  return useContext(RefreshContext);
}

export default useRefreshContext;
