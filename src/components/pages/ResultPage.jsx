import { useContext } from 'react';
// chakra
import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
// context
import { MainContext } from '../../context/MainContextProvider';
// gif
import gif from '../../assets/giphy.gif'

function Results() {
  const { bmi, bmiType, name } = useContext(MainContext);

  return (
    <Container maxW='container.xl'>
      <Box w='100%' p={4} display='flex' alignItems='center' justifyContent="center" >
        <Image src={gif} alt='' />
      </Box>
      <Box w='100%' p={4} display='flex' flexDirection="column" alignItems='center' justifyContent="center" >
        <Heading as='h1'>{name}'s BMI Results </Heading>
        <Text>{bmi} : {bmiType}</Text>
      </Box>
    </Container>
  )
}

export default Results