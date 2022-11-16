import { Box, Flex, Heading, Text ,useMediaQuery } from '@chakra-ui/react'
import React from 'react'

function Adminpanel() {
  const [isLargerThan982] = useMediaQuery('(min-width: 982px)');
  const [isLargerThan673] = useMediaQuery('(min-width: 673px)')
 
  return (
  <>
 
  <Flex 
  //  h="90vh" 
  // backgroundColor={"blue.50"}
  align="center" minH="650px" direction={"column"}  justify="center"> 
  <Heading my="40px">Admin Dashboard</Heading>
  <Flex backgroundColor={"white"}  mx="auto" border={isLargerThan673?"1px":"none"} width="70%" wrap={"wrap"} maxW="800px" justifyContent={"space-around"} align="center"
  //  h="600px"
  borderColor={"gray.200"} borderRadius="20px"
  boxShadow={isLargerThan673?"lg":"none"} px="10px" mb="20px"
  
  >

<Flex 
backgroundColor={"#D30707"}
 height="200px"
  w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"} 
 borderRadius={"20px"} direction="column"
justifyContent={"center"} align="center"
//  border={"2px"} borderColor="#D30707" color={"#D30707"}
color={"white"}

my={isLargerThan673?"40px":"10px"}
> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Pending Vouchers</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>



<Flex 
 backgroundColor={"#5B2DE0"}
 height="200px" w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"}   borderRadius={"20px"} direction="column"
justifyContent={"center"} align="center"
// border={"2px"} borderColor="#5B2DE0" color={"#5B2DE0"}
color={"white"}
mb={isLargerThan673?"":"20px"}
my={isLargerThan673?"40px":"10px"}
> 

  <Text  fontWeight="bold"  fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Agents</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>



<Flex 
 backgroundColor={"#282828"}
  height="200px" w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"}   borderRadius={"20px"} direction="column"
justifyContent={"center"} align="center"
// border={"2px"} borderColor="#28282" color={"#28282"}
color={"white"}
mb={isLargerThan673?"":"20px"}
my={isLargerThan673?"40px":"10px"}
> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>All Vouchers</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>


<Flex  
backgroundColor={"#2DA6EB"}
 height="200px"  w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"}   borderRadius={"20px"} direction="column"
justifyContent={"center"} align="center"
// border={"2px"} borderColor="#2DA6EB" 
color={"white"}
mb={isLargerThan673?"":"20px"}
my={isLargerThan673?"40px":"10px"}
> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Create New Agent</Text>
 

</Flex>

  </Flex>
  
  </Flex>
  
  </>
  )
}

export default Adminpanel