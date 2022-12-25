import React, { useEffect } from "react";
import {
  Center,
  RadioGroup,
  Heading,
  Button,
  Stack,
  Box,
  Radio,
  Flex,
  Input,
} from "@chakra-ui/react";

const Ziarat = (props) => {
  return (
    <>
      <Flex
        direction={"column"}
        border="1px"
        borderColor={"gray.300"}
        width={"90%"}
        marginInline="auto"
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
          wrap={"wrap"}
        >
          <Box>
            <input
              onChange={props.handleInput}
              type="radio"
              id="contactChoice0"
              name="radio"
              value="None"
              width={"10%"}
            />
            <label htmlFor="contactChoice0">None</label>
          </Box>
          <Box>
            <input
              onChange={props.handleInput}
              type="radio"
              id="contactChoice1"
              name="radio"
              value="Madina Ziarat"
            />
            <label htmlFor="contactChoice1">Madina Ziarat</label>
          </Box>
          <Box>
            <input
              onChange={props.handleInput}
              type="radio"
              id="contactChoice2"
              name="radio"
              value="Makka & Madina Ziarat"
            />
            <label htmlFor="contactChoice2">Makka & Madina Ziarat</label>
          </Box>
          <Box>
            <input
              onChange={props.handleInput}
              type="radio"
              id="contactChoice3"
              name="radio"
              value="Makkah Ziarat"
            />
            <label htmlFor="contactChoice3">Makkah Ziarat</label>
          </Box>
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
            Remarks :
          </Box>
          <Box w={"70%"} mt="1rem">
            <Input
              onChange={props.handleInput}
              as={Input}
              borderColor="blue.400"
              name="remark"
              // value={props.data.remark}
            />
          </Box>
        </Flex>
        <Button
          w="10%"
          marginInline={"auto"}
          variant={"solid"}
          colorScheme="blue"
          type="submit"
          mb={"1rem"}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
};

export default Ziarat;
