import { useContext, useEffect, useState } from 'react';
// chakra
import { Container } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
// context
import { MainContext } from '../../context/MainContextProvider';

function Calculations() {
  const { localData } = useContext(MainContext);
  const [userData, setUserData] = useState(localData);
  console.log(localData)

  useEffect(() => {
    setUserData(localData);
  }, [localData])

  return (
    <Container maxW='container.xl'>
      <Table variant='striped' colorScheme='teal'>
        <TableCaption>Name and BMI information</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>BMI</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData?.map((item, index) => (
            <Tr key={index}>
              <Td>{item.name}</Td>
              <Td>{item.bmi}</Td>
            </Tr>
          ))}

        </Tbody>
      </Table>
    </Container>
  )
}

export default Calculations