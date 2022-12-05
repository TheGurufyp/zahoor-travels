import { Box, Button, Flex, Input,Select,ButtonGroup, Stack,useMediaQuery  } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useCookies } from "react-cookie"
import { useToast } from '@chakra-ui/react'
import Vouchers from '../admindashboard/vouchers'
function VoucherSearch({filterV,setfilterV,vocuhers}) {
    const [isLargerThan648] = useMediaQuery('(min-width: 648px)');
    const [cookie, setCookie] = useCookies(["token"])
    const toast = useToast()
    const [agentslist, setagentslist] = useState();
    const [vid, setvid] = useState("");
    const [keyword, setkeyword] = useState("");
    const [agentname, setagentname] = useState("")
    

    useEffect(() => {
      console.log(vocuhers)
    const fetchagents=async()=>{
      try {
        const response= await axios.get(`${process.env.NEXT_PUBLIC_HOST}/getagents`,{ headers: {token:cookie.token}});
        setagentslist(response.data.payload);
       
      } catch (error) {
        toast({
          title: 'Network Error',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    fetchagents();
    }, [])

    const filterbyvid=()=>{

    // filterV=  vocuhers.map((v,i)=>{
    //     return (
    //       ""
    //     )
    //   })

    }

    const filterbyagent=()=>{
  
      if(!agentname)return;

const filterresult=  vocuhers.filter((v,i)=>{
      return  v.agentName.toLocaleLowerCase().includes(agentname.toLocaleLowerCase());
    })
setfilterV(filterresult);

return filterresult;
    }




    const filterbykeyword=()=>{
if(!keyword)return;

let filteredData= vocuhers?.filter((v,i)=>{
  return  v.agentName.toLocaleLowerCase().includes(keyword);
})
console.log(filteredData)
//  filterresult=  vocuhers?.filter((v,i)=>{
//   return  v.v_id?.includes(keyword);
// })

let filterresult=  filteredData?.filter((v,i)=>{
  return  v.arrivalDate?.includes(keyword);
})

filteredData=  filterresult?.filter((v,i)=>{
  return  v.returnDate?.includes(keyword);
})


setfilterV(filteredData);
    }

    const searchVouchers=()=>{
     
        // filterbyvid();
       filterbyagent();
      filterbykeyword();

    }
    

  return (
   <>
   <Flex borderRadius={"8px"} border={"1px"} borderColor="gray.300"  p="10px"  bg="blue.500">
    <Stack w="100%"   direction={isLargerThan648?"row":"column"}>
<Box minW="121px" w={isLargerThan648?"170px":"100%"} >
    <Input  _focus={{bg:"white"}} variant={"filled"} type={"search"} placeholder='Voucher #' value={vid}/>
</Box>

<Box   w={isLargerThan648?"40%":"100%"}>
 
<Select  _focus={{bg:"white"}} variant={"filled"}  placeholder='- Agents -'  onChange={(e)=>{setagentname(e.target.value)}}>
{
    agentslist?.map((agent)=>{
      return (
        <option value={agent.username}>{agent.username}</option>
      )
    })
  }
</Select>
</Box>


<Box  w={isLargerThan648?"50%":"100%"} minW={"170px"}>
    <Input type={"search"}  _focus={{bg:"white"}} variant={"filled"} placeholder='Search Keywords' value={keyword} onChange={(e)=>{setkeyword(e.target.value)}} />
</Box>

<Box>
<ButtonGroup  spacing='1'>
  <Button  leftIcon={<Search2Icon/>} colorScheme='yellow' onClick={searchVouchers}>Search</Button>
  <Button colorScheme={"red"}>Reset</Button>
</ButtonGroup>
</Box>
</Stack>
   </Flex>
   
   
   
   
   
   
   </>
  )
}

export default VoucherSearch