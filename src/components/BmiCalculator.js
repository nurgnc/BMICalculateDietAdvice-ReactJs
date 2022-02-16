import { useContext, useEffect } from 'react';
// chakra
import { Center, Input, Image, InputGroup, InputLeftElement, Box, FormControl, Radio, Stack, RadioGroup } from '@chakra-ui/react';
//router
import { Link } from 'react-router-dom';
// icons
import { BiBody } from 'react-icons/bi'
import { GiBodyHeight } from 'react-icons/gi'
import { MdDriveFileRenameOutline } from 'react-icons/md'
// context
import { MainContext } from '../context/MainContextProvider';
// css
import { CalcButton } from '../styles/Buttons';
// img
import health from '../assets/health.png';

function BmiCalculator() {
  const { height, weight, name, setName, setWeight, setHeight, calculate } = useContext(MainContext);

  return (
    <Center display='flex' alignItems='center'>
      <Box p='6' display='flex' alignItems='center' justifyContent="space-between" >
        <Image boxSize='600px' src={health} alt='' mr="10" />
        <FormControl display='flex' flexDirection="column" justifyContent="space-between">
          <InputGroup width='20rem' mb='5'>
            <InputLeftElement
              pointerEvents='none'
              children={<MdDriveFileRenameOutline color='gray' size={30} />}
            />
            <Input type="text" variant="outline" placeholder='Your name...' onChange={(e) => setName(e.target.value)} />
          </InputGroup>
          <InputGroup width='20rem' mb='5'>
            <InputLeftElement
              pointerEvents='none'
              children={<BiBody color='gray' size={30} />}
            />
            <Input type="text" variant="outline" placeholder='Weight, etc 60kg' onChange={(e) => setWeight(e.target.value)} />
          </InputGroup>
          <InputGroup width='20rem' mb='5'>
            <InputLeftElement
              pointerEvents='none'
              children={<GiBodyHeight color='gray' size={30} />}
            />
            <Input type="text" variant="outline" placeholder='Height, etc 160cm' onChange={(e) => setHeight(e.target.value / 100)} />
          </InputGroup>
          <RadioGroup defaultValue='2' mb='5'>
            <Stack spacing={5} direction='row'>
              <Radio colorScheme='blue' value='1'>
                Male
              </Radio>
              <Radio colorScheme='pink' value='2'>
                Female
              </Radio>
            </Stack>
          </RadioGroup>
          <CalcButton type='button' onClick={calculate}><Link to='/results'>Calculate</Link></CalcButton>
        </FormControl>
      </Box >
    </Center>
  );
}

export default BmiCalculator;