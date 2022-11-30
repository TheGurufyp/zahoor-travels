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
  Grid,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { React, useState } from "react";
import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
const Transport = () => {
  const [inputList, setInputList] = useState([
    { date: "", from_to: "", types: "" },
  ]);

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
          <Flex key={i} py={"1rem"} wrap="wrap">
            <Grid
              flexWrap={"wrap"}
              templateColumns="repeat(5, 0.1fr)"
              gap={6}
              justifyContent="center"
              width={"100%"}
            >
              <Box w="170px" h="50">
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
              </Box>

              <Box w="170px" h="50">
                {/* <Box>From - To :</Box> */}
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

              <Box w="100px" h="50">
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

              <Box w="50px" h="50">
                {inputList.length - 1 === i && (
                  <Button
                    colorScheme="blue"
                    paddingInline={"2rem"}
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
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>;
    </>
  );
};

export default Transport;
