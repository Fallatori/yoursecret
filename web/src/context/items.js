import { createContext, useState } from "react";

const RefreshContext = createContext();

export function Provider({ children }) {
  const [shouldRefresh, setShouldRefresh] = useState(true);

  const valueToShare = {
    shouldRefresh,
    setShouldRefresh,
  };

  return (
    <RefreshContext.Provider value={valueToShare}>
      {children}
    </RefreshContext.Provider>
  );
}

export default RefreshContext;
