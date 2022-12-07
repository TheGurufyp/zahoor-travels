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

const ViewVoucher = (props) => {
  let VoucherList = props.allData.payload;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const data = props.allData.payload[0];
  // console.log(props.allData.payload);
  return (
    <>
      <Flex
        // border={"1px"}
        justify="space-between"
        align={"center"}
        py="1rem"
        bg={"gray.200"}
        wrap="wrap"
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
          VNO: {data.v_id ? data.v_id : ""}
        </Box>
        <Flex>
          <Box>
            <Link href="/userdashboard/menage">
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
      {/* {props.allData.payload.map((data) => { 
        return( */}
      <Box
        // border={"1px"}
        // borderColor="gray.200"

        ref={componentRef}
      >
        <Flex
          justify={"space-between"}
          //   border={"1px"}
          align="center"
          // py={"1.2rem"}
          mt={"1rem"}
        >
          <Box ml={"1.5rem"}>
            <Center>
              <Heading size={"md"}>
                {data.agentName ? data.agentName : ""}
              </Heading>
            </Center>
          </Box>
          <Flex mx={"1.5rem"}>
            {/* <Box>img</Box> */}
            <Text fontWeight={"semibold"} fontSize="3xl">
              Zahore Travel Agency
            </Text>
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
              Service No :{" "}
              <Text fontWeight={"normal"}>
                {data.serviceNo ? data.serviceNo : ""}
              </Text>
            </Box>
            <Box mx={"1rem"} display={"flex"} fontWeight="semibold">
              Zah Vno :{" "}
              <Text fontWeight={"normal"}>{data.v_id ? data.v_id : ""}</Text>
            </Box>
          </Flex>
          <Flex direction={"row-reverse"}>
            <Box display={"flex"} mx="2rem" fontWeight="semibold">
              Date Created :{" "}
              <Text fontWeight={"normal"}>
                {data.createdAt ? data.createdAt : ""}
              </Text>
            </Box>
            <Box display={"flex"} mx="2rem" fontWeight="semibold">
              IATA :{" "}
              <Text fontWeight={"normal"}>{data.iata ? data.iata : ""}</Text>
            </Box>
          </Flex>
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
        <TableContainer
          my={"1rem"}
          width="97%"
          marginInline={"auto"}
          // border="1px"
        >
          <Table size="sm" colorScheme={"black"}>
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
            <Tbody
              border={"1px"}
              //  borderColor="gray.200"
            >
              <Tr>
                <Td>{data.totalAdults ? data.totalAdults : ""}</Td>
                <Td>{data.totalChildren ? data.totalChildren : ""}</Td>
                <Td>{data.totalInfants ? data.totalInfants : ""}</Td>
                <Td>{data.arrivalDate ? data.arrivalDate : ""}</Td>
                <Td>{data.depDate ? data.depDate : ""}</Td>
                <Td>{data.totalNights ? data.totalNights : ""}</Td>
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
          <Heading size={"md"}>KSA Arrival information</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm" colorScheme="black">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Entry Port
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Sector
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Flight No
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Dept-Date Pak
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Dep-Time Pak
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Arrival Date
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Arrival Time
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  PNR
                </Th>
              </Tr>
            </Thead>
            <Tbody border={"1px"}>
              <Tr>
                <Td>{data.arrivalport ? data.arrivalport : ""}</Td>
                <Td>
                  {data.Depsector1 ? data.Depsector1 : ""}
                  {data.Depsector2 ? data.Depsector2 : ""}
                </Td>
                <Td>
                  {data.DepFilght1 ? data.DepFilght1 : ""}
                  {data.DepFilght2 ? data.DepFilght2 : ""}
                </Td>
                <Td>{data.depDate ? data.depDate : ""}</Td>
                <Td>{data.depTime ? data.depTime : ""}</Td>
                <Td>{data.arrivalDate ? data.arrivalDate : ""}</Td>
                <Td>{data.arrivalTime ? data.arrivalTime : ""}</Td>
                <Td>{data.returnpnr ? data.returnpnr : ""}</Td>
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
          <Heading size={"md"}>Departure Information</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm" colorScheme="black">
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
            <Tbody border={"1px"}>
              <Tr>
                <Td>{data.depport ? data.depport : ""}</Td>
                <Td>{data.returnSector1 ? data.returnSector1 : ""}</Td>
                <Td>{data.returnFlight2 ? data.returnFlight2 : ""}</Td>
                <Td>{data.depDate ? data.depDate : ""}</Td>
                <Td>{data.depTime ? data.depTime : ""}</Td>
                <Td>{data.Deppnr ? data.Deppnr : ""}</Td>
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
          <Heading size={"md"}>Transportation Detail</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm" colorScheme="black">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Date
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Transport Trip
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Transport By
                </Th>
              </Tr>
            </Thead>
            <Tbody border={"1px"}>
              {data.tranportationDetail.map((item) => {
                // console.log(item.date);
                return (
                  <Tr>
                    <Td>{item.date ? item.date : ""}</Td>
                    <Td>{item.from_to ? item.from_to : ""}</Td>
                    <Td>{item.types ? item.types : ""}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Center
          //   bg={"gray.100"}
          mt="2rem"
          py={"1rem"}
          // border={"1px"}
        >
          <Heading size={"md"}>Mutamer&#39;s ( Pilgrims) Detail</Heading>
        </Center>
        <TableContainer width="97%" marginInline={"auto"}>
          <Table size="sm" colorScheme="black">
            <Thead bg={"blue.400"}>
              <Tr>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  PILGRIM NAME
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  PASSPORT NO
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  dob
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  AGE_GROUP
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Visa_No
                </Th>
                <Th padding={"4px"} fontWeight={"semibold"} color="white">
                  Issue_Date
                </Th>
              </Tr>
            </Thead>
            <Tbody border={"1px"}>
              {data.mutamers.map((item) => {
                return (
                  <Tr>
                    <Td>{item.name ? item.name : ""}</Td>
                    <Td>{item.passportname ? item.passportname : ""}</Td>
                    <Td>{item.dob ? item.dob : ""}</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>

        <Flex
          justify={"left"}
          direction="column"
          width={"97%"}
          marginInline="auto"
          my="2rem"
          // border={"1px"}
          // borderColor="gray.200"
        >
          <Flex>
            <Box
              w={"15%"}
              bg="blue.400"
              color={"white"}
              fontWeight="semibold"
              // border={"1px"}
              pl={"1rem"}
              // borderColor="blue.400"
            >
              Ziarat
            </Box>
            <Box pl={"1rem"} border={"1px"} borderColor="black" w={"85%"}>
              {data.ziarat ? data.ziarat : ""}
            </Box>
          </Flex>
          <Box my={"0.7px"}></Box>
          <Flex>
            <Box
              w={"15%"}
              bg="blue.400"
              color={"white"}
              fontWeight="semibold"
              // border={"1px"}
              pl={"1rem"}
              // borderColor="blue.400"
            >
              Remarks
            </Box>
            <Box pl={"1rem"} border={"1px"} borderColor="black" w={"85%"}>
              {data.remarks ? data.remarks : ""}
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default ViewVoucher;
export async function getServerSideProps(context) {
  // console.log(context.query);
  const id = context.query.id;
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/userviewvoucher?id=${id}`
  );
  let allData = await data.json();

  return {
    props: { allData }, // will be passed to the page component as props
  };
}
