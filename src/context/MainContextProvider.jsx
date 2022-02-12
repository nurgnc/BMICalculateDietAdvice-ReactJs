import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();

  const value = {
    bmi,
    setBmi,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}