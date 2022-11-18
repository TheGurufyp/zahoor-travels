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
  <Table variant='striped' colorScheme="blue"   >
   
    <TableCaption mt="0px" fontSize={"2rem"} placement={"top"}>Manage Agents</TableCaption>
    <Thead>
    
      <Tr>
        <Th>Username</Th>
        <Th >Password</Th>
        <Th pr="50px" isNumeric >Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>
        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
          <Button size={"sm"} colorScheme={"red"}> Delete</Button>
       
        </Td>
      </Tr>

      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>
        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
          <Button size={"sm"} colorScheme={"red"}> Delete</Button>
       
        </Td>
      </Tr>


      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>
        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
          <Button size={"sm"} colorScheme={"red"}> Delete</Button>
       
        </Td>
      </Tr>


      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>
        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
          <Button size={"sm"} colorScheme={"red"}> Delete</Button>
       
        </Td>
      </Tr>


      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>
        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
          <Button size={"sm"} colorScheme={"red"}> Delete</Button>
       
        </Td>
      </Tr>
      
      
     
    </Tbody>
    <Tfoot>
     
    </Tfoot>
  </Table>
</TableContainer>
</Box>
   
   
   
   </>
  )
}

export default Manageagents