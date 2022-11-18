import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Text,Box, Button
  } from '@chakra-ui/react'
function Manageagents() {
  return (
   <>
   <Box mx="10px" mb="30px">
   <TableContainer maxWidth={"1500px"} mx="auto" border={"1px"} borderColor="gray.400" borderRadius={"8px"} mt="50px">
  <Table variant='simple' colorScheme='teal'>
   
    <TableCaption mt="0px" fontSize={"2rem"} placement={"top"}>Manage Agents</TableCaption>
    <Thead>
    
      <Tr>
        <Th>Username</Th>
        <Th>Password</Th>
        <Th isNumeric>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>nabeel123 </Td>
        <Td isNumeric><Button size={"sm"} colorScheme={"red"}> Delete</Button></Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
</Box>
   
   
   
   </>
  )
}

export default Manageagents