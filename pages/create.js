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
  HStack,
  Option,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
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
import Transport from "./components/Transport";
import { Radio, RadioGroup } from "@chakra-ui/react";

const create = () => {
  const [count, setcount] = useState(0);
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  function countNight() {
    setcount(count + 1);
  }
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
            // border={"1px solid black"}
            my={"20px"}
            className="main-sec"
            justify="center"
            flexWrap={"wrap"}
            align="center"
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
              <Box>
                Depart Date :{" "}
                <Input type={"date"} border=" 1px" borderColor={"blue.400"} />
              </Box>
            </Flex>

            <Flex
              //w={"30%"}
              // border={"1px"}
              //  direction={"column"}
              justify={"center"}
              align="center"
              // mx={"1rem"}
              my="1rem"
              mx={"2rem"}
              className="Flex-7"
            >
              <Box
              // mx={"1rem"}
              >
                Depart Time :
                <Input
                  border={"1px"}
                  borderColor="blue.500"
                  type={"time"}
                ></Input>
              </Box>
            </Flex>

            <Flex
              // border={"1px"}
              // align="center"
              // justify={"space-around"}
              // mx={"2rem"}
              my={"1rem"}
              mx={"2rem"}
              //w={"30%"}
              // justify="center"
              className="Flex-7"
              direction="column"
            >
              <Box>Sector :</Box>
              <Flex align={"center"}>
                <Select placeholder="USA" border={"1px"} borderColor="blue.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Box mx={"0.5rem"}></Box>
                <Select placeholder="AED" border={"1px"} borderColor="blue.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>

            {/* /////// */}

            <Flex
              mx={"2rem"}
              // border={"1px"}
              align="center"
              // mx={"1rem"}
              justify={"center"}
              //w={"30%"}
              //  direction={"column"}
              my="1rem"
              className="Flex-7"
            >
              <Box>
                Arrival Date :{" "}
                <Input type={"date"} border=" 1px" borderColor={"blue.400"} />
              </Box>
            </Flex>

            {/* /////
             */}

            <Flex
              //w={"30%"}
              // border={"1px"}
              //  direction={"column"}
              mx={"2rem"}
              justify={"center"}
              align="center"
              my={"1rem"}
              className="Flex-7"
            >
              <Box>
                Arrival Time :{" "}
                <Input
                  border={"1px"}
                  borderColor="blue.500"
                  type={"time"}
                ></Input>
              </Box>
            </Flex>
            <Flex
              // border={"1px"}
              // align="center"
              //w={"30%"}
              mx={"4rem"}
              my="1rem"
              // justify={"center"}
              className="Flex-7"
              direction={"column"}
            >
              <Box>Flight No : </Box>
              <Flex>
                <Select
                  placeholder="6S"
                  border={"1px"}
                  borderColor="blue.400"
                  // w={"auto"}
                  // size={"lg"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Box mx={"0.5rem"}></Box>
                <Input
                  border={"1px"}
                  borderColor="blue.400"
                  htmlSize={40}
                  width="auto"
                />
              </Flex>
            </Flex>

            <Flex
              // border={"1px"}
              // w={"40%"}
              my="2rem"
              justify={"center"}
              // align="center"
              className="Flex-7"
            >
              <Box>
                PNR No :
                <Input
                  border={"1px"}
                  borderColor="blue.400"
                  htmlSize={10}
                  // width="120%"
                  // ml={"10px"}
                />
              </Box>
            </Flex>
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
            border={"1px"}
            borderColor="gray.100"
            my={"20px"}
            className="main-sec"
            justify="center"
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
                <Input type={"date"} border=" 1px" borderColor={"blue.400"} />
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
              mx={"3rem"}
            >
              <Box mx={"1rem"}>
                Return Time :
                <Input
                  border={"1px"}
                  borderColor="blue.500"
                  type={"time"}
                ></Input>
              </Box>
            </Flex>

            <Flex
              // border={"1px"}
              // align="center"
              // justify={"space-around"}
              // mx={"2rem"}
              my={"1rem"}
              //w={"30%"}
              // justify="center"
              className="Flex-7"
              mx="3rem"
              direction={"column"}
            >
              <Box>Return Sector :</Box>
              <Flex>
                <Select placeholder="USA" border={"1px"} borderColor="blue.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Box mx={"0.5rem"}></Box>
                <Select placeholder="AED" border={"1px"} borderColor="blue.400">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Flex>

            {/* /////// */}

            <Flex
              // border={"1px"}
              // align="center"
              //w={"30%"}
              my="2rem"
              direction={"column"}
              // justify={"center"}
              className="Flex-7"
              mx={"3rem"}
            >
              <Box>Flight No :</Box>
              <Flex>
                <Select
                  placeholder="6S"
                  border={"1px"}
                  borderColor="blue.400"
                  // w={"auto"}
                  size={"md"}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Box mx="0.5rem"></Box>
                <Input
                  border={"1px"}
                  borderColor="blue.400"
                  htmlSize={15}
                  width="auto"
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
                <Input
                  border={"1px"}
                  borderColor="blue.400"
                  htmlSize={7}
                  // width="120%"
                  // ml={"10px"}
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

          <Divider my={"2.5rem"}></Divider>
          {/* //below count */}
          <Flex justify={"center"} align="center" wrap={"wrap"} mb="1.5rem">
            <Box>
              Shirka : <Input variant="outline" placeholder="Outline" />
            </Box>
            <Box mx={"2rem"}>
              Party :{" "}
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box mx={"2rem"} my="2rem">
              IATA :{" "}
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box>
              Service No : <Input variant="outline" placeholder="Outline" />
            </Box>
          </Flex>
          {/* End */}
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

      {/* ziyarat */}

      <Flex
        direction={"column"}
        border="1px"
        borderColor={"gray.300"}
        width={"90%"}
        marginInline="auto"
        my={"1rem"}
      >
        <Center fontSize={"2rem"} fontWeight="semibold" bg={"gray.200"}>
          Ziyaraat
        </Center>
        <Flex my="1rem" justify={"center"}>
          <RadioGroup defaultValue="0">
            <Stack spacing={200} direction="row">
              <Radio fontWeight={"bold"} value="0">
                None
              </Radio>
              <Radio fontWeight={"bold"} value="1">
                Madina Ziarat
              </Radio>
              <Radio fontWeight={"bold"} value="2">
                Makkah & Madina Ziarat
              </Radio>
              <Radio fontWeight={"bold"} value="3">
                Makkah Ziarat
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        <Flex direction={"column"} width="90%" marginInline={"auto"} my="1rem">
          <Box fontWeight={"bold"}>Remarks : </Box>
          <Flex>
            <Input borderColor="blue.400"></Input>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default create;
