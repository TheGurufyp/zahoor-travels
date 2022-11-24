import React,{useState} from "react";
import { Flex, Box ,Text, HStack, Divider} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOutCircle, RiLogoutBoxFill } from "react-icons/ri";
import { HiOutlineUserCircle,HiChevronDown } from "react-icons/hi2";
import {
  IconButton,
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
// import {} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  Button,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import SideBar from "./Sidebar";
import HamburgerSign from "./hamburgerSign";

function Navbar() {

  const [openSidebar, setopenSidebar] = useState(false)


  
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
              <MenuButton>Zahoor Tours & Travel</MenuButton>
              <MenuList   borderRadius={"8px"} border="1px" bg="rgb(22, 45, 163,0.9)" >
              <MenuItem   bg="rgb(22, 45, 163,0)" >
                <Box textAlign={"center"} w="200px"  >
              <Text color={"white"} fontSize="1rem">Zahoor Tours & Travels </Text>
              </Box>
              </MenuItem>
              <Divider my="10px" w="90%" mx="auto" />
               
                  <Box w={"100%"} textAlign="center">
                  <Button w={"90%"} colorScheme="red" leftIcon={<RiLogoutBoxFill/>}>
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
