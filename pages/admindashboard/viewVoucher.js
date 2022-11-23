import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Flex, Center, Box, Button, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import { ArrowLeftIcon } from "@chakra-ui/icons";
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

const viewVoucher = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Flex
        // border={"1px"}
        justify="space-between"
        align={"center"}
        py="1rem"
        bg={"gray.200"}
      >
        <Box
          bg={"blue.400"}
          color="white"
          border={"1px"}
          borderColor="blue.400"
          borderRadius={"8px"}
          padding={"5px 20px"}
          ml={"2rem"}
        >
          VNO: BASMA5837
        </Box>
        <Flex>
          <Box>
            <Link href="/admindashboard">
              <Button
                leftIcon={<ArrowLeftIcon color={"blue.400"} />}
                bg="whiteAlpha.700"
                variant="solid"
                color={"black"}
                // m="1rem"
              >
                Go Back
              </Button>
            </Link>
          </Box>
          <Box>
            <Button
              px={"2rem"}
              onClick={handlePrint}
              colorScheme={"blue"}
              mx={"1.5rem"}
            >
              Print
            </Button>
          </Box>
        </Flex>
      </Flex>
      {/* Main Container */}
      <Box
        // border={"1px"}
        // borderColor="gray.200"

        ref={componentRef}
      >
        <Flex
          justify={"space-between"}
          //   border={"1px"}
          align="center"
          py={"1.2rem"}
        >
          <Box ml={"1.5rem"}>
            <Center>
              <Heading size={"lg"}>ZAHOOR TOURS & TRAVEL</Heading>
            </Center>
          </Box>
          <Flex mx={"1.5rem"}>
            {/* <Box>img</Box> */}
            <Box>BASMA EMAR GROUP FOR UMRAH SERVICES</Box>
          </Flex>
        </Flex>
        <Flex
          //   border={"1px"}
          justify="space-between"
          align={"center"}
          py="1rem"
          wrap={"wrap"}
        >
          <Flex>
            <Box ml={"1.5rem"} display={"flex"} fontWeight="semibold">
              Service No : <Text fontWeight={"normal"}>IRAMSB</Text>
            </Box>
            <Box mx={"1rem"} display={"flex"} fontWeight="semibold">
              Basma Vno : <Text fontWeight={"normal"}>BASMA5837</Text>
            </Box>
          </Flex>
          <Box display={"flex"} mx="2rem" fontWeight="semibold">
            Date Created : <Text fontWeight={"normal"}>17-Nov-2022</Text>
          </Box>
        </Flex>
        <Flex
          justify={"space-between"}
          //  border="1px"
          align={"center"}
        >
          <Box fontWeight={"semibold"} ml={"1.5rem"}>
            General Information About Services
          </Box>
          <Box fontWeight={"semibold"} mx={"2rem"}>
            Group Head/Phone No
          </Box>
        </Flex>
        <TableContainer my={"1rem"} width="97%" marginInline={"auto"}>
          <Table size="sm">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th fontWeight={"semibold"} color="white">
                  Adult
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Child
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Infant
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Arrival Date
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Dep. Date
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Nights
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>0</Td>
                <Td>0</Td>
                <Td>25-Nov-2022</Td>
                <Td>25-Nov-2022</Td>
                <Td>21</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Center
          //   bg={"gray.100"}
          mt="1rem"
          py={"1rem"}
          // border={"1px"}
        >
          <Heading>KSA Arrival information</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th fontWeight={"semibold"} color="white">
                  Entry Port
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Sector
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Flight No
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Dept-Date Pak
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Dep-Time Pak
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Arrival Date
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Arrival Time
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  PNR
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>MUX</Td>
                <Td>JED</Td>
                <Td>PK730</Td>
                <Td>25-Nov-2022</Td>
                <Td>10:25 PM</Td>
                <Td>25-Nov-2022</Td>
                <Td>10:25 PM</Td>
                <Td>BF2JT9</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Center
          //   bg={"gray.100"}
          mt="2rem"
          py={"1rem"}
          // border={"1px"}
        >
          <Heading>Departure Information</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th fontWeight={"semibold"} color="white">
                  Dept Port
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Sector
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Flight No
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Dept-Date
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Dep-Time
                </Th>

                <Th fontWeight={"semibold"} color="white">
                  PNR
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>JED</Td>
                <Td>MUX</Td>
                <Td>PK730</Td>
                <Td>25-Nov-2022</Td>
                <Td>10:25 PM</Td>
                <Td>BF2JT9</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Center
          //   bg={"gray.100"}
          mt="2rem"
          py={"1rem"}
          // border={"1px"}
        >
          <Heading>Accommodation Detail</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th fontWeight={"semibold"} color="white">
                  PKG-TYPE
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  City
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Hotel
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Check-In-Date
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  Check-Out-Date
                </Th>

                <Th fontWeight={"semibold"} color="white">
                  Nights
                </Th>
                <Th fontWeight={"semibold"} color="white">
                  room-Type
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>All</Td>
                <Td>Makkah</Td>
                <Td>Masarat Kingdon 214/ Similar</Td>
                <Td>25-Nov-2022</Td>
                <Td>10:25 PM</Td>
                <Td>8</Td>
                <Td>Sharing</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default viewVoucher;
