import {
  Box,
  Button,
  Flex,
  Input,
  Select,
  ButtonGroup,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useToast } from "@chakra-ui/react";
import Vouchers from "../admindashboard/vouchers";
function VoucherSearch({ filterV, setfilterV, vocuhers }) {
  const [isLargerThan648] = useMediaQuery("(min-width: 648px)");
  const [cookie, setCookie] = useCookies(["token"]);
  const toast = useToast();
  const [agentslist, setagentslist] = useState();
  const [vid, setvid] = useState("");
  const [keyword, setkeyword] = useState("");
  const [agentname, setagentname] = useState("");

  const handleReset=()=>{
    setvid()
    setkeyword()
    setagentname()
    setfilterV(vocuhers);
    setvid("");
    setkeyword("");
    setagentname("");
  }

  useEffect(() => {
    const fetchagents = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_HOST}/getagents`,
          { headers: { token: cookie.token } }
        );
        setagentslist(response.data.payload);
      } catch (error) {
        toast({
          title: "Network Error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    };
    fetchagents();
  }, []);

  const filterbyvid = () => {
    if (!vid) return vocuhers;

    let f=  vocuhers.filter((v,i)=>{
        return ( v.v_id.toLocaleLowerCase().includes(vid.toLocaleLowerCase())
        )
      })
   
      return f
  };

  const filterbyagent = (result) => {
    if (!agentname) return result;
 
    const filterresult = vocuhers.filter((v, i) => {
      return v.agentName
        .toLocaleLowerCase()
        .includes(agentname.toLocaleLowerCase());
    });
  

    return filterresult;
  };

  const filterbykeyword = (result) => {
    if (!keyword) return result; 
    let final=[];

    let filteredData =  result.filter((v, i) => {
      return v.agentName
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase());
    });
   
 
    let filteredData2= filteredData?.filter((v,i)=>{
      return ( v.v_id.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      )
    })
  
    let filteredData3 = filteredData2?.filter((v, i) => {
      return v.arrivalDate?.includes(keyword.toLocaleLowerCase());
    });
   
    let filteredData4 = filteredData3?.filter((v, i) => {
      return v.returnDate?.includes(keyword.toLocaleLowerCase());
    });

final=final.concat(filteredData,filteredData2,filteredData3,filteredData4)
const unique = [...new Map(final.map((m) => [m.v_id, m])).values()];

  return unique;
  };

  const searchVouchers = () => {
    let result;
    
    result=filterbyvid();
    result=filterbyagent(result);
    result=filterbykeyword(result);
    
    // console.log("result: ",result);
    setfilterV(result);
  };

  return (
    <>
      <Flex
        borderRadius={"8px"}
        border={"1px"}
        borderColor="gray.300"
        p="10px"
        bg="blue.500"
      >
        <Stack w="100%" direction={isLargerThan648 ? "row" : "column"}>
          <Box minW="121px" w={isLargerThan648 ? "170px" : "100%"}>
            <Input
              _focus={{ bg: "white" }}
              variant={"filled"}
              type={"search"}
              placeholder="Voucher #"
              value={vid}
              onChange={(e) => {
                setvid(e.target.value);
              }}
            />
          </Box>

          <Box w={isLargerThan648 ? "40%" : "100%"}>
            <Select
              _focus={{ bg: "white" }}
              variant={"filled"}
              placeholder="- Agents -"
              onChange={(e) => {
                setagentname(e.target.value);
              }}
            >
              {agentslist?.map((agent,i) => {
                return <option key={i} value={agent.username}>{agent.username}</option>;
              })}
            </Select>
          </Box>

          <Box w={isLargerThan648 ? "50%" : "100%"} minW={"170px"}>
            <Input
              type={"search"}
              _focus={{ bg: "white" }}
              variant={"filled"}
              placeholder="Search Keywords"
              value={keyword}
              onChange={(e) => {
                setkeyword(e.target.value);
              }}
            />
          </Box>

          <Box>
            <ButtonGroup spacing="1">
              <Button
                leftIcon={<Search2Icon />}
                colorScheme="yellow"
                onClick={searchVouchers}
              >
                Search
              </Button>
              <Button onClick={handleReset} colorScheme={"red"}>Reset</Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default VoucherSearch;
