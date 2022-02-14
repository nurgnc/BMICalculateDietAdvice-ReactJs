import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();
  const [bmiType, setBmiType] = useState('');
  const [bmiDesc, setBmiDesc] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const calculate = () => {
    setBmi((weight / (height * height)).toFixed(2));
    if (bmi < 18.5) {
      setBmiType('UnderWeight');
      setBmiDesc('');
    } else if (18.5 <= bmi && bmi < 24.9) {
      return setBmiType('Healthy!');
    } else if (25 < bmi && bmi < 29.9) {
      return setBmiType('Overweight');
    } else if (bmi > 30) {
      return setBmiType('Obesity');
    }
  }

  useEffect(() => {
    localStorage.setItem('userName', name);
    localStorage.setItem('userWeight', weight);
    localStorage.setItem('userHeight', height);
  }, [name, weight, height])

  const value = {
    bmi,
    setBmi,
    bmiType,
    setBmiType,
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