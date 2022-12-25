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
  Input,
} from "@chakra-ui/react";

const FlightDepart = (props) => {
  return (
    <>
      <Box
      //  border={"1px"}
      >
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
          my="2rem"
          //  border={"1px"}
          width="95%"
          marginInline={"auto"}
        >
          <Wrap
            className="fl-1"
            // border={"1px"}
            align={"center"}
            justify="center"
            // justify={"space-evenly"}
            wrap="wrap"
          >
            <WrapItem>
              <Center h="80px">
                <Flex direction="column">
                  <Box>Depart Date :</Box>
                  <Box>
                    <Input
                      type="date"
                      onChange={props.handleInput}
                      border=" 1px"
                      borderColor={"blue.400"}
                      name="depardate"
                      // value={props.data}
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
                  <Box>
                    <Input
                      type={"time"}
                      borderColor="blue.300"
                      className="x1"
                      name="departime"
                      onChange={props.handleInput}
                    />
                  </Box>
                </Flex>
              </Center>
            </WrapItem>

            <WrapItem
            // border={"1px"}
            >
              <Center h="80px">
                <Flex direction="column" className="Flex-7">
                  <Box>Sector:</Box>
                  <Flex>
                    <Box>
                      <Select
                        placeholder="Select option"
                        name="sector1"
                        borderColor="blue.300"
                        onChange={props.handleInput}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                    <Box mx={"0.6rem"}>
                      <Select
                        placeholder="Select option"
                        name="sector2"
                        borderColor="blue.300"
                        onChange={props.handleInput}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
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
                <Flex className="Flex-7" direction={"column"}>
                  <Box>Flight No : </Box>
                  <Flex>
                    <Box>
                      <Select
                        borderColor="blue.300"
                        placeholder="Select option"
                        name="flight1"
                        onChange={props.handleInput}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </Box>
                    <Box mx={"0.7rem"}>
                      <Input
                        border={"1px"}
                        borderColor="blue.400"
                        name="flight2"
                        onChange={props.handleInput}
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
                // w="250px"
                h="80px"
              >
                <Flex
                  //  mx="0.5rem"
                  direction={"column"}
                >
                  <Box>Arrival Date :</Box>
                  <Box>
                    <Input
                      type={"date"}
                      border=" 1px"
                      onChange={props.handleInput}
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
                <Flex direction={"column"}>
                  <Box>Arrival Time :</Box>
                  <Box>
                    <Input
                      type={"date"}
                      border=" 1px"
                      borderColor={"blue.400"}
                      onChange={props.handleInput}
                      name="arrivetime"
                    />
                  </Box>
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
                  <Box>
                    <Input
                      border={"1px"}
                      borderColor="blue.400"
                      name="pnr1"
                      onChange={props.handleInput}
                      // width="120%"
                      // ml={"10px"}
                    />
                  </Box>
                </Flex>
              </Center>
            </WrapItem>
          </Wrap>
        </Flex>
        {/* first section end here */}
      </Box>
    </>
  );
};

export default FlightDepart;
