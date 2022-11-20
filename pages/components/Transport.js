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
            //    border={"1px"}
            direction="column"
          >
            <Flex
              //  border={"1px"}
              justify="space-between"
              align="center"
            >
              <Flex
                my={"0.5rem"}
                // border={"1px"}
                w="90%"
                justify="space-between"
                align="center"
              >
                <Flex
                  //   border={"1px"}
                  justify="space-between"
                  align="center"
                  ml="5rem"
                >
                  <Box mx={"1rem"} w="30%">
                    Date :
                  </Box>
                  <Input
                    type={"date"}
                    className="ml10"
                    name="from_to"
                    border={"1px"}
                    borderColor="blue.400"
                    placeholder="Enter Last Name"
                    value={x.from_to}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                </Flex>

                <Flex
                  // border={"1px"}
                  justify="center"
                  align="center"
                  ml="6rem"
                >
                  <Box mx={"1rem"}>From - To :</Box>
                  <Box>
                    <Select
                      placeholder="Jed City-Jed APT"
                      border={"1px"}
                      borderColor="blue.400"
                      name="date"
                      value={x.date}
                      onChange={(e) => handleInputChange(e, i)}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                </Flex>

                <Flex justify="center" align="center" ml="5rem">
                  <Box mx="1rem">Type of Transfer : </Box>
                  <Box>
                    <Select
                      placeholder="Blue"
                      border={"1px"}
                      borderColor="blue.400"
                      name="types"
                      value={x.types}
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Box>
                </Flex>
              </Flex>
              <Box mx={"1rem"}>
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
            <Flex justify={"right"} mr="8rem" my={"1rem"}>
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
