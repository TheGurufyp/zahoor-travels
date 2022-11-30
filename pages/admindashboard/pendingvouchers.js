import React ,{useState,useEffect}from 'react'
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
   
  } from '@chakra-ui/react'
import ConfirmDialog from '../components/ConfirmDialog'
import EditAgentModal from '../components/EditAgentModal'
import VoucherSearch from '../components/VoucherSearch'
import { parseCookies } from "../../helpers/index"

function Pendingvouchers() {

const [searchVouchers, setsearchVouchers] = useState()
const [searchInProgress, setsearchInProgress] = useState(false);

  return (
   
    
    
    <>
 
 <Box  maxWidth={"1500px"}  mx={"auto"} px="10px"  
 >

  <Heading bg={"blue.500"} color="white" py="10px" borderRadius={"8px"} textAlign={"center"}   mt="50px">Pending Vouchers</Heading>

<Box mt="30px">

<VoucherSearch setsearchInProgress={setsearchInProgress}/>

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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>

   
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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>


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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>


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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>


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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>


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
      <Td  className="tableborder" isNumeric> 
      {/* <Button size={"sm"} colorScheme="orange">Actions</Button>  */}
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem  bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." >
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
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

export default Pendingvouchers;



// export async function getServerSideProps(context) {

//   const cookie = parseCookies(context.req);
  
//     const token=cookie.token;
//     if(!token){
//       return {
//         redirect: {
//           destination: '/adminlogin',
//           permanent: false,
//         },
//       }
//     }
//     let responseFromServer;
//    try {
//      const response= await axios.get(`${process.env.NEXT_PUBLIC_HOST}/getpendingvouchers`,{ headers: {token:token}});
  
//      if(response.data.success){
//       responseFromServer=response.data.payload;
//       // console.log(responseFromServer)
  
//      }
//      else{
//        return {
//          redirect: {
//            destination: '/adminlogin',
//            permanent: false,
//          },
//       }
       
//     }
    
//   } catch (error) {
//     responseFromServer={success:false};
  
//    }
  
//     return {
//       props: {responseFromServer}, 
//     }
//   }