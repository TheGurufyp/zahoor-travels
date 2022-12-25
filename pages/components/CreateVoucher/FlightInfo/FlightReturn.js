import React from "react";
import {
  Center,
  Heading,
  Box,
  Flex,
  Button,
  Divider,
  Select,
  Input,
} from "@chakra-ui/react";

const FlightReturn = (props) => {
  return (
    <>
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
              Return Date :
              <Input
                type={"date"}
                border=" 1px"
                name="returndate"
                borderColor={"blue.400"}
                onChange={props.handleInput}
              />
            </Box>
          </Flex>

          <Flex my="1rem" className="Flex-7" mx={"1.5rem"}>
            <Box mx={"1rem"}>
              Return Time :
              <Input
                border={"1px"}
                borderColor="blue.500"
                type={"time"}
                as={Input}
                name="returntime"
                onChange={props.handleInput}
              ></Input>
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
              <Select
                placeholder="Select option"
                name="returnsector1"
                onChange={props.handleInput}
                borderColor="blue.300"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Box mx={"0.5rem"}></Box>

              <Select
                placeholder="Select option"
                name="returnsector2"
                onChange={props.handleInput}
                borderColor="blue.300"
              >
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </Flex>

          <Flex
            my="1rem"
            direction={"column"}
            // justify={"center"}
            className="Flex-7"
            mx={"2rem"}
          >
            <Box>Flight No :</Box>
            <Flex>
              <Input
                // mt="10px"
                as={Select}
                name="returnflight1"
                placeholder="Select Size"
                borderColor="blue.300"
                onChange={props.handleInput}
              >
                <option value="N">N</option>
                <option value="S">S</option>
                <option value="M">M</option>
              </Input>
              <Box mx="0.5rem"></Box>
              <Input
                border={"1px"}
                borderColor="blue.400"
                htmlSize={15}
                as={Input}
                onChange={props.handleInput}
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
              <Input
                border={"1px"}
                borderColor="blue.400"
                htmlSize={7}
                as={Input}
                onChange={props.handleInput}
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
          <Button colorScheme={"blue"}>Count Night</Button>
          <Flex
            justify={"center"}
            align="center"
            mx={"1rem"}
            border={"1px"}
            borderColor="blue.400"
            borderRadius={"8px"}
            paddingInline="2rem"
          >
            {props.date ? props.date : "0"}
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
            <Input
              variant="outline"
              border={"1px"}
              as={Input}
              borderColor="blue.400"
              placeholder="Outline"
              onChange={props.handleInput}
              name="shirka"
            />
          </Box>
          <Box mx={"2rem"}>
            Party : <label htmlFor="party"></label>
            <Select
              placeholder="Select option"
              name="party"
              borderColor="blue.300"
              onChange={props.handleInput}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box mx={"2rem"} my="2rem">
            IATA : <label htmlFor="select"></label>
            <Select
              placeholder="Select option"
              name="iata"
              borderColor="blue.300"
              onChange={props.handleInput}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            Service No :{" "}
            <Input
              border={"1px"}
              borderColor="blue.400"
              as={Input}
              variant="outline"
              placeholder="Outline"
              name="service"
              onChange={props.handleInput}
            />
          </Box>
        </Flex>
        {/* End */}
      </Box>
    </>
  );
};

export default FlightReturn;
