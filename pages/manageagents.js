import React,{useRef} from 'react'
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
import ConfirmDialog from './components/ConfirmDialog'
import EditAgentModal from './components/EditAgentModal'


function Manageagents() {

  const toast = useToast()
  const inputFileref=useRef();

  const clickfileinput=()=>{
    inputFileref.current.click();
    console.log(inputFileref.current)
  }

// const handlechange= async(e)=>{

//   let file=e.target.files[0];
// let data= await file.arrayBuffer();
// let workbook = read(data);
// let worksheet= workbook.Sheets[workbook.SheetNames[0]];
// let json=utils.sheet_to_json(worksheet);
// console.log(worksheet);
// }

const submitFile=(e)=>{
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
  username:"nabeel"
})
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

  }

})

.catch((error)=>{
  
  toast({
    position: "top",
      title: error.message,
      description: 'error',
      status: "error",
      duration: 5000,
      isClosable: true,
  });
})

})
.catch((e)=>{
  
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

        <Button onClick={clickfileinput} mr="6px" size={"sm"} colorScheme={"purple"}> upload excel file</Button>
        <Input ref={inputFileref} display={"none"} type="file" onInput={(e)=>{submitFile(e);}} />
          <EditAgentModal>

        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
        </EditAgentModal>
        <ConfirmDialog head="Delete Agent ?" desc="Are you sure you want to delete this agent.">
        <Button size={"sm"} colorScheme={"red"}> Delete</Button>
        </ConfirmDialog>
         
        </Td>


      </Tr>



      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>

        <Button onClick={clickfileinput} mr="6px" size={"sm"} colorScheme={"purple"}> upload excel file</Button>
        <Input ref={inputFileref} display={"none"} type="file" onInput={(e)=>{submitFile(e);}} />
          <EditAgentModal>

        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
        </EditAgentModal>
        <ConfirmDialog head="Delete Agent ?" desc="Are you sure you want to delete this agent.">
        <Button size={"sm"} colorScheme={"red"}> Delete</Button>
        </ConfirmDialog>
         
        </Td>


      </Tr>



      <Tr>
        <Td > 
        <Text>  Nabeel Tours And Travels</Text></Td>
        <Td>***** </Td>
        <Td isNumeric>

        <Button onClick={clickfileinput} mr="6px" size={"sm"} colorScheme={"purple"}> upload excel file</Button>
        <Input ref={inputFileref} display={"none"} type="file" onInput={(e)=>{submitFile(e);}} />
          <EditAgentModal>

        <Button mr="6px" size={"sm"} colorScheme={"yellow"}> Edit</Button>
        </EditAgentModal>
        <ConfirmDialog head="Delete Agent ?" desc="Are you sure you want to delete this agent.">
        <Button size={"sm"} colorScheme={"red"}> Delete</Button>
        </ConfirmDialog>
         
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