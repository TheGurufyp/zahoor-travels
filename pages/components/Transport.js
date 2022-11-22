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
import { React, useState } from "react";
import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
const Transport = () => {
  const [inputList, setInputList] = useState([{ date: "", from_to: "" }]);

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
    setInputList([...inputList, { date: "", from_to: "", types: "" }]);
  };

  return (
    <>
      {inputList.map((x, i) => {
        return (
          <Flex
            // border={"1px"}
            // justify="space-between"
            align={"center"}
            direction="column"
            // wrap="wrap"
            // w={"100%"}
            my="1rem"
          >
            <Flex
              // border={"1px"}
              width="100%"
              align="center"
              wrap={"wrap"}
              justify={"space-around"}
              // direction={"column"}
              className="flex-2"
            >
              <Flex
                // border={"1px"}
                justify="center"
                // align="center"
                // ml="5rem"
                className="Flex-1"
                direction={"column"}
                w={"20%"}
                // ml="15rem"
              >
                <Box>Date :</Box>
                <Flex>
                  <Input
                    type={"date"}
                    // className="ml10"
                    // name="from_to"
                    border={"1px"}
                    borderColor="blue.400"
                    // placeholder="Enter Last Name"
                    // width={"120%"}
                    // value={x.from_to}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Flex>
              </Flex>

              <Flex
                // border={"1px"}
                w={"25%"}
                // justify="center"
                // align="center"
                // ml="6rem"
                className="Flex-1"
                // mx={"10rem"}
                direction={"column"}
              >
                <Box>From - To :</Box>
                <Flex>
                  <Select
                    placeholder="Jed City-Jed APT"
                    // border={"1px"}
                    borderColor="blue.400"
                    name="date"
                    value={x.date}
                    // padding="10rem"
                    // width="200px"
                    // size="50"
                    onChange={(e) => handleInputChange(e, i)}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Flex>
              </Flex>

              <Flex
                // border={"1px"}
                w={"30%"}
                // justify="center"
                direction="column"
                // align="center"
                // ml="5rem"
                // mx={"3rem"}
                className="Flex-1"
              >
                <Center>Type of Transfer : </Center>
                <Flex>
                  <Select
                    placeholder="Blue"
                    // border={"1px"}
                    borderColor="blue.400"
                    name="types"
                    value={x.types}
                    // width="200px"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Flex>
              </Flex>
              <Flex
              // border={"1px"}
              // justify="center"
              // align={"center"}
              // direction="column"
              >
                <Box my={"0.6rem"}></Box>
                <Box
                // mx={"1rem"}
                // border="1px"
                >
                  {inputList.length !== 1 && (
                    <Button
                      colorScheme="red"
                      paddingInline={"1rem"}
                      onClick={() => handleRemoveClick(i)}
                    >
                      Remove
                    </Button>
                  )}
                </Box>
              </Flex>
            </Flex>
            <Flex
              // justify={"right"}
              // align={"center"}
              // mx="8rem"
              my={"1rem"}
              className="flex-4"
              // border={"1px"}
              // mr={"1rem"}
            >
              {inputList.length - 1 === i && (
                <Button
                  colorScheme="blue"
                  paddingInline={"2rem"}
                  onClick={handleAddClick}
                >
                  Add New
                </Button>
              )}
            </Flex>
          </Flex>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </>
  );
};

export default Transport;
