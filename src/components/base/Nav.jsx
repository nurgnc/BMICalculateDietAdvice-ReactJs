import { HStack, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <HStack spacing='24px' p={5} pr='60' bg='lightseagreen' justifyContent={"flex-end"}>
      <Link to="/"><Text fontSize='lg' color='white' as='ins'>BMI Calculate</Text></Link>
      <Link to="/about"><Text fontSize='lg' color='white' as='ins'>What's the BMI?</Text></Link>

    </HStack >
  )
}

export default Nav