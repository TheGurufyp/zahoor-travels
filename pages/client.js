import React from "react";
import {
  Flex,
  Box,
  Button,
  Center,
  Heading,
  Input,
  Divider,
  chakra,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import { HiUserCircle, HiUser } from "react-icons/hi";
import { FaUserAlt, FaSearch } from "react-icons/fa";
// import {} from "@chakra-ui/icons";

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
} from "@chakra-ui/react";
import { Search2Icon } from "react-icons";

const client = () => {
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

      <Center my={"1.5rem"}>
        <Heading color={"blue.400"}>Manage Vocture</Heading>
      </Center>

      <Flex
        border={"1px"}
        borderColor="blue.100"
        // height={"500px"}
        maxW="95%"
        flexDir={"column"}
        marginInline={"auto"}
        box-shadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        // justify={"space-between"}
      >
        <Flex
          justify={"space-between"}
          bgColor="gray.100"
          align={"center"}
          w="100%"
          //   bg={'blue.400'}
        >
          <Flex
            // justify={"center"}
            // align={"center"}
            my="1rem"
          >
            <Box ml={"10px"}>
              <FaUserAlt fill="Black" size={"1.4rem"} />
            </Box>
            <Box
              color={"Blaxk"}
              fontSize="1.2rem"
              mx="1.0rem"
              // textDecoration={"underline"}
              cursor="pointer"
            >
              Hunfa Jalil
            </Box>
          </Flex>
          <Flex
            align={"center"}
            bg="blue.100"
            py={"0.7rem"}
            px="1.2rem"
            borderRadius="8px"
            mr={"2rem"}
          >
            <FaSearch />
            <Input
              mx="1rem"
              //   color={"white"}
              placeholder="Search Voucher Here"
              size="md"
              id="search"
              variant="unstyled"
            />
          </Flex>
          <Flex
            // align={"center"}
            mr="1.7rem"
          >
            <Button bg={"blue.400"} color="white" variant="solid">
              Create +
            </Button>
          </Flex>
        </Flex>
        {/* <Divider my={"1rem"} /> */}
        <Box
        //  height={"500px"}
        >
          <Center my="1rem">{/* <Heading>List of Voucher</Heading> */}</Center>
        </Box>

        <TableContainer>
          <Table variant="simple">
            <TableCaption>List of Vouchers</TableCaption>
            <Thead bg={"blue.400"}>
              <Tr>
                <Th color="white">To convert</Th>
                <Th color="white">into</Th>
                <Th color="white" isNumeric>
                  multiply by
                </Th>
                <Th color="white" isNumeric>
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
                <Td isNumeric>
                  <Button bg={"blue.400"} color="white">
                    Actions +
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
                <Td isNumeric>
                  <Button bg={"blue.400"} color="white">
                    Actions +
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
                <Td isNumeric>
                  <Button
                    bg={"blue.400"}
                    // rightIcon={<ArrowForwardIcon />}
                    color="white"
                  >
                    Actions +
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default client;
