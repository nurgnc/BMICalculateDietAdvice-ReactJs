import { Box, Container, Image } from '@chakra-ui/react';
// gif
import gif from '../../assets/giphy.gif'

function Results() {
  return (
    <Container maxW='container.xl'>
      <Box>
        <Image src={gif} alt='' />
      </Box>
    </Container>
  )
}

export default Results