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
import axios from "axios"
import { useCookies } from "react-cookie"

function Pendingvouchers({responseFromServer}) {
  const [cookie, setCookie] = useCookies(["token","username","id"])
const [filterVouchers, setfilterVouchers] = useState();
const [searchInProgress, setsearchInProgress] = useState(false);
const [vouchers, setvouchers] = useState(responseFromServer);

const handleApprove=async(id)=>{

  try {
    const res=await axios.post(`${process.env.NEXT_PUBLIC_HOST}/appovevoucher`,{vid:id,user_id:cookie.id},{ headers: {token:cookie.token}});
    console.log(res.data)
    
  } catch (error) {
    
  }

}

const clickedYes=async(id)=>{
  try {
    const res=await axios.post(`${process.env.NEXT_PUBLIC_HOST}/disapprovevoucher`,{vid:id,user_id:cookie.id},{ headers: {token:cookie.token}});
    console.log(res.data)
    
  } catch (error) {
    console.log(error)
  }
}


  return (
   
    
    
    <>
 
 <Box  maxWidth={"1500px"}  mx={"auto"} px="10px"  
 >

  <Heading bg={"blue.500"} color="white" py="10px" borderRadius={"8px"} textAlign={"center"}   mt="50px">Pending Vouchers</Heading>

<Box mt="30px">

{/* <VoucherSearch filterVouchers={filterVouchers} setfilterVouchers={setfilterVouchers}/> */}

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
{
  vouchers?.map((v,i)=>{

    return (
      <Tr key={i}>
      <Td className="tableborder"> 
      <Text> { v.v_id}  </Text></Td>
      <Td className="tableborder">{v.agentName} </Td>
      <Td className="tableborder"> {v.arrivalDate}</Td>
      <Td className="tableborder"> {v.returnDate}</Td>
      <Td className="tableborder" textAlign={"center"}> {v.totalPersons}</Td>
      <Td className="tableborder" textAlign={"center"}> {v.totalAdults}</Td>
      <Td className="tableborder" textAlign={"center"}> {v.totalChildren}</Td>
      <Td className="tableborder" textAlign={"center"}> {v.totalInfants}</Td>
      <Td className="tableborder" textAlign={"center"}> {v.totalNights}</Td>
      <Td className="tableborder" textAlign={"center"}><Text fontWeight={"bold"} color="green">{v.status}</Text> </Td>
      <Td  className="tableborder" isNumeric> 
   
      <Menu  closeOnBlur={false}>
  <MenuButton as={Button} size={"sm"} colorScheme="orange">
    Actions
  </MenuButton>
  <MenuList  borderRadius={"8px"} p="0px" mt="0px">
    <MenuItem borderTopRadius={"8px"} py="10px" color={"white"} fontWeight="bold" bg="blue.400">View</MenuItem>

    <MenuItem onClick={()=>handleApprove(v._id)} bg="green.400" py="15px"  color={"white"} fontWeight="bold" >Approve</MenuItem>
 
    <ConfirmDialog id={v._id} head="Disapprove ?" desc="Are you sure you want to disapprove the voucher." clickedYes={clickedYes}>
    <MenuItem borderBottomRadius={"8px"} bg="red.400" py="10px"  color={"white"} fontWeight="bold">Disapprove</MenuItem>
    </ConfirmDialog>
  </MenuList>
</Menu>
      
      
      
      </Td>
    </Tr>
    )
  })
}
   

  
   
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



export async function getServerSideProps(context) {

  const cookie = parseCookies(context.req);
  
    const token=cookie.token;
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
     const response= await axios.get(`${process.env.NEXT_PUBLIC_HOST}/getpendingvouchers`,{ headers: {token:token}});
     if(response.data.success){
      responseFromServer=response.data.payload;
      // console.log(responseFromServer)
  
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
    console.log(error)
    responseFromServer={success:false};
  
   }
  
    return {
      props: {responseFromServer}, 
    }
  }