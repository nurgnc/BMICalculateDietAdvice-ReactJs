import { HStack, Container, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <HStack spacing='24px' p={5} bg='lightseagreen' >
      <Container maxW='container.xl' display='flex' justifyContent={"flex-end"}>
        <Link to="/"><Text fontSize='lg' color='white' as='ins'>BMI Calculate</Text></Link>
        <Link to="/about"><Text mx='6' fontSize='lg' color='white' as='ins'>What's the BMI?</Text></Link>
      </Container>
    </HStack >
  )
}

export default Nav