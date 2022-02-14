import React, { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();
  const [name, setName] = useState('');

  const value = {
    bmi,
    setBmi,
    name,
    setName,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}