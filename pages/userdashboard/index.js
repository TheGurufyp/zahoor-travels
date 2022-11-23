import {
  Center,
  Divider,
  Heading,
  Flex,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";

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

function Index() {
  return (
    <>
      <Center
        bg={"gray.100"}
        mt="2rem"
        // border={"1px"}
      >
        <Heading>Information About Vouchers</Heading>
      </Center>
      {/* <Divider /> */}
      <Box
        border={"0.5px"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
        borderColor="blue.100"
      >
        <Wrap
          my={"2rem"}
          spacing="40px"
          justify="center"
          alignContent="center"
          // py={"4rem"}
        >
          <WrapItem
          // border={"1px"}
          >
            <Center
              // bg={"blue.400"}
              w="340px"
              // h="80px"
              display={"flex"}
              flexDir="column"
            >
              <Center
                bg={"blue.400"}
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Vouchers
              </Center>{" "}
              <Center
                fontSize="1.5rem"
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
                width="100%"
              >
                112
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" display={"flex"} flexDir="column">
              <Center
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                bg={"blue.400"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Pending
              </Center>
              <Center
                fontSize="1.5rem"
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
                w="100%"
              >
                0
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" display={"flex"} flexDir="column">
              <Center
                bg={"blue.400"}
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Approved
              </Center>{" "}
              <Center
                fontSize="1.5rem"
                // border={"1px"}
                width="100%"
                // borderColor={"gray.400"}
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
              >
                112
              </Center>
            </Center>
          </WrapItem>
        </Wrap>
        <Center
          bg={"gray.100"}
          mt="2rem"
          // border={"1px"}
        >
          <Heading>Information About Pilgrims</Heading>
        </Center>
        <Wrap
          my={"2rem"}
          spacing="40px"
          justify="center"
          alignContent="center"
          // py={"4rem"}
        >
          <WrapItem
          // border={"1px"}
          >
            <Center
              // bg={"blue.400"}
              w="340px"
              // h="80px"
              display={"flex"}
              flexDir="column"
            >
              <Center
                bg={"blue.400"}
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Total
              </Center>{" "}
              <Center
                fontSize="1.5rem"
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
                width="100%"
              >
                701
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" display={"flex"} flexDir="column">
              <Center
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                bg={"blue.400"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Adults
              </Center>
              <Center
                fontSize="1.5rem"
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
                w="100%"
              >
                699
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" display={"flex"} flexDir="column">
              <Center
                bg={"blue.400"}
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Children
              </Center>{" "}
              <Center
                fontSize="1.5rem"
                // border={"1px"}
                width="100%"
                // borderColor={"gray.400"}
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
              >
                2
              </Center>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="340px" display={"flex"} flexDir="column">
              <Center
                bg={"blue.400"}
                width="100%"
                p={"0.7rem"}
                color="white"
                borderTopLeftRadius={"8px"}
                borderTopRightRadius={"8px"}
                fontSize="1.5rem"
                fontWeight={"semibold"}
              >
                Infants
              </Center>{" "}
              <Center
                fontSize="1.5rem"
                // border={"1px"}
                width="100%"
                // borderColor={"gray.400"}
                border={"1px"}
                // borderRadius="5px"
                borderColor={"gray.400"}
              >
                112
              </Center>
            </Center>
          </WrapItem>
        </Wrap>
        <Center
          bg={"gray.100"}
          // mt="3rem"
          // border={"1px"}
        >
          <Heading>Voucher Summary</Heading>
        </Center>

        <TableContainer
          my={"1rem"}
          border="1px"
          borderColor={"gray.200"}
          borderRadius="8px"
        >
          <Table variant="striped" colorScheme="blue">
            <TableCaption fontWeight={"bold"}>
              Zahoor Travel Agency
            </TableCaption>

            <Thead>
              <Tr>
                <Th>Agent Code</Th>
                <Th>Agent</Th>
                <Th>vouchers</Th>
                <Th>Approved</Th>
                <Th>Pending</Th>
                <Th>Total</Th>
                <Th>Adults</Th>
                <Th>Children</Th>
                <Th>infants</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>NBL0715</Td>
                <Td>Zahoor Tours & Travel</Td>
                <Td>113</Td>
                <Td>113</Td>
                <Td>0</Td>
                <Td>701</Td>
                <Td>699</Td>
                <Td>2</Td>
                <Td>0</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        {/* <Divider></Divider> */}
      </Box>
    </>
  );
}

export default Index;
