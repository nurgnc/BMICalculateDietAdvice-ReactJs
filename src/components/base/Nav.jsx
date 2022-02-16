import { HStack, Container, Text, Image, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";
// logo
import logo from '../../assets/logo.png';

function Nav() {
  return (
    <HStack spacing='24px' p={5} bg='lightseagreen' >
      <Container maxW='container.xl' display='flex' alignItems='center' justifyContent={"space-between"}>
        <Image width={'80px'} src={logo} alt='logo' />
        <Box display='flex' alignContent='center'>
          <Link to="/"><Text fontSize='lg' color='white' as='ins'>BMI Calculate</Text></Link>
          <Link to="/about"><Text mx='6' fontSize='lg' color='white' as='ins'>What's the BMI?</Text></Link>
          <Link to="/calculations"><Text fontSize='lg' color='white' as='ins'>Calculations</Text></Link>
        </Box>

      </Container>
    </HStack >
  )
}

export default Nav