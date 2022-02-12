import { useContext, useState } from 'react';
// chakra
import { Input, InputGroup, InputLeftElement, Stack, FormControl, FormLabel, Text } from '@chakra-ui/react'
// icons
import { BiBody } from 'react-icons/bi'
import { GiBodyHeight } from 'react-icons/gi'
// context
import { MainContext } from '../context/MainContextProvider';
// css
import { CalcButton } from '../styles/Buttons';

function BmiCalculator() {
  const { bmi, setBmi } = useContext(MainContext);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const calculate = () => {
    setBmi((weight / (height * height)).toFixed(2));
  }

  return (
    <Stack spacing={4}>
      <FormControl>
        <FormLabel >Weight:</FormLabel >
        <InputGroup width='15rem'>
          <InputLeftElement
            pointerEvents='none'
            children={<BiBody color='gray' size={30} />}
          />
          <Input type="text" variant="outline" placeholder='weight' onChange={(e) => setWeight(e.target.value)} />
        </InputGroup>
        <FormLabel >Height:</FormLabel >
        <InputGroup width='15rem'>
          <InputLeftElement
            pointerEvents='none'
            children={<GiBodyHeight color='gray' size={30} />}
          />
          <Input type="text" variant="outline" placeholder='height' onChange={(e) => setHeight(e.target.value / 100)} />
        </InputGroup>
        <CalcButton type='button' onClick={calculate}>Calculate</CalcButton>
      </FormControl>
      <Text mb='8px'>{bmi}</Text>
    </Stack >
  );
}

export default BmiCalculator;