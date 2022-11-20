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
        // justify={"space-between"}
        bg="blue.400"
        // sx={basicBoxStyles}
        filter="auto"
        brightness="90%"
        pos={"sticky"}
      >
        <Flex
          border={"1px"}
          // minW={"200px"}
          // justifyContent="center"
          // align={"center"}
          // my="1rem"
          zIndex="-999990000"
        >
          {/* <HamburgerIcon /> */}
          {/* <Menu closeOnSelect={false}>
            <MenuButton
              as={Button}
              colorScheme="blue"
              IconButton={<FaUserAlt fill="white" size={"1.5rem"} />}
            >
              Zahoor Tours & Travel
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title="Country" type="checkbox">
                <MenuItemOption value="email">Email</MenuItemOption>
                <MenuItemOption value="phone">Phone</MenuItemOption>
                <MenuItemOption value="country">Country</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu> */}
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
