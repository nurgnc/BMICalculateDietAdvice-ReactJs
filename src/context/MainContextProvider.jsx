import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();
  const [bmiType, setBmiType] = useState('');
  const [bmiColor, setBmiColor] = useState('black');
  const [bmiDesc, setBmiDesc] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  let localData = [{
    name: name,
    bmi: bmi,
  }];

  const calculate = () => {
    setBmi((weight / (height * height)).toFixed(2));
  }

  JSON.parse(localStorage.getItem('userData', localData));
  localData.push({
    name: name,
    bmi: bmi,
  })
  useEffect(() => {
    localStorage.setItem('localData', JSON.stringify(localData));
  }, [])

  const value = {
    bmi,
    setBmi,
    bmiType,
    setBmiType,
    bmiDesc,
    bmiColor,
    name,
    setName,
    weight,
    setWeight,
    height,
    setHeight,
    calculate,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}