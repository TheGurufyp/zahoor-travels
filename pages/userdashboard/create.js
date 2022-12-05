import {
  Center,
  Heading,
  Box,
  Flex,
  Button,
  Divider,
  Select,
  Wrap,
  WrapItem,
  Grid,
  Radio,
  Input,
  TableContainer,
  Table,
  Checkbox,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import { Cookies, useCookies } from "react-cookie";
import { Formik, Field, Form } from "formik";

import Link from "next/link";
import { React, useEffect } from "react";

import { ArrowLeftIcon } from "@chakra-ui/icons";

import { useState } from "react";

import axios, { Axios } from "axios";

// import parsecookie from "../../context/userState";

const Create = (props) => {
  const [count, setcount] = useState(0);

  const [inputList, setInputList] = useState([
    { date: "", from_to: "", types: "" },
  ]);

  const transportation = [];

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    // arr.push(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { date: "", from_to: "", types: "" }]);
  };

  // console.log(inputList);

  // console.log(parsecookie);

  inputList.map((items) => {
    // console.log(items);
    transportation.push(items);
  });
  const [cookie, setCookie] = useCookies(["username"]);
  // console.log("cookie", cookie.id);
  // const mautamarField = [];
  // console.log(transportation);

  // Simple POST request with a JSON body using fetch

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userToken: cookie.token }),
    };
    fetch(`${process.env.NEXT_PUBLIC_HOST}/getAgentMautamers`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setmautamers(data);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const [mautamers, setmautamers] = useState([]);
  const [mautamarField, setmautamarField] = useState([]);

  let totalChilds = 0;
  let totalInfants = 0;
  let totalAdults = 0;
  var uniq = "TA" + "-" + new Date().getTime();
  // console.log("unique", uniq);

  const [date, setdate] = useState([]);
  // console.log(date);

  // setmautamers([mautamarField]);
  // console.log("mautamer", mautamarField);
  for (let i = 0; i < mautamarField.length; i++) {
    const realAge = mautamarField[i].age.trim().split(/\s+/);
    // console.log(realAge[0]);
    if (realAge[0] >= 4 && realAge[0] <= 10) {
      // console.log("child");
      totalChilds++;
    } else if (realAge[0] > 10) {
      // console.log("adults");
      totalAdults++;
    } else {
      // console.log("infant");
      totalInfants++;
    }
  }

  // console.log;

  return (
    <>
      <Center my={"1rem"}>
        <Heading color={"blue.500"}>Create / Update Voucher</Heading>
      </Center>
      <Flex
        align={"center"}
        bg={"blue.400"}
        borderRadius="8px"
        my={"0.5rem"}
        w={"90%"}
        justify="space-between"
        marginInline={"auto"}
      >
        <Box ml={"1rem"}>
          <Button>Status : Closed</Button>
        </Box>
        <Box>
          {" "}
          <Link href="/client">
            <Button
              leftIcon={<ArrowLeftIcon color={"blue.400"} />}
              bg="whiteAlpha.700"
              variant="solid"
              color={"black"}
              m="1rem"
            >
              Go Back
            </Button>
          </Link>
        </Box>
      </Flex>
      {/* main Box */}
      <Formik
        initialValues={{
          depardate: "",
          departime: "",
          sector1: "",
          sector2: "",
          flight1: "",
          flight2: "",
          arrivedate: "",
          arrivetime: "",
          pnr1: "",
          returndate: "",
          returntime: "",
          returnsector1: "",
          returnsector2: "",
          returnflight1: "",
          returnflight2: "",
          pnr2: "",
          shirka: "",
          party: "",
          iata: "",
          service: "",
          radio: "",
          remark: "",
        }}
        onSubmit={async (values) => {
          // console.log(values);
          axios
            .post(`${process.env.NEXT_PUBLIC_HOST}/createVoucher`, {
              depardate: values.depardate,
              departime: values.departime,
              sector1: values.sector1,
              sector2: values.sector2,
              flight1: values.flight1,
              flight2: values.flight2,
              arrivedate: values.arrivedate,
              arrivetime: values.arrivetime,
              pnr1: values.pnr1,
              returndate: values.returndate,
              returntime: values.returntime,
              returnsector1: values.returnsector1,
              returnsector2: values.returnsector2,
              returnflight1: values.returnflight1,
              returnflight2: values.returnflight2,
              pnr2: values.pnr2,
              shirka: values.shirka,
              party: values.party,
              iata: values.iata,
              service: values.service,
              radio: values.radio,
              remark: values.remark,
              transportation: transportation,
              agent: cookie.username,
              mautamers: mautamarField,
              totalAdult: totalAdults,
              totalInfant: totalInfants,
              totalChild: totalChilds,
              v_id: uniq,
              totalNight: count,
              userID: cookie.id,
            })
            .then(function (response) {
              let data = response.data;
              // console.log("data", data);
              // if (data.success) {
              //   setuser(data.payload);
              //   settoken(data.payload.token);
              //   setapiInProgress(false);
              //   // cookieCutter.set("token", data.payload.token,{path:'/'});
              //   setCookie("token",data.payload.token, {
              //     path: "/",
              //     sameSite: true,
              //   });
              //   setCookie("username",data.payload.username, {
              //     path: "/",
              //     sameSite: true,
              //   });

              // router.push("/admindashboard");
              // router.push({
              //   pathname: '/admindashboard',
              //   query: { token:data.payload.token },
              // })
              // } else {
              //   setapiInProgress(false);
              //   toast({
              //     title: "ERROR",
              //     position: "top",
              //     description: data.payload,
              //     status: "error",
              //     duration: 9000,
              //     isClosable: true,
              //   });
              // }
            })
            .catch((err) => console.log(err));
        }}
      >
        <Form
        // onSubmit={Formik.handleSubmit}
        >
          <Flex
            direction={"column"}
            border="1px"
            borderColor={"gray.300"}
            width={"90%"}
            marginInline="auto"
          >
            <Center fontSize={"2rem"} fontWeight="semibold" bg={"gray.200"}>
              Flight Information
            </Center>
            <Box>
              <Box ml={"1.5rem"} fontWeight="medium" my={"5px"}>
                Departure
              </Box>
              <Divider
                width={"96%"}
                marginInline="auto"
                border="1px"
                borderColor={"blue.400"}
                bg="blue"
                borderRadius={"8px"}
              ></Divider>

              {/* editing start here */}
              <Flex
                // justify={"center"}
                my="2rem"
                // border={"1px"}
                width="96%"
                marginInline={"auto"}
              >
                <Wrap
                  // spacing="10px"
                  className="fl-1"
                  // border={"1px"}
                  // justify="center"
                >
                  <WrapItem
                  // border={"1px"}
                  >
                    <Center
                      // w="200px"
                      h="80px"
                    >
                      <Flex direction="column">
                        <Box>Depart Date :</Box>
                        <Box
                        // border={"1px"}
                        // borderColor="blue.300"
                        // //  p={"0.4rem"}
                        // borderRadius={"2px"}
                        >
                          <Field
                            type="date"
                            borderColor="blue.300"
                            as={Input}
                            name="depardate"
                            onChange={(event) => {
                              // console.log(event.target.value);
                              setdate((current) => [
                                ...current,
                                event.target.value,
                              ]);
                            }}
                          />
                        </Box>
                      </Flex>
                    </Center>
                  </WrapItem>
                  <WrapItem
                  // border={"1px"}
                  >
                    <Center w="200px" h="80px">
                      <Flex mx={"1.5rem"} direction="column">
                        <Box>Depart Time :</Box>
                        <Box

                        // w="100%"
                        >
                          <Field
                            type={"time"}
                            borderColor="blue.300"
                            as={Input}
                            className="x1"
                            name="departime"
                          ></Field>
                        </Box>
                      </Flex>
                    </Center>
                  </WrapItem>

                  <WrapItem
                  // border={"1px"}
                  >
                    <Center
                      // w="270px"
                      h="80px"
                    >
                      <Flex
                        direction="column"
                        className="Flex-7"
                        // direction="column"
                      >
                        <Box>Sector:</Box>
                        <Flex>
                          <Box>
                            <Field
                              // mt="10px"
                              as={Select}
                              name="sector1"
                              placeholder="Select Size"
                              borderColor="blue.300"
                            >
                              <option value="N">N</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                            </Field>
                          </Box>
                          <Box mx={"0.6rem"}>
                            <Field
                              // mt="10px"
                              as={Select}
                              name="sector2"
                              placeholder="Select Size"
                              borderColor="blue.300"
                            >
                              <option value="N">N</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                            </Field>
                          </Box>
                        </Flex>
                      </Flex>
                    </Center>
                  </WrapItem>

                  <WrapItem
                  //  border={"1px"}
                  >
                    <Center
                      //  w="280px"
                      h="80px"
                    >
                      <Flex
                        mx={"1.5rem"}
                        className="Flex-7"
                        direction={"column"}
                      >
                        <Box>Flight No : </Box>
                        <Flex>
                          <Box
                          // border={"1px"}
                          // borderColor="blue.300"
                          // borderRadius={"2px"}
                          >
                            <Field
                              // mt="10px"
                              as={Select}
                              name="flight1"
                              placeholder="Select Size"
                              borderColor="blue.300"
                            >
                              <option value="N">N</option>
                              <option value="S">S</option>
                              <option value="M">M</option>
                            </Field>
                          </Box>
                          <Box
                            mx={"0.7rem"}
                            // border={"1px"}
                            // borderColor="blue.300"
                            // borderRadius={"2px"}
                          >
                            <Field
                              border={"1px"}
                              borderColor="blue.400"
                              as={Input}
                              htmlSize={10}
                              name="flight2"
                              // width="auto"
                            />
                          </Box>
                        </Flex>
                      </Flex>
                    </Center>
                  </WrapItem>
                  <WrapItem
                  // border={"1px"}
                  >
                    <Center
                      //  w="250px"
                      h="80px"
                    >
                      <Flex direction="column">
                        <Box>PNR No :</Box>
                        <Box
                        // border={"1px"}
                        // borderColor="blue.300"
                        // borderRadius={"2px"}
                        >
                          <Field
                            border={"1px"}
                            borderColor="blue.400"
                            as={Input}
                            htmlSize={20}
                            name="pnr1"
                            // width="120%"
                            // ml={"10px"}
                          />
                        </Box>
                      </Flex>
                    </Center>
                  </WrapItem>

                  <WrapItem
                  // border={"1px"}
                  >
                    <Center
                      // w="250px"
                      h="80px"
                    >
                      <Flex
                        //  mx="0.5rem"
                        direction={"column"}
                      >
                        <Box>Arrival Date :</Box>
                        <Box
                        // border={"1px"}
                        // borderColor="blue.300"
                        // borderRadius={"2px"}
                        >
                          <Field
                            type={"date"}
                            border=" 1px"
                            as={Input}
                            borderColor={"blue.400"}
                            name="arrivedate"
                          />
                        </Box>
                      </Flex>
                    </Center>
                  </WrapItem>
                  <WrapItem
                  //  border={"1px"}
                  >
                    <Center
                      // w="250px"
                      h="80px"
                    >
                      <Flex ml={"2.5rem"} direction={"column"}>
                        <Box>Arrival Time :</Box>
                        <Box
                        // border={"1px"}
                        // borderColor="blue.300"
                        // borderRadius={"2px"}
                        >
                          <Field
                            type={"date"}
                            as={Input}
                            border=" 1px"
                            borderColor={"blue.400"}
                            name="arrivetime"
                          />
                        </Box>
                      </Flex>
                    </Center>
                  </WrapItem>
                </Wrap>
              </Flex>
              {/* first section end here */}
            </Box>
            <Box>
              <Box ml={"1.5rem"} fontWeight="medium" my={"5px"}>
                Return
              </Box>
              <Divider
                width={"96%"}
                marginInline="auto"
                border="1px"
                borderColor={"blue.400"}
                bg="blue"
                borderRadius={"8px"}
              ></Divider>

              {/* //Start handleRemoveClick */}

              <Flex
                // border={"1px"}
                // borderColor="gray.100"
                my={"20px"}
                className="main-sec"
                justify="center"
                align={"center"}
                // flexDirection={"column"}
                flexWrap={"wrap"}
              >
                <Flex
                  // border={"1px"}
                  align="center"
                  // mx={"1rem"}
                  // justify={"center"}
                  //w={"30%"}
                  className="Flex-7"
                  my={"1rem"}

                  //  direction={"column"}
                >
                  <Box>
                    Return Date :{" "}
                    <Field
                      type={"date"}
                      border=" 1px"
                      as={Input}
                      name="returndate"
                      borderColor={"blue.400"}
                      onChange={(event) => {
                        // console.log(event.target.value);
                        setdate((current) => [...current, event.target.value]);
                      }}
                    />
                  </Box>
                </Flex>

                <Flex
                  //w={"30%"}
                  // border={"1px"}
                  //  direction={"column"}
                  // justify={"center"}
                  // align="center"
                  // mx={"1rem"}
                  my="1rem"
                  className="Flex-7"
                  mx={"1.5rem"}
                >
                  <Box mx={"1rem"}>
                    Return Time :
                    <Field
                      border={"1px"}
                      borderColor="blue.500"
                      type={"time"}
                      as={Input}
                      name="returntime"
                    ></Field>
                  </Box>
                </Flex>

                <Flex
                  // border={"1px"}
                  // align="center"
                  // justify={"space-around"}
                  // mx={"2rem"}
                  my={"0.5rem"}
                  //w={"30%"}
                  // justify="center"
                  className="Flex-7"
                  mx="1.5rem"
                  direction={"column"}
                >
                  <Box>Return Sector :</Box>
                  <Flex>
                    <label htmlFor="returnsector1"></label>
                    <Field
                      // mt="10px"
                      as={Select}
                      name="returnsector1"
                      placeholder="Select Size"
                      borderColor="blue.300"
                    >
                      <option value="N">N</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                    </Field>
                    <Box mx={"0.5rem"}></Box>
                    <Field
                      // mt="10px"
                      as={Select}
                      name="returnsector2"
                      placeholder="Select Size"
                      borderColor="blue.300"
                    >
                      <option value="N">N</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                    </Field>
                  </Flex>
                </Flex>

                {/* /////// */}

                <Flex
                  // border={"1px"}
                  // align="center"
                  //w={"30%"}
                  my="1rem"
                  direction={"column"}
                  // justify={"center"}
                  className="Flex-7"
                  mx={"2rem"}
                >
                  <Box>Flight No :</Box>
                  <Flex>
                    <Field
                      // mt="10px"
                      as={Select}
                      name="returnflight1"
                      placeholder="Select Size"
                      borderColor="blue.300"
                    >
                      <option value="N">N</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                    </Field>
                    <Box mx="0.5rem"></Box>
                    <Field
                      border={"1px"}
                      borderColor="blue.400"
                      htmlSize={15}
                      as={Input}
                      width="auto"
                      name="returnflight2"
                    />
                  </Flex>
                </Flex>

                <Flex
                  // border={"1px"}
                  // w={"40%"}
                  my="2rem"
                  // justify={"center"}
                  align="center"
                  className="Flex-7"
                  mx={"2rem"}
                >
                  <Box>
                    PNR No :
                    <Field
                      border={"1px"}
                      borderColor="blue.400"
                      htmlSize={7}
                      as={Input}
                      // width="120%"
                      // ml={"10px"}
                      name="pnr2"
                    />
                  </Box>
                </Flex>
              </Flex>

              <Flex
                //  border={"1px"}
                w="80%"
                marginInline={"auto"}
                justify="center"
              >
                <Button
                  colorScheme={"blue"}
                  onClick={(event) => {
                    // console.log(date[0]);
                    const date1 = new Date(date[0]);
                    const date2 = new Date(date[1]);
                    const diffTime = Math.abs(date2 - date1);
                    const diffDays = Math.ceil(
                      diffTime / (1000 * 60 * 60 * 24)
                    );

                    // console.log(diffDays - 1 + " days");
                    setcount(diffDays - 1);
                  }}
                >
                  Count Night
                </Button>
                <Flex
                  justify={"center"}
                  align="center"
                  mx={"1rem"}
                  border={"1px"}
                  borderColor="blue.400"
                  borderRadius={"8px"}
                  paddingInline="2rem"
                >
                  {count}
                </Flex>
              </Flex>

              <Divider
                width={"50%"}
                marginInline="auto"
                border="1px"
                my={"3rem"}
                borderColor={"blue.400"}
                bg="blue"
                borderRadius={"8px"}
              ></Divider>
              {/* //below count */}
              <Flex justify={"center"} align="center" wrap={"wrap"} mb="1.5rem">
                <Box>
                  Shirka :{" "}
                  <Field
                    variant="outline"
                    border={"1px"}
                    as={Input}
                    borderColor="blue.400"
                    placeholder="Outline"
                    name="shirka"
                  />
                </Box>
                <Box mx={"2rem"}>
                  Party : <label htmlFor="party"></label>
                  <Field
                    // mt="10px"
                    as={Select}
                    name="party"
                    placeholder="Select Size"
                    borderColor="blue.300"
                  >
                    <option value="N">N</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                  </Field>
                </Box>
                <Box mx={"2rem"} my="2rem">
                  IATA : <label htmlFor="select"></label>
                  <Field
                    // mt="10px"
                    as={Select}
                    name="iata"
                    placeholder="Select Size"
                    borderColor="blue.300"
                  >
                    <option value="N">N</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                  </Field>
                </Box>
                <Box>
                  Service No :{" "}
                  <Field
                    border={"1px"}
                    borderColor="blue.400"
                    as={Input}
                    variant="outline"
                    placeholder="Outline"
                    name="service"
                  />
                </Box>
              </Flex>
              {/* End */}
            </Box>

            {/* Mautamer's */}
            <Center
              fontSize={"2rem"}
              fontWeight="semibold"
              bg={"gray.200"}
              // my="1.5rem"
            >
              Mautmamer's Information
            </Center>
            <Flex justify={"end"} my="10px" width={"95%"}>
              <Input
                type={"search"}
                placeholder="search"
                border={"1px"}
                borderColor="blue.400"
                width={"30%"}
              />
            </Flex>
            <Box overflow="scroll" maxHeight="300px">
              <TableContainer
              // my={"2rem"}
              >
                <Table size="sm">
                  <Thead
                    border={"1px"}
                    borderColor="gray.300"
                    position={"sticky"}
                    bg="gray.100"
                  >
                    <Tr>
                      <Th>Sr#</Th>
                      <Th>Pax Name</Th>
                      <Th>Passport #</Th>
                      <Th>Group Name(License)</Th>
                      <Th>Agent Code</Th>
                      <Th>Visa</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {mautamers.map((result, i) => {
                      return (
                        <Tr>
                          <Td>{result["SrNo."]}</Td>
                          <Td>{result["Pilgrim Name"]}</Td>
                          <Td>{result["Passport No."]}</Td>
                          <Td>{result["Group Name"]}</Td>
                          <Td></Td>
                          <Td>ADT</Td>
                          <Td>
                            <Checkbox
                              id="submit"
                              onChange={(checkbox) => {
                                // console.log(checkbox.target.checked);
                                if (checkbox.target.checked == true) {
                                  let variables = {};
                                  variables.srno = result["SrNo."];
                                  variables.name = result["Pilgrim Name"];
                                  variables.passportname =
                                    result["Passport No."];
                                  variables.groupName = result["Group Name"];
                                  variables.age = result["Age"];
                                  // console.log(
                                  //   i,
                                  //   result["SrNo."],
                                  //   result["Pilgrim Name"],
                                  //   result["Passport No."],
                                  //   result["Group Name"]
                                  // );
                                  // console.log(variables);

                                  setmautamarField((current) => [
                                    ...current,
                                    variables,
                                  ]);
                                  // const realAge = result["Age"]
                                  //   .trim()
                                  //   .split(/\s+/);
                                  // variables.age = parseInt(realAge[0]);
                                  // // console.log(variables.age);
                                  // if (
                                  //   variables.age >= 4 &&
                                  //   variables.age <= 10
                                  // ) {
                                  //   console.log("child");
                                  //   totalChilds++;
                                  // } else if (variables.age > 10) {
                                  //   console.log("adults");
                                  //   totalAdults++;
                                  // } else {
                                  //   console.log("infant");
                                  //   totalInfants++;
                                  // }
                                  // // console.log("false");
                                  // console.log(
                                  //   totalChilds,
                                  //   totalAdults,
                                  //   totalInfants
                                  // );
                                  // console.log("hi1", mautamarField);
                                } else {
                                  // console.log("false");

                                  const newArr = mautamarField.filter(
                                    (object) => {
                                      return object.srno !== result["SrNo."];
                                    }
                                  );

                                  while (mautamarField.length > 0) {
                                    mautamarField.pop();
                                  }
                                  // console.log("hi2", typeof mautamarField);
                                  // console.log(newArr);
                                  for (let i = 0; i < newArr.length; i++) {
                                    // mautamarField.push(newArr[i]);
                                    setmautamarField((current) => [
                                      ...current,
                                      newArr[i],
                                    ]);
                                  }
                                }

                                // const realAge = mautamarField.age
                                //   .trim()
                                //   .split(/\s+/);
                                // consle.log(parseInt(realAge));
                                // console.log(variables.age);
                              }}
                            ></Checkbox>
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Center
              fontSize={"2rem"}
              fontWeight="semibold"
              bg={"gray.200"}
              // my="1.5rem"
            >
              Transportation Detail
            </Center>

            {inputList.map((x, i) => {
              return (
                <Flex
                  //  border={"1px"}
                  key={i}
                  py={"1rem"}
                  wrap="wrap"
                >
                  <Grid
                    flexWrap={"wrap"}
                    templateColumns="repeat(5, 0.1fr)"
                    gap={2}
                    justifyContent="center"
                    width={"100%"}
                  >
                    <Box w="170px" h="50">
                      <Input
                        type={"date"}
                        // className="ml10"
                        name="date"
                        border={"1px"}
                        borderColor="blue.400"
                        // placeholder="Enter Last Name"
                        // width={"120%"}
                        // value={x.from_to}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </Box>

                    <Box w="170px" h="50">
                      {/* <Box>From - To :</Box> */}
                      <Flex>
                        <Select
                          // placeholder="select option"
                          // border={"1px"}
                          borderColor="blue.400"
                          name="from_to"
                          value={x.from_to}
                          // padding="10rem"
                          // width="200px"
                          // size="50"
                          onChange={(e) => handleInputChange(e, i)}
                        >
                          <option>Select Option</option>
                          <option value="option1">Option 1</option>
                          <option value="option2">Option 2</option>
                          <option value="option3">Option 3</option>
                        </Select>
                      </Flex>
                    </Box>

                    <Box w="170px" h="50">
                      {/* <Box>Types of Transfer : </Box> */}
                      <Select
                        placeholder="Blue"
                        // border={"1px"}
                        borderColor="blue.400"
                        name="types"
                        value={x.types}
                        onChange={(e) => handleInputChange(e, i)}
                        // width="200px"
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>

                    <Box
                    // w="100px"
                    // h="50"
                    >
                      {inputList.length !== 1 && (
                        <Button
                          colorScheme="red"
                          // paddingInline={"1rem"}
                          onClick={() => handleRemoveClick(i)}
                        >
                          Remove
                        </Button>
                      )}
                    </Box>

                    <Box
                    // border={"1px"}
                    //  w="50px"
                    // h="50"
                    >
                      {inputList.length - 1 === i && (
                        <Button
                          colorScheme="blue"
                          // paddingInline={"2rem"}
                          onClick={handleAddClick}
                        >
                          Add New
                        </Button>
                      )}
                    </Box>
                  </Grid>
                </Flex>
              );
            })}

            {/* end */}
          </Flex>

          {/* ziyarat */}

          <Flex
            direction={"column"}
            border="1px"
            borderColor={"gray.300"}
            width={"90%"}
            marginInline="auto"
            // my={"1rem"}
          >
            <Center fontSize={"2rem"} fontWeight="semibold" bg={"gray.200"}>
              Ziyaraat
            </Center>
            <Flex
              // border={"1px"}
              my="1rem"
              justify={"space-evenly"}
              align="center"
              width={"80%"}
              marginInline="auto"
            >
              <label>
                <Field
                  type="radio"
                  name="radio"
                  // as={Radio}
                  fontWeight={"bold"}
                  value="none"
                ></Field>
                None
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  fontWeight={"bold"}
                  // as={Radio}
                  value="Madina Ziarat"
                ></Field>
                Madina Ziarat
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  // as={Radio}
                  fontWeight={"bold"}
                  value="Makkah & Madina Ziarat"
                ></Field>
                Makkah & Madina Ziarat
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  // as={Radio}
                  fontWeight={"bold"}
                  value="Makkah Ziarat"
                ></Field>
                Makkah Ziarat
              </label>
            </Flex>
            <Flex
              // border={"1px"}
              direction={"column"}
              width="100%"
              justify="center"
              align={"center"}
              // marginInline={"auto"}
              my="1rem"
            >
              <Box
                fontWeight={"semibold"}
                bg="gray.200"
                width={"100%"}
                textAlign="center"
                fontSize={"1.5rem"}
              >
                Remarks :{" "}
              </Box>
              <Box w={"70%"} mt="1rem">
                <Field as={Input} borderColor="blue.400" name="remark" />
              </Box>
            </Flex>
            {
              <Button
                w="10%"
                marginInline={"auto"}
                variant={"solid"}
                colorScheme="blue"
                type="submit"
              >
                Submit
              </Button>
              // <button type="submit">Submit</button>
            }
          </Flex>
        </Form>
        {/* </Formik> */}
      </Formik>

      {/* {console.log(inputList)} */}
    </>
  );
};

export default Create;
