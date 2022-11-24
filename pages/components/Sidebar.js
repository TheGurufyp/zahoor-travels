import React,{useRef,useState,useEffect} from 'react'
import { Box, Button, Divider, Flex, Icon, Text } from '@chakra-ui/react'
import { BiSearchAlt } from "react-icons/bi";

function SideBar({setopenSidebar,openSidebar}) {

 
    // const [openSidebar, setopenSidebar] = useState(false)
 

let sideStyles={
    position: "fixed",
    left: "0px",
    top:"0px",
    zIndex:1100,
    backgroundColor: "rgb(22, 45, 163,0.9)",
    width: "250px",
    height: "100vh",
    transition: "all 0.3s",
    transform:openSidebar? "translateX(0px)" :"translateX(-100%)"
}




  return (
    <>

   <Box style={sideStyles} >
       
<Flex direction={"column"} justify="center"  h="100%">

<Box  color="white"  textAlign={"center"}> 

<Text>Pending Vocuhers</Text>
<Divider w="80%" mx="auto" my="15px"/>

<Text>Vocuhers</Text>
<Divider w="80%" mx="auto" my="15px"/>


<Text>Manage Agents</Text>
<Divider w="80%" mx="auto" my="15px"/>

<Text>Create Agent</Text>
<Divider w="80%" mx="auto" my="15px"/>


</Box>

</Flex>




 


   </Box>
    
    </>
  )
}

export default SideBar