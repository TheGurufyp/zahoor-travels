import React, { useState, useEffect, useContext } from "react";
import {
  Table,Thead,Tbody,Tfoot,Tr,Th,
  Td,
  TableContainer,
  Text,
  Box,
  Button,
  Heading,
  Tooltip,
  Flex,
  useMediaQuery,
  
} from "@chakra-ui/react";
import { Cookies, useCookies } from "react-cookie";
import Link from "next/link";
import VoucherSearch from "../components/VoucherSearch";
import ReactPaginate from 'react-paginate';


function Menage() {
  const [itemsPerPage , setitemsPerPage ] = useState(30);
  const [pagenumber, setpagenumber] = useState(0)
  const [pagesvisited, setpagesvisited] = useState(()=>{return pagenumber*itemsPerPage})
  const [totalpages, settotalpages] = useState()
  const [dislpayitems, setdislpayitems] = useState([]);
  const [cookie, setCookie] = useCookies(["username"]);
  const [vocuhers, setvocuhers] = useState([]);
  const [filterV, setfilterV] = useState([]);

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

  useEffect(() => {
   setfilterV(vocuhers);
   settotalpages(Math.ceil(vocuhers.length/itemsPerPage));
  }, [vocuhers])


  useEffect(() => {
    setdislpayitems(filterV.slice(pagesvisited,pagesvisited+itemsPerPage));
  
  }, [filterV,pagesvisited])
  
  
  useEffect(() => {
    
    setpagesvisited(pagenumber*itemsPerPage);
  
  }, [pagenumber])
  
  
  const changePage=({selected})=>{
  
    setpagenumber(selected);
  
  
  }
  
  function Items({ dislpayitems }) {
    return (
      <>
       {dislpayitems?.length > 0
                ? dislpayitems?.map((data) => {
                  
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
                                  href={`/userdashboard/viewVoucher?id=${data?._id}`}
                                >
                                  View
                                </Link>
                              </Button>
                              {/* <Button colorScheme="red" size={"sm"}>
                                <Link
                                  href={`/userdashboard/editVoucher?id=${data?.v_id}`}
                                >
                                  Edit
                                </Link>
                              </Button> */}
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
                : ""}
      </>
    );
  }
  

  const [isLargerThan620] = useMediaQuery("(min-width: 620px)");
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
                    console.log(data);
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
                                  href={`/userdashboard/viewVoucher?id=${data?._id}`}
                                >
                                  View
                                </Link>
                              </Button>
                              {/* <Button colorScheme="red" size={"sm"}>
                                <Link
                                  href={`/userdashboard/editVoucher?id=${data?.v_id}`}
                                >
                                  Edit
                                </Link>
                              </Button> */}
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
                            <>
                              <Button size={"sm"} colorScheme="blue">
                                <Link
                                  href={`/userdashboard/viewVoucher?id=${data?._id}`}
                                >
                                  View
                                </Link>
                              </Button>
                              <Button mx={"1rem"} colorScheme="red" size={"sm"}>
                                <Link
                                  href={`/userdashboard/editVoucher?id=${data?.v_id}`}
                                >
                                  Edit
                                </Link>
                              </Button>
                            </>
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
            <Items dislpayitems={dislpayitems}/>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
        {!totalpages<=0 &&
        <ReactPaginate
           breakLabel="..."
           pageRangeDisplayed={3}
             previousLabel={"< Previous"}
             nextLabel={"Next >"}
             pageCount={totalpages}
             onPageChange={changePage}
             pageLinkClassName={"page-num"}
             containerClassName={"paginationBtns"}
             previousLinkClassName={"previousBtn"}
             nextLinkClassName={"nextBtn"}
             disabledClassName={"pagiantionDisabled"}
             activeClassName={"paginationActive"}

           />
          }
      </Box>
    </>
  );
}

export default Menage;


