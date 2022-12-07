import React, { useState, useEffect, useContext } from "react";
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
  Text,
  Box,
  Button,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Tooltip,
  disabledReason,
  MenuOptionGroup,
  MenuDivider,
  Divider,
  Flex,
  useMediaQuery,
  Spinner,
  filter,
} from "@chakra-ui/react";
import { Cookies, useCookies } from "react-cookie";
import Link from "next/link";
import ConfirmDialog from "../components/ConfirmDialog";
import VoucherSearch from "../components/VoucherSearch";
import parsecookie from "../../context/userState";

function Menage() {
  const [isLargerThan620] = useMediaQuery("(min-width: 620px)");
  const [cookie, setCookie] = useCookies(["username"]);

  const [filterV, setfilterV] = useState([]);
  const [vocuhers, setvocuhers] = useState()
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: cookie.id }),
    };
    fetch(`${process.env.NEXT_PUBLIC_HOST}/getUserVouchers`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
   
        setvocuhers(data?.payload);
      });

  }, []);

  

  return (
    <>
      <Box maxWidth={"1500px"} mx={"auto"} px="10px">
        <Heading
          bg={"blue.500"}
          color="white"
          py="10px"
          borderRadius={"8px"}
          textAlign={"center"}
          mt="50px"
        >
          Manage Vouchers
        </Heading>

        <Flex
          mt="20px"
          align={"center"}
          justify={"space-around"}
          direction={isLargerThan620 ? "row" : "column"}
          h={isLargerThan620 ? "" : "240px"}
        >
          <Box
            borderRadius={"8px"}
            borderTopRadius={"10px"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize="1.3rem"
            w={isLargerThan620 ? "" : "100%"}
            border="1px"
            borderColor={"gray.400"}
          >
            <Text
              borderTopRadius={"8px"}
              color={"white"}
              bg="blue.500"
              px="40px"
            >
              {" "}
              Total Vouchers
            </Text>
            <Text> 0</Text>
          </Box>

          <Box
            borderRadius={"8px"}
            borderTopRadius={"10px"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize="1.3rem"
            w={isLargerThan620 ? "" : "100%"}
            border="1px"
            borderColor={"gray.400"}
          >
            <Text
              borderTopRadius={"8px"}
              color={"white"}
              bg="blue.500"
              px="40px"
            >
              {" "}
              Approved Vouchers
            </Text>
            <Text> 0</Text>
          </Box>

          <Box
            borderRadius={"8px"}
            borderTopRadius={"10px"}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize="1.3rem"
            w={isLargerThan620 ? "" : "100%"}
            border="1px"
            borderColor={"gray.400"}
          >
            <Text
              borderTopRadius={"8px"}
              color={"white"}
              bg="blue.500"
              px="40px"
            >
              {" "}
              Pending Vouchers
            </Text>
            <Text> 0</Text>
          </Box>
        </Flex>

        <Box mt="20px">
          <VoucherSearch
            vocuhers={vocuhers}
            filterV={filterV}
            setfilterV={setfilterV}
          />
        </Box>

        <TableContainer mt="20px">
          <Table
            className="tableborder"
            variant={"striped"}
            colorScheme="blue"
            size={"sm"}
          >
            <Thead>
              <Tr>
                <Th className="tableborder">VNo</Th>
                <Th className="tableborder">Agent</Th>
                <Th className="tableborder">Arrival Date</Th>
                <Th className="tableborder">Return Date</Th>
                <Th className="tableborder" textAlign="center">
                  Total
                </Th>
                <Th className="tableborder" textAlign="center">
                  ADT
                </Th>
                <Th className="tableborder" textAlign="center">
                  CHD
                </Th>
                <Th className="tableborder" textAlign="center">
                  INF
                </Th>
                <Th className="tableborder" textAlign="center">
                  Nights
                </Th>
                <Th className="tableborder" textAlign="center">
                  Status
                </Th>
                <Th className="tableborder" textAlign="center">
                  Actions
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {filterV?.length > 0
                ? filterV?.map((data) => {
                    console.log("data", data);
                    return (
                      <Tr key={data?._id}>
                        <Td className="tableborder">
                          <Text>{data?.v_id}</Text>
                        </Td>
                        <Td className="tableborder">
                          {data?.agentName ? data?.agentName : " "}{" "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data?.arrivalDate ? data?.arrivalDate : " "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data?.returnDate ? data?.returnDate : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalPersons ? data?.totalPersons : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalAdults ? data?.totalAdults : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalChildren ? data?.totalChildren : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalInfants ? data?.totalInfants : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalNights ? data?.totalNights : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          <Text fontWeight={"bold"} color="green">
                            {data?.status}
                          </Text>{" "}
                        </Td>

                        <Td className="tableborder" textAlign={"center"}>
                          {data?.status === "Approved" ? (
                            <Flex justify={"space-evenly"}>
                              <Button size={"sm"} colorScheme="blue">
                                <Link
                                  href={`/admindashboard/viewVoucher?id=${data?._id}`}
                                >
                                  View
                                </Link>
                              </Button>
                              <Button colorScheme="red" size={"sm"}>
                                <Link
                                  href={`/userdashboard/editVoucher?id=${data?.v_id}`}
                                >
                                  Edit
                                </Link>
                              </Button>
                            </Flex>
                          ) : (
                            <Tooltip label={"Not approved"}>
                              <Button size={"sm"} colorScheme="red" disabled>
                                Disable
                              </Button>
                            </Tooltip>
                          )}
                        </Td>
                      </Tr>
                    );
                  })
                : vocuhers?.map((data) => {
                    return (
                      <Tr key={data?._id}>
                        <Td className="tableborder">
                          <Text>{data?.v_id}</Text>
                        </Td>
                        <Td className="tableborder">
                          {data?.agentName ? data?.agentName : " "}{" "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data?.arrivalDate ? data?.arrivalDate : " "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data?.returnDate ? data?.returnDate : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalPersons ? data?.totalPersons : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalAdults ? data?.totalAdults : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalChildren ? data?.totalChildren : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalInfants ? data?.totalInfants : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data?.totalNights ? data?.totalNights : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          <Text fontWeight={"bold"} color="green">
                            {data?.status}
                          </Text>{" "}
                        </Td>

                        <Td className="tableborder" textAlign={"center"}>
                          {data?.status === "Approved" ? (
                            <Button size={"sm"} colorScheme="blue">
                              <Link
                                href={`/admindashboard/viewVoucher?id=${data?._id}`}
                              >
                                View
                              </Link>
                            </Button>
                          ) : (
                            <Tooltip label={"Not approved"}>
                              <Button size={"sm"} colorScheme="red" disabled>
                                Disable
                              </Button>
                            </Tooltip>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Menage;
