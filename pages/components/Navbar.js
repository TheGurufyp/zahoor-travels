import React from "react";
import { Flex, Box, basicBoxStyles } from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
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
        justify={"space-between"}
        bg="blue.400"
        sx={basicBoxStyles}
        filter="auto"
        brightness="90%"
        pos={"sticky"}
      >
        <Flex
        //   border={"1px"}
        // minW={"200px"}
        // justifyContent="center"
        // align={"center"}
        // my="1rem"
        >
          <Menu border="1px">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                New Tab
              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                New Window
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                Open Closed Tab
              </MenuItem>
              <MenuItem icon={<EditIcon />} command="⌘O">
                Open File...
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>

        <Flex
          //    border={"1px"}
          bg={"blue.300"}
          p="2px"
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
            textDecoration={"underline"}
            cursor="pointer"
          >
            Zahoor Tours & Travel
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
