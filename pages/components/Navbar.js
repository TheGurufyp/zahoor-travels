import React,{useState,useContext, useRef} from "react";
import { Flex, Box ,Text,  Divider,useToast} from "@chakra-ui/react";
import {  RiLogoutBoxFill } from "react-icons/ri";
import { HiOutlineUserCircle,HiChevronDown } from "react-icons/hi2";

// import {} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,

} from "@chakra-ui/react";
import SideBar from "./Sidebar";
import HamburgerSign from "./hamburgerSign";
import { useRouter } from "next/router";
import { userContext } from "../../context/userState";
import axios from "axios";
import { useCookies } from "react-cookie"

function Navbar() {
  const toast = useToast();
  const [cookie, setCookie, removeCookie] = useCookies(["token","username"])
  const [openSidebar, setopenSidebar] = useState(false)
  const { user, setuser,token,settoken } = useContext(userContext);
  const openMuenu=useRef();
  const [apiInProgress, setapiInProgress] = useState(false);
  const router = useRouter();
  const handleLogout=()=>{

if(user?.isAdmin){

  axios
  .post(`${process.env.NEXT_PUBLIC_HOST}/adminlogout`, {},{headers:{token:token}})
  .then(function (response) {
    let data = response.data;
    if (data.success) {
      
      setuser();
      settoken();
      setapiInProgress(false);
      removeCookie("token");
      removeCookie("username");

      router.push("/login");
     
    } else {
      setapiInProgress(false);
      toast({
        title: "ERROR",
        position: "top",
        description: data.payload,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  })
  .catch(function (error) {
    setapiInProgress(false);
    toast({
      title: error.message,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  });
}
else{

  axios
  .post(`${process.env.NEXT_PUBLIC_HOST}/userlogout`, {},{headers:{token:token}})
  .then(function (response) {
    let data = response.data;
    if (data.success) {
      setuser();
      settoken('');
      setapiInProgress(false);
     
      removeCookie("token");
      removeCookie("username");
      router.push("/login");
     
    } else {
      setapiInProgress(false);
      toast({
        title: "ERROR",
        position: "top",
        description: data.payload,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  })
  .catch(function (error) {
    setapiInProgress(false);
    toast({
      title: error.message,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  });
}
   
    
  }
  
  return (
    <>
   
  
      <Flex
        zIndex={"1000"}
        // justify={"space-between"}
        bg="rgb(22, 45, 163,0.9)"
        // sx={basicBoxStyles}
        // filter="auto"
        // brightness="90%"
        pos={"sticky"}
        top="0px"
      
        justify={"flex-end"}
        align="center"
        // border={"1px"}
      >
        <SideBar  setopenSidebar={setopenSidebar} openSidebar={openSidebar}/>
       <Box ml="20px" position={"absolute"} left="0px" zIndex="2000" top={"25px"}>
        <HamburgerSign setopenSidebar={setopenSidebar} openSidebar={openSidebar}/>
      </Box>


        <Flex
        onClick={()=>{openMuenu.current.click()}}
            //  border={"1px"}
          // bg={"blue.300"}
          className="nav"
          transition={"all 0.2s"}
          _hover={{
            bg:"rgb(22, 45, 163)"
          }}
          // p="2px"
          borderRadius={"8px"}
          align="center"
          mx={"1rem"}
          my="1rem"
          px="5"
          py="1"
           >
          <Box >
            <HiOutlineUserCircle color="white" size={"1.5rem"} />
          </Box>
          <Box
         
            color={"white"}
            fontSize="1.3rem"
           mr="5px"
            ml="12px"
            // textDecoration={"underline"}
            cursor="pointer"
           
            
          >
            <Menu closeOnSelect={false}  closeOnBlur={false} >
              <MenuButton ref={openMuenu}>{user?.username}</MenuButton>
              <MenuList   borderRadius={"8px"} border="1px" bg="rgb(22, 45, 163,0.9)" >
              <MenuItem   bg="rgb(22, 45, 163,0)" >
                <Box textAlign={"center"} w="200px"  >
              <Text color={"white"} fontSize="1rem">{user?.username} </Text>
              </Box>
              </MenuItem>
              <Divider my="10px" w="90%" mx="auto" />
               
                  <Box w={"100%"} textAlign="center">
                  <Button w={"90%"} colorScheme="red" leftIcon={<RiLogoutBoxFill/>} onClick={handleLogout}  spinnerPlacement="end"
                isLoading={apiInProgress}
                loadingText="Loading">
                    Logout
                  </Button>
                  </Box>
                 
              </MenuList>
            </Menu>
          </Box>
          <Box>  <HiChevronDown color="white" strokeWidth={"1px"} size={"1rem"} /></Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
