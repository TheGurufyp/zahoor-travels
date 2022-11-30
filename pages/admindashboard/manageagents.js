import React,{useRef,useContext} from 'react'
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
    Text,Box, Button, Input,useToast 
   
  } from '@chakra-ui/react'
  // import {read,utils} from 'xlsx'
  import * as XLSX from "xlsx"
  import axios from "axios"
import ConfirmDialog from '../components/ConfirmDialog'
import EditAgentModal from '../components/EditAgentModal'
import { parseCookies } from "../../helpers/index"
import { userContext } from "../../context/userState";
import { useRouter } from 'next/router'

function Manageagents({responseFromServer}) {
  const router = useRouter()
 const agents=responseFromServer;
  const toast = useToast()
  const { user,token } = useContext(userContext);
  const inputFileref=useRef();


const clickedYes=(user_id)=>{
  axios.post(`${process.env.NEXT_PUBLIC_HOST}/deleteagent`,{
    user_id:user_id
  },{headers:{token:token}})
  .then((res)=>{
    
    let response=res.data;
  
    if(response.success){
      toast({
        position: "top",
          title: "SUCCESSFULL",
          description: response.payload,
          status: "success",
          duration: 5000,
          isClosable: true,
      });
      // router.reload();
    }
    else{
      
      toast({
        position: "top",
          title: "ERROR",
          description:response.payload,
          status: "error",
          duration: 5000,
          isClosable: true,
      });
    }
  
  })
  
  .catch((error)=>{
    
    toast({
      position: "top",
        title: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
    });
  })
}


  const clickfileinput=()=>{
    inputFileref.current.click();
    
  }


const submitFile=(e,username)=>{

  const file=e.target.files[0];
if(!file) return;
  if(file.type!=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" )
  {
    // format error
    toast({
      position: "top",
        title: "FORMAT ERROR",
        description: "only excel file is allowed",
        status: "error",
        duration: 5000,
        isClosable: true,
    });
    return 
  }


const promise= new Promise((resolve,reject)=>{

const fileReader=new FileReader();
fileReader.readAsArrayBuffer(file);

fileReader.onload=(e)=>{
const bufferArray=e.target.result;

const wb=XLSX.read(bufferArray,{type:"buffer"});

const wsname=wb.SheetNames[0];

const ws=wb.Sheets[wsname];

const data=XLSX.utils.sheet_to_json(ws);
resolve(data);

}
fileReader.onerror=(error)=>{
  reject(error);
}
});

promise
.then((data)=>{ // upload file to database
  // console.log(data);
  //  data = JSON.parse(JSON.stringify(data).replace(/\s(?=\w+":)/g, ""));
 

axios.post(`${process.env.NEXT_PUBLIC_HOST}/uploadmutamers`,{
  mutamers:data,
  username:username
},{headers:{token:token}})
.then((res)=>{
  
  let response=res.data;

  if(response.success){
    toast({
      position: "top",
        title: "SUCCESSFULL",
        description: 'uploaded successfully',
        status: "success",
        duration: 5000,
        isClosable: true,
    });
  }
  else{
    
    toast({
      position: "top",
        title: "ERROR",
        description:response.payload,
        status: "error",
        duration: 5000,
        isClosable: true,
    });
  }

})

.catch((error)=>{
  
  toast({
    position: "top",
      title: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
  });
})

})
.catch((e)=>{
  console.log(e)
  toast({
    position: "top",
      title: "ERROR IN FILE",
      description: "can't upload file.",
      status: "error",
      duration: 5000,
      isClosable: true,
  });
});

}

  return (
   <>
 
   <Box mx="10px" mb="30px">
   <TableContainer maxWidth={"1500px"} mx="auto" border={"1px"} borderColor="gray.400" borderRadius={"8px"} mt="50px">
  <Table variant='striped' colorScheme="blue"   >
   
    <TableCaption mt="0px" fontSize={"2rem"} placement={"top"}>Manage Agents</TableCaption>
    {
  agents.length <= 0 ? <TableCaption mt="0px" fontSize={"1rem"} placement={"bottom"}>No Agents Found</TableCaption>
:
<>
    <Thead>
    
      <Tr>
        <Th>Username</Th>
        <Th >Password</Th>
        <Th pr="50px" isNumeric >Actions</Th>
      </Tr>
    </Thead>
    <Tbody>

  
  {agents.map((agent,index)=>{
    return (
      <Tr key={agent._id}>
      <Td > 
      <Text>  {agent.username}</Text></Td>
      <Td>***** </Td>
      <Td isNumeric>

      <Button onClick={clickfileinput} mr="6px" size={"sm"} colorScheme={"purple"}> upload excel file</Button>
      <Input ref={inputFileref} display={"none"} type="file" onInput={(e)=>{submitFile(e,agent.username);}} />
        <EditAgentModal user_id={agent._id}>

      <Button  mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
      </EditAgentModal>
      <ConfirmDialog head="Delete Agent ?" desc="Are you sure you want to delete this agent." user_id={agent._id} clickedYes={clickedYes}>
      <Button size={"sm"} colorScheme={"red"}> Delete</Button>
      </ConfirmDialog>
       
      </Td>


    </Tr>
    )
  })}

   



      
     
      
     
    </Tbody>
    </>
}
    <Tfoot>
     
    </Tfoot>
  </Table>
</TableContainer>
</Box>
   
   
   
   </>
  )
}

export default Manageagents;


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
     const response= await axios.get(`${process.env.NEXT_PUBLIC_HOST}/getagents`,{ headers: {token:token}});
  
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
    responseFromServer={success:false};
  
   }
  
    return {
      props: {responseFromServer}, 
    }
  }