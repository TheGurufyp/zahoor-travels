import {
  Center,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Divider,
  Input,
  Select,
  Option,
  InputGroup,
  InputLeftElement,
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
} from "@chakra-ui/react";
import { useState } from "react";
import Transport from "./components/Transport";

const create = () => {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

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
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
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
            my={"20px"}
            className="main-sec"
            justify="space-between"
            flexWrap={"wrap"}
          >
            <Flex
              // border={"1px"}
              align="center"
              // mx={"1rem"}
              justify={"center"}
              //w={"30%"}
              className="Flex-7"
              my={"2rem"}

              //  direction={"column"}
            >
              <Box>Depart Date : </Box>
              <Box ml={"1rem"}>
                <Input type={"date"} border=" 1px" borderColor={"blue.400"} />
              </Box>
            </Flex>
            <Flex
              //w={"30%"}
              // border={"1px"}
              //  direction={"column"}
              justify={"center"}
              align="center"
              mx={"1rem"}
              my="1rem"
              className="Flex-7"
            >
              <Box mx={"1rem"}>Depart Time : </Box>
              <Flex align={"center"}>
                <Input
                  border={"1px"}
                  borderColor="blue.500"
                  type={"time"}
                ></Input>
              </Flex>
            </Flex>
            <Flex
              // border={"1px"}
              align="center"
              // justify={"space-around"}
              // mx={"2rem"}
              my={"1rem"}
              //w={"30%"}
              justify="center"
              className="Flex-7"
            >
              <Box>Sector</Box>
              <Flex justify="space-around" align={"center"}>
                <Box ml={"1rem"}>
                  <Select
                    placeholder="USA"
                    border={"1px"}
                    borderColor="blue.400"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>

                <Box mx={"1rem"}>
                  <Select
                    placeholder="AED"
                    border={"1px"}
                    borderColor="blue.400"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Flex>
            </Flex>

            {/* /////// */}

            <Flex
              // border={"1px"}
              align="center"
              // mx={"1rem"}
              justify={"center"}
              //w={"30%"}
              //  direction={"column"}
              my="1rem"
              className="Flex-7"
            >
              <Box>Arrival Date :</Box>
              <Box ml={"1rem"}>
                <Input type={"date"} border=" 1px" borderColor={"blue.400"} />
              </Box>
            </Flex>

            {/* /////
             */}

            <Flex
              //w={"30%"}
              // border={"1px"}
              //  direction={"column"}
              justify={"center"}
              align="center"
              my={"1rem"}
              className="Flex-7"
            >
              <Box mx={"1rem"}>Arrival Time : </Box>
              <Flex align={"center"}>
                <Input
                  border={"1px"}
                  borderColor="blue.500"
                  type={"time"}
                ></Input>
              </Flex>
            </Flex>
            <Flex
              // border={"1px"}
              align="center"
              //w={"30%"}
              my="1rem"
              justify={"center"}
              className="Flex-7"
            >
              <Box>Flight No </Box>
              <Flex mx={"1rem"}>
                <Box>
                  <Select
                    placeholder="6S"
                    border={"1px"}
                    borderColor="blue.400"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>

                <Box mx={"4px"}>
                  <Input
                    border={"1px"}
                    borderColor="blue.400"
                    htmlSize={4}
                    width="auto"
                  />
                </Box>
              </Flex>
            </Flex>

            <Flex
              // border={"1px"}
              //w={"30%"}
              my="2rem"
              justify={"center"}
              align="center"
              className="Flex-7"
            >
              <Box>PNR No : </Box>
              <Box>
                <Input
                  border={"1px"}
                  borderColor="blue.400"
                  htmlSize={7}
                  width="auto"
                  ml={"10px"}
                />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Center
          fontSize={"2rem"}
          fontWeight="semibold"
          bg={"gray.200"}
          my="1.5rem"
        >
          Transportation Detail
        </Center>
        <Transport />
      </Flex>
    </>
  );
};

export default create;
