import {
  Center,
  Divider,
  Heading,
  Flex,
  Box,
  Wrap,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";

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
  const [useritem, setuseritem] = useState([]);
  const [cookie, setCookie] = useCookies(["username"]);
  // console.log(cookie);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: cookie.token }),
    };
    fetch(`${process.env.NEXT_PUBLIC_HOST}/indexVoucher`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setuseritem(data.payload);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  console.log(useritem);

  return (
    <>
      <Box border={"1px"} bg="blue.100">
        <Flex
          justify={"right"}
          bg={"whiteAlpha.900"}
          width="96%"
          marginInline={"auto"}
          color="black"
          p={"0.7rem"}
          my="0.5rem"
          fontSize={"1.1rem"}
          fontWeight={"semibold"}
        >
          Dashboard
        </Flex>
        <Center
          bg={"blue.100"}
          py="1.2rem"

          // border={"1px"}
        >
          <Heading size={"md"}>Information About Vouchers</Heading>
        </Center>
        <Divider color={"gray.400"} width={"96%"} marginInline="auto" />
        {useritem.map((filter) => {
          return (
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
                // borderRadius={"5rem"}
                >
                  <Center
                    // bg={"blue.400"}
                    w="340px"
                    // h="80px"
                    display={"flex"}
                    flexDir="column"
                  >
                    <Center
                      bg={"rgb(22, 45, 163,0.9)"}
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
                      bg="white"
                      // borderRadius="5px"
                      borderColor={"gray.300"}
                      width="100%"
                    >
                      {filter.totalVouchers}
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
                      bg={"rgb(22, 45, 163,0.9)"}
                      fontSize="1.5rem"
                      fontWeight={"semibold"}
                    >
                      Pending
                    </Center>
                    <Center
                      fontSize="1.5rem"
                      border={"1px"}
                      bg="white"
                      // borderRadius="5px"
                      borderColor={"gray.300"}
                      w="100%"
                    >
                      {filter.totalPendingVocuhers}
                    </Center>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Center w="340px" display={"flex"} flexDir="column">
                    <Center
                      bg={"rgb(22, 45, 163,0.9)"}
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
                      bg="white"
                      // borderRadius="5px"
                      borderColor={"gray.300"}
                    >
                      {filter.totalApprovedVouchers}
                    </Center>
                  </Center>
                </WrapItem>
              </Wrap>
              <Flex
                direction={"column"}
                // bg={"blue.100"}
                // mt="2rem"
                justify="center"
                align={"center"}
                // border={"1px"}
              >
                <Heading size={"md"}>Information About Pilgrims</Heading>

                <Divider width={"96%"} marginInline="auto" />
                <Divider
                  mt={"1rem"}
                  bg={"gray.400"}
                  // color="black"
                  width={"96%"}
                  marginInline="auto"
                ></Divider>
              </Flex>

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
                      bg={"rgb(22, 45, 163,0.9)"}
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
                      bg="white"
                      borderColor={"gray.300"}
                      width="100%"
                    >
                      {filter.totalPersons}
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
                      bg={"rgb(22, 45, 163,0.9)"}
                      fontSize="1.5rem"
                      fontWeight={"semibold"}
                    >
                      Adults
                    </Center>
                    <Center
                      fontSize="1.5rem"
                      border={"1px"}
                      // borderRadius="5px"
                      bg="white"
                      borderColor={"gray.300"}
                      w="100%"
                    >
                      {filter.totalAdults}
                    </Center>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Center w="340px" display={"flex"} flexDir="column">
                    <Center
                      bg={"rgb(22, 45, 163,0.9)"}
                      width="100%"
                      p={"0.7rem"}
                      color="white"
                      borderTopLeftRadius={"8px"}
                      borderTopRightRadius={"8px"}
                      fontSize="1.5rem"
                      fontWeight={"semibold"}
                    >
                      Child
                    </Center>{" "}
                    <Center
                      fontSize="1.5rem"
                      // border={"1px"}
                      width="100%"
                      // borderColor={"gray.400"}
                      border={"1px"}
                      // borderRadius="5px"
                      bg="white"
                      borderColor={"gray.300"}
                    >
                      {filter.totalChild}
                    </Center>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Center w="340px" display={"flex"} flexDir="column">
                    <Center
                      bg={"rgb(22, 45, 163,0.9)"}
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
                      bg="white"
                      borderColor={"gray.300"}
                    >
                      {filter.totalInfants}
                    </Center>
                  </Center>
                </WrapItem>
              </Wrap>
              <Center
                bg={"blue.100"}
                // mt="3rem"
                // border={"1px"}
              >
                <Heading size={"md"}>Voucher Summary</Heading>
              </Center>
              <Box bg={"blue.100"}>
                <TableContainer
                  mt={"1rem"}
                  width="96%"
                  marginInline={"auto"}
                  border="1px"
                  bg={"white"}
                  borderColor={"gray.200"}
                  borderBottomRadius="8px"
                >
                  <Table
                    variant="simple"
                    // colorScheme="blue"
                    // borderBottomRadius="8px"
                  >
                    <TableCaption
                      fontWeight={"bold"}
                      color="black"
                      bg="blue.100"
                      border={"none"}
                    >
                      Zahoor Travel Agency
                    </TableCaption>

                    <Thead>
                      <Tr>
                        {/* <Th>Agent Code</Th> */}
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
                        {/* <Td>{filter._v}</Td> */}
                        <Td>{filter.username}</Td>
                        <Td>{filter.totalVouchers}</Td>
                        <Td>{filter.totalApprovedVouchers}</Td>
                        <Td>{filter.totalPendingVocuhers}</Td>
                        <Td>{filter.totalPersons}</Td>
                        <Td>{filter.totalAdults}</Td>
                        <Td>{filter.totalChild}</Td>
                        <Td>{filter.totalInfants}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
              {/* <Divider></Divider> */}
            </Box>
          );
        })}
      </Box>
    </>
  );
}

export default Index;
