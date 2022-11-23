import React from "react";
import { Flex, Box, basicBoxStyles } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOutCircle, RiLogoutBoxFill } from "react-icons/ri";
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

function Navbar() {
  return (
    <>
      <Flex
        zIndex={"1000"}
        // justify={"space-between"}
        bg="blue.400"
        // sx={basicBoxStyles}
        // filter="auto"
        // brightness="90%"
        pos={"sticky"}
      >
        <Flex
          //    border={"1px"}
          // bg={"blue.300"}
          className="nav"
          // p="2px"
          borderRadius={"8px"}
          align="center"
          mx={"1rem"}
          my="1rem"
        >
          <Box ml={"10px"}>
            <FaUserAlt fill="white" size={"1.5rem"} />
          </Box>
          <Box
            color={"white"}
            fontSize="1.5rem"
            mx="1.0rem"
            // textDecoration={"underline"}
            cursor="pointer"
            zIndex={"1000"}
          >
            <Menu isLazy>
              <MenuButton>Zahoor Tours & Travel</MenuButton>
              <MenuList bg="blue.400">
                {/* MenuItems are not rendered unless Menu is open */}
                <MenuItem color={"black"} bg="blue.400">
                  <Flex justify={"center"} align="center">
                    <Box>
                      <RiLogoutBoxFill fill="white" />
                    </Box>
                    <Box color="white">Logout</Box>
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
