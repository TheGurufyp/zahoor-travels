import React from 'react'
import {
    Flex,
    Box
  } from "@chakra-ui/react";
  import { FaUserAlt } from "react-icons/fa";
  // import {} from "@chakra-ui/icons";

function Navbar() {
  return (
 <>
 
 <Flex justify={"space-between"} bg="blue.400">
        <Flex
          //   border={"1px"}
          minW={"200px"}
          justifyContent="center"
          align={"center"}
          my="1rem"
        ></Flex>

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
  )
}

export default Navbar