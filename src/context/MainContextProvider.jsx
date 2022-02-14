import React, { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

export default function MainContextProvider({ children }) {
  const [bmi, setBmi] = useState();
  const [bmiType, setBmiType] = useState('');
  const [bmiDesc, setBmiDesc] = useState('');
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const localData = [];

  const calculate = () => {
    setBmi((weight / (height * height)).toFixed(2));
    if (bmi < 18.5) {
      setBmiType('UnderWeight');
      setBmiDesc('We recommend working with a dietitian to gain a healthy weight.');
    } else if (18.5 <= bmi && bmi < 24.9) {
      setBmiType('Healthy!');
      setBmiDesc('Congratulations! Maintain a well-balanced and consistent diet.')
    } else if (25 < bmi && bmi < 29.9) {
      setBmiType('Overweight');
      setBmiDesc('We observed that he was overweight compared to his height. We recommend that you get rid of excess weight with a suitable diet.')
    } else if (bmi > 30) {
      setBmiType('Obesity');
      setBmiDesc('We observed that the weight was at a level that could pose a risk to health. We recommend that you lose weight with the help of a dietitian.')
    }
  }

  useEffect(() => {
    JSON.parse(localStorage.getItem('userData'));
    localData.push({
      name: name,
      bmi: bmi,
    })
    localStorage.setItem('localData', JSON.stringify(localData));

  }, [name, weight, height])

  const value = {
    bmi,
    setBmi,
    bmiType,
    setBmiType,
    bmiDesc,
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