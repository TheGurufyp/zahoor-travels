import React from "react";
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
  Field,
  Radio,
  Input,
} from "@chakra-ui/react";

const Transportation = (props) => {
  // console.log(props);
  return (
    <>
      <Center
        fontSize={"2rem"}
        fontWeight="semibold"
        bg={"gray.200"}
        // my="1.5rem"
        mt="1rem"
      >
        Transportation Detail
      </Center>
      <Flex
        direction={"column"}
        align="center"
        justify={"space-around"}
        // border="1px"
        w={"100%"}
        mt="1rem"
      >
        {props.FieldValue.map((items, index) => {
          return (
            <Flex
              align={"center"}
              // border="1px"
              width={"100%"}
              justify="center"
              key={index + 1}
            >
              <Box w={"25%"}>
                <Input
                  type={"Date"}
                  my="1rem"
                  value={items.date}
                  onChange={(event) => props.handleInput(index, event)}
                  name="date"
                />
              </Box>
              <Box w={"25%"} mx={"1.5rem"}>
                <Select
                  placeholder="From-To"
                  onChange={(event) => props.handleInput(index, event)}
                  name="from_to"
                  value={items.from_to}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              <Box w={"25%"}>
                <Select
                  placeholder="Type-of-Transfer"
                  onChange={(event) => props.handleInput(index, event)}
                  name="type"
                  value={items.type}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
              {props.FieldValue.length > 1 ? (
                <Button
                  colorScheme={"red"}
                  mx={"1.5rem"}
                  onClick={() => props.remove(index)}
                >
                  Remove
                </Button>
              ) : (
                ""
              )}
            </Flex>
          );
        })}
        <Button onClick={props.add} colorScheme="green" my="1rem">
          Add More..
        </Button>
      </Flex>
    </>
  );
};

export default Transportation;
