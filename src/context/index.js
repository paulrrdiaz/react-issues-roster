import React, { useState, createContext } from "react";

const initialContext = {
  repo: "facebook/react",
};

export const AppContext = createContext(initialContext);

export const AppProvider = ({ children }) => {
  const updateRepo = repo => {
    setState(prevState => ({
      ...prevState,
      repo,
    }));
  };

  const [state, setState] = useState({ repo: initialContext.repo, updateRepo });
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
