import React ,{useState,useEffect} from 'react'
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
    Text,Box, Button, Heading, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Divider,
    Flex,useMediaQuery,Spinner 
   
  } from '@chakra-ui/react'
import ConfirmDialog from '../components/ConfirmDialog'
import VoucherSearch from '../components/VoucherSearch'
function Vouchers() {
  const [isLargerThan620] = useMediaQuery('(min-width: 620px)');
  
  const [rendercomplete, setrendercomplete] = useState(false);

    useEffect(() => {
      setrendercomplete(true);
    
     
    }, [])

    if(!rendercomplete){
      return <></>
    }
    
  return (
    <>
 
    <Box  maxWidth={"1500px"}  mx={"auto"} px="10px"  >
   
     <Heading bg={"blue.500"} color="white" py="10px" borderRadius={"8px"} textAlign={"center"}   mt="50px">Manage Vouchers</Heading>

    <Flex mt="20px" align={"center"}  justify={"space-around"} direction={isLargerThan620?"row":"column"} h={isLargerThan620?"":"240px"}>
     <Box borderRadius={"8px"} borderTopRadius={"10px"}   textAlign={"center"}  fontWeight={"semibold"} fontSize="1.3rem"
     w={isLargerThan620?"":"100%"} border="1px" borderColor={"gray.400"}
     >
        <Text borderTopRadius={"8px"} color={"white"} bg="blue.500" px="40px"> Total Vouchers</Text>
        <Text > 0</Text>
        </Box>

        <Box borderRadius={"8px"} borderTopRadius={"10px"}   textAlign={"center"}  fontWeight={"semibold"} fontSize="1.3rem"
     w={isLargerThan620?"":"100%"} border="1px" borderColor={"gray.400"}
     >
        <Text borderTopRadius={"8px"} color={"white"} bg="blue.500" px="40px"> Approved Vouchers</Text>
        <Text > 0</Text>
        </Box>



        <Box borderRadius={"8px"} borderTopRadius={"10px"}   textAlign={"center"}  fontWeight={"semibold"} fontSize="1.3rem"
     w={isLargerThan620?"":"100%"} border="1px" borderColor={"gray.400"}
     >
        <Text borderTopRadius={"8px"} color={"white"} bg="blue.500" px="40px"> Pending Vouchers</Text>
        <Text > 0</Text>
        </Box>
     </Flex>


   <Box mt="20px">
   
   <VoucherSearch/>
   
   </Box>
   
   
    <TableContainer    mt="20px" >
   <Table className="tableborder" variant={"striped"} colorScheme="blue" size={"sm"} >
    
    
     <Thead>
     
       <Tr>
         <Th className="tableborder"  >VNo</Th>
         <Th className="tableborder" >Agent</Th>
         <Th className="tableborder" >Arrival Date</Th>
         <Th className="tableborder" >Return Date</Th>
         <Th className="tableborder"  textAlign="center" >Total</Th>
         <Th className="tableborder"  textAlign="center">ADT</Th>
         <Th className="tableborder"  textAlign="center">CHD</Th>
         <Th className="tableborder"  textAlign="center">INF</Th>
         <Th className="tableborder"  textAlign="center">Nights</Th>
         <Th className="tableborder"  textAlign="center">Status</Th>
         <Th className="tableborder"  textAlign="center"  >Actions</Th>
       </Tr>
     </Thead>
     <Tbody>
   
       <Tr>
         <Td className="tableborder"> 
         <Text>  ZAH5547</Text></Td>
         <Td className="tableborder">Nabeel Tours & Travel </Td>
         <Td className="tableborder"> 19 Nov 22</Td>
         <Td className="tableborder"> 3 Dec 22</Td>
         <Td className="tableborder" textAlign={"center"}> 2</Td>
         <Td className="tableborder" textAlign={"center"}> 2</Td>
         <Td className="tableborder" textAlign={"center"}> 0</Td>
         <Td className="tableborder" textAlign={"center"}> 0</Td>
         <Td className="tableborder" textAlign={"center"}> 14</Td>
         <Td className="tableborder" textAlign={"center"}><Text fontWeight={"bold"} color="green">Approved</Text> </Td>
         <Td  className="tableborder" textAlign={"center"}> 
         <Button size={"sm"} colorScheme="orange">View</Button> 
       
         
         
         
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

export default Vouchers;



export async function getServerSideProps(context) {
  const token=context.req.cookies.token;
  if(!token){
    return {
      redirect: {
        destination: '/adminlogin',
        permanent: false,
      },
    }
  }
  let responseFromServer;
 try {
   const response= await axios.post(`${process.env.NEXT_PUBLIC_HOST}/adminVerifyToken`,{},{ headers: {token:token}});
   
   if(response.data.success){
    responseFromServer={success:true};
   }
   else{
     return {
       redirect: {
         destination: '/adminlogin',
         permanent: false,
       },
    }
     
  }
  
} catch (error) {
  responseFromServer={success:false};
 }

  return {
    props: {responseFromServer}, 
  }
}