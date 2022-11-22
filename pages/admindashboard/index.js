import { Box, Button, Flex, Heading, Link, Text ,useMediaQuery } from '@chakra-ui/react'
import  NextLink from 'next/link';
import React,{useContext,useEffect,useLayoutEffect} from 'react'
import {userContext} from "../../context/userState"
import { useRouter } from 'next/router'

function Index(props) {
  const [isLargerThan982] = useMediaQuery('(min-width: 982px)');
  const [isLargerThan673] = useMediaQuery('(min-width: 673px)')
  const { user,setuser } = useContext(userContext);
  const router = useRouter();
 
  

//   useLayoutEffect(() => {
  
//   if(!user){
//     router.push("/adminlogin")
//   }

  
// }, [])


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
    <Box   w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"} my={isLargerThan673?"40px":"10px"}  backgroundColor={"#D30707"}
 height="200px"
 borderRadius={"20px"} 
color={"white"}>
<NextLink href={`${router.pathname}/pendingvouchers`}>

<Flex direction="column"
justifyContent={"center"} align="center"
height="100%"> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Pending Vouchers</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>

</NextLink>
</Box>


<Box   w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"} my={isLargerThan673?"40px":"10px"}  backgroundColor={"#5B2DE0"}
 height="200px"
 borderRadius={"20px"} 
color={"white"}>
<NextLink href={`${router.pathname}/manageagents`}  >

<Flex direction="column"
justifyContent={"center"} align="center"
height="100%"> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Agents</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>

</NextLink>
</Box>



<Box   w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"} my={isLargerThan673?"40px":"10px"}  backgroundColor={"#282828"}
 height="200px"
 borderRadius={"20px"} 
color={"white"}>
<NextLink href={`${router.pathname}/vouchers`}  >

<Flex direction="column"
justifyContent={"center"} align="center"
height="100%"> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>All Vouchers</Text>
  <Text  fontSize="1.7rem">0</Text>

</Flex>

</NextLink>
</Box>




<Box   w={isLargerThan982?"300px":isLargerThan673?"220px":"100%"} my={isLargerThan673?"40px":"10px"}  backgroundColor={"blue.400"}
 height="200px"
 borderRadius={"20px"} 
color={"white"}>
<NextLink href={`${router.pathname}/createagent`}  >

<Flex direction="column"
justifyContent={"center"} align="center"
height="100%"> 

  <Text  fontWeight="bold" fontSize={isLargerThan982?"1.7rem":"1.3rem"}>Create New Agent</Text>
 

</Flex>

</NextLink>
</Box>


  </Flex>
  
  </Flex>
  
  </>
  )
}

export default Index;

export async function getServerSideProps(context) {
 


  return {
    props: {}, // will be passed to the page component as props
  }
}
