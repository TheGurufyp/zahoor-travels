import {
  Center,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Divider,
  Select,
  Wrap,
  WrapItem,
  HStack,
  Option,
  FieldGroup,
  FieldLeftElement,
  SimpleGrid,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Formik, Field, Form } from "formik";
import {
  NumberField,
  NumberFieldField,
  NumberFieldStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Link from "next/link";
import { React } from "react";
import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { SlCalender } from "react-icons/sl";
// import Navbar from "./components/Navbar";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import Transport from "../components/Transport";
import { Radio, RadioGroup } from "@chakra-ui/react";

<<<<<<< Updated upstream
const initialValues = {
  friends: [
    {
      name: "",
      email: "",
      date: "",
    },
  ],
};

const create = () => {
=======
const Create = () => {
>>>>>>> Stashed changes
  const [count, setcount] = useState(0);
  const [FieldList, setFieldList] = useState([{ firstName: "", lastName: "" }]);

  // const formik = useFormik({
  //   initialValues: {
  //     depardate: "",
  //     departime: "",
  //     sector1: "",
  //     sector2: "",
  //     flight1: "",
  //     flight2: "",
  //     arrivedate: "",
  //     arrivetime: "",
  //     pnr1: "",
  //     returndate: "",
  //     returntime: "",
  //     returnsector1: "",
  //     returnsector2: "",
  //     returnflight1: "",
  //     returnflight2: "",
  //     pnr2: "",
  //     shirka: "",
  //     party: "",
  //     iata: "",
  //     service: "",
  //     radio: "",
  //     remark: "",
  //   },
  //   onSubmit: (values) => {
  //     console.log(values);
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });

  function countNight() {
    setcount(count + 1);
  }
  // handle Field change
  const handleFieldChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...FieldList];
    list[index][name] = value;
    setFieldList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...FieldList];
    list.splice(index, 1);
    setFieldList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setFieldList([...FieldList, { firstName: "", lastName: "" }]);
  };

  return (
    <>
      {/* //main Heading */}
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
          initialValues,
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
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

              <Flex
                // justify={"center"}
                my="2rem"
                // border={"1px"}
                width="96%"
                marginInline={"auto"}
              >
                <Wrap
                  spacing="10px"
                  className="fl-1"
                  // border={"1px"}
                  justify="center"
                >
                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Box>
                        Depart Date :{" "}
                        <Field
                          type={"date"}
                          border=" 1px"
                          name="depardate"
                          borderColor={"blue.400"}
                        />
                      </Box>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center w="300px" h="80px" bg>
                      <Box>
                        Depart Time :
                        <Field
                          border={"1px"}
                          borderColor="blue.500"
                          type={"time"}
                          name="departime"
                        ></Field>
                      </Box>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Flex
                        // border={"1px"}
                        // align="center"
                        // justify={"space-around"}
                        // mx={"2rem"}
                        // my={"1rem"}
                        // mx={"1.5rem"}
                        // w={"30%"}
                        // justify="center"
                        className="Flex-7"
                        direction="column"
                      >
                        {/* <Box>Sector :</Box> */}
                        <Flex align={"center"}>
                          <label htmlFor="sector1">Sector:</label>
                          <Field
                            // placeholder="USA"
                            border={"1px"}
                            // borderColor="blue.400"
                            name="sector1"
                            component="select"
                          >
                            <option>Select Option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Field>
                          <Box mx={"0.2rem"}></Box>
                          <label htmlFor="sector2"></label>
                          <Field
                            // placeholder="USA"
                            border={"1px"}
                            // borderColor="blue.400"
                            name="sector2"
                            component="select"
                          >
                            <option>Select Option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Field>
                        </Flex>
                      </Flex>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Flex
                        // border={"1px"}
                        // align="center"
                        //w={"30%"}
                        // mx={"1.5rem"}
                        // my="1rem"
                        // justify={"center"}
                        className="Flex-7"
                        direction={"column"}
                        ml="30px"
                      >
                        <Box>Flight No : </Box>
                        <Flex>
                          <label htmlFor="flight1"></label>
                          <Field
                            border={"1px"}
                            borderColor="blue.400"
                            // w={"auto"}
                            // size={"lg"}
                            name="flight1"
                            component="select"
                          >
                            <option>Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Field>
                          <Box mx={"0.2rem"}></Box>
                          <Field
                            border={"1px"}
                            borderColor="blue.400"
                            htmlSize={10}
                            name="flight2"
                            // width="auto"
                          />
                        </Flex>
                      </Flex>
                    </Center>
                  </WrapItem>

                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Box>
                        Arrival Date :{" "}
                        <Field
                          type={"date"}
                          border=" 1px"
                          borderColor={"blue.400"}
                          name="arrivedate"
                        />
                      </Box>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Box>
                        Arrival Time :{" "}
                        <Field
                          border={"1px"}
                          borderColor="blue.500"
                          type={"time"}
                          name="arrivetime"
                        ></Field>
                      </Box>
                    </Center>
                  </WrapItem>
                  <WrapItem>
                    <Center w="300px" h="80px">
                      <Box>
                        PNR No :
                        <Field
                          border={"1px"}
                          borderColor="blue.400"
                          htmlSize={20}
                          name="pnr1"
                          // width="120%"
                          // ml={"10px"}
                        />
                      </Box>{" "}
                    </Center>
                  </WrapItem>
                </Wrap>
              </Flex>
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
                      name="returndate"
                      borderColor={"blue.400"}
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
                      // placeholder="USA"
                      border={"1px"}
                      borderColor="blue.400"
                      name="returnsector1"
                      component="select"
                    >
                      <option>Select an Option</option>

                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Field>
                    <Box mx={"0.5rem"}></Box>
                    <label htmlFor="returnsector2"></label>
                    <Field
                      placeholder="AED"
                      border={"1px"}
                      borderColor="blue.400"
                      name="returnsector2"
                      component="select"
                    >
                      <option>Select option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
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
                    <label htmlFor="returnflight1"></label>
                    <Field
                      placeholder="6S"
                      border={"1px"}
                      borderColor="blue.400"
                      // w={"auto"}
                      component="select"
                      size={"md"}
                      name="returnflight1"
                    >
                      <option>Select an Option</option>
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Field>
                    <Box mx="0.5rem"></Box>
                    <Field
                      border={"1px"}
                      borderColor="blue.400"
                      htmlSize={15}
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
                <Button colorScheme={"blue"} onClick={countNight}>
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
                    borderColor="blue.400"
                    placeholder="Outline"
                    name="shirka"
                  />
                </Box>
                <Box mx={"2rem"}>
                  Party : <label htmlFor="party"></label>
                  <Field
                    placeholder="Select option"
                    border={"1px"}
                    borderColor="blue.400"
                    name="party"
                    component="select"
                  >
                    <option>Select an Option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Field>
                </Box>
                <Box mx={"2rem"} my="2rem">
                  IATA : <label htmlFor="select"></label>
                  <Field
                    border={"1px"}
                    borderColor="blue.400"
                    placeholder="Select option"
                    name="iata"
                    component="select"
                  >
                    <option>select Option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Field>
                </Box>
                <Box>
                  Service No :{" "}
                  <Field
                    border={"1px"}
                    borderColor="blue.400"
                    variant="outline"
                    placeholder="Outline"
                    name="service"
                  />
                </Box>
              </Flex>
              {/* End */}
            </Box>
            <Center
              fontSize={"2rem"}
              fontWeight="semibold"
              bg={"gray.200"}
              // my="1.5rem"
            >
              Transportation Detail
            </Center>

            {/* <Transport /> */}

            {({ values }) => (
              <div>
                <FieldArray name="friends">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.friends.length > 0 &&
                        values.friends.map((friend, index) => (
                          <div className="row" key={index}>
                            <div className="col">
                              <label htmlFor={`friends.${index}.name`}>
                                Name
                              </label>
                              <Field
                                name={`friends.${index}.name`}
                                placeholder="Jane Doe"
                                type="text"
                              />
                              <ErrorMessage
                                name={`friends.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <label htmlFor={`friends.${index}.email`}>
                                Email
                              </label>
                              <Field
                                name={`friends.${index}.email`}
                                placeholder="jane@acme.com"
                                type="email"
                              />
                              <ErrorMessage
                                name={`friends.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div className="col">
                              <button
                                type="button"
                                className="secondary"
                                onClick={() => remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary"
                        onClick={() => push({ name: "", email: "" })}
                      >
                        Add Friend
                      </button>
                    </div>
                  )}
                </FieldArray>
                <button type="submit">Invite</button>
              </div>
            )}

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
            <Flex my="1rem" justify={"center"}>
              <label>
                <Field
                  type="radio"
                  name="radio"
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
                  value="Madina Ziarat"
                ></Field>
                Madina Ziarat
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  fontWeight={"bold"}
                  value="Makkah & Madina Ziarat"
                ></Field>
                Makkah & Madina Ziarat
              </label>
              <label>
                <Field
                  type="radio"
                  name="radio"
                  fontWeight={"bold"}
                  value="Makkah Ziarat"
                ></Field>
                Makkah Ziarat
              </label>
            </Flex>
            <Flex
              direction={"column"}
              width="90%"
              marginInline={"auto"}
              my="1rem"
            >
              <Box fontWeight={"bold"}>Remarks : </Box>
              <Flex>
                <Field borderColor="blue.400" name="remark"></Field>
              </Flex>
            </Flex>
            {
              /* <Button variant={"solid"} colorScheme="blue" type="submit">
            Submit
          </Button> */
              <button type="submit">Submit</button>
            }
          </Flex>
        </Form>
        {/* </Formik> */}
      </Formik>
    </>
  );
};

export default Create;
