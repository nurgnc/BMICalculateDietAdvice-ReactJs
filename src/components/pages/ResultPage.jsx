import { useContext, useEffect, useState } from 'react';
// chakra
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
// context
import { MainContext } from '../../context/MainContextProvider';
// results data
import bmiResults from '../../data/bmiData'
// component 
import DietList from '../DietList'
// css 
import { DietButton, BmiTypeBox } from '../../styles/Buttons';
// gif
import gif from '../../assets/giphy.gif'

function Results() {
  const { bmi, name } = useContext(MainContext);
  const [results, setResults] = useState(bmiResults[0])
  const [toggle, setToggle] = useState(false);
  console.log(results)


  const handleResult = async () => {
    if (bmi < 18.5) {
      setResults(bmiResults[0])
    } else if (18.5 <= bmi && bmi < 24.9) {
      setResults(bmiResults[1])
    } else if (25 < bmi && bmi < 29.9) {
      setResults(bmiResults[2])
    } else if (bmi > 30) {
      setResults(bmiResults[3])
    }
  }
  useEffect(() => {
    handleResult();
  }, [bmi])

  return (
    <Container maxW='container.xl'>
      <Box w='100%' p={4} display='flex' alignItems='center' justifyContent="center" >
        <Image src={gif} alt='' />
      </Box>
      <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" >
        <Heading as='h1'>{name}'s BMI Results : {bmi}  </Heading>
        <BmiTypeBox color={results.color} bgColor={results.bgColor}>{results.bmiType}</BmiTypeBox>
        <Text>{results.bmiDesc}</Text>
      </Box>

      <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" >
        <Text>Check out the list below for a diet that is right for you. &#128071;</Text>
        <DietButton type="button" onClick={() => setToggle(!toggle)}>Diet List</DietButton>
        {toggle && <DietList />}
      </Box>
    </Container>
  )
}

export default Results