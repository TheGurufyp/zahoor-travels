import React, { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Box,
  Button,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import VoucherSearch from "../components/VoucherSearch";
import ReactPaginate from 'react-paginate';



function Items({ dislpayitems }) {
  return (
    <>
      {dislpayitems?.length > 0
                ? dislpayitems?.map((data) => {
                    return (
                      <Tr key={data._id}>
                        <Td className="tableborder">
                          <Text>{data.v_id}</Text>
                        </Td>
                        <Td className="tableborder">
                          {data.agentName ? data.agentName : " "}{" "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data.arrivalDate ? data.arrivalDate : " "}
                        </Td>
                        <Td className="tableborder">
                          {" "}
                          {data.returnDate ? data.returnDate : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data.totalPersons ? data.totalPersons : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data.totalAdults ? data.totalAdults : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data.totalChildren ? data.totalChildren : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data.totalInfants ? data.totalInfants : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          {data.totalNights ? data.totalNights : " "}
                        </Td>
                        <Td className="tableborder" textAlign={"center"}>
                          <Text fontWeight={"bold"} color="green">
                            {data.status}
                          </Text>{" "}
                        </Td>

                        <Td className="tableborder" textAlign={"center"}>
                          <Button size={"sm"} colorScheme="blue">
                            <Link
                              href={`/admindashboard/viewVoucher?id=${data._id}`}
                            >
                              View
                            </Link>
                          </Button>
                        </Td>
                      </Tr>
                    );
                  }):""
               
                  }
    </>
  );
}






function Vouchers(props) {
  

  const [isLargerThan620] = useMediaQuery("(min-width: 620px)");

  const [filterV, setfilterV] = useState( props.allData.payload);
  const [itemsPerPage , setitemsPerPage ] = useState(30);
  const [pagenumber, setpagenumber] = useState(0)
  const [pagesvisited, setpagesvisited] = useState(()=>{return pagenumber*itemsPerPage})
  const [totalpages, settotalpages] = useState(()=>{
    if( props.allData.payload){
      return Math.ceil(props.allData.payload.length/itemsPerPage);
    }
  })
  const [dislpayitems, setdislpayitems] = useState([]);

useEffect(() => {
  setdislpayitems(filterV.slice(pagesvisited,pagesvisited+itemsPerPage));

}, [filterV,pagesvisited])


useEffect(() => {
  
  setpagesvisited(pagenumber*itemsPerPage);

}, [pagenumber])


const changePage=({selected})=>{

  setpagenumber(selected);


}

 

  return (
    <>
      <Box maxWidth={"1500px"} mx={"auto"} px="10px" mb="20px" >
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
  {/* <Flex
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
        </Flex> */}
      

        <Box mt="20px">
          <VoucherSearch
            vocuhers={props.allData.payload}
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

export default Vouchers;

export async function getServerSideProps(context) {
  try {
    
    let data = await fetch(`${process.env.NEXT_PUBLIC_HOST}/getAdminVouchers`);
    let allData = await data.json();
  
    return {
      props: { allData }, // will be passed to the page component as props
    };
  } catch (error) {
    let allData={payload:[]};
    return {
      props: { allData }, // will be passed to the page component as props
    };
  }
}
