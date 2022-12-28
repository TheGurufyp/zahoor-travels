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
                        <option value="ADD">ADD</option>
                        <option value="AMM">AMM</option>
                        <option value="AT">AT</option>
                        <option value="AUH">AUH</option>
                        <option value="BAH">BAH</option>
                        <option value="BCN">BCN</option>
                        <option value="BEY">BEY</option>
                        <option value="CAI">CAI</option>
                        <option value="CAN">CAN</option>
                        <option value="CDG">CDG</option>
                        <option value="CMB">CMB</option>
                        <option value="CMN">CMN</option>
                        <option value="DAC">DAC</option>
                        <option value="DMM">DMM</option>
                        <option value="DOH">DOH</option>
                        <option value="DWC">DWC</option>
                        <option value="DXB">DXB</option>
                        <option value="FRA">FRA</option>
                        <option value="GF">GF</option>
                        <option value="GYD">GYD</option>
                        <option value="HBE">HBE</option>
                        <option value="IAD">IAD</option>
                        <option value="ISB">ISB</option>
                        <option value="IST">IST</option>
                        <option value="JED">JED</option>
                        <option value="JFK">JFK</option>
                        <option value="JNB">JNB</option>
                        <option value="KHI">KHI</option>
                        <option value="KWI">KWI</option>
                        <option value="LAX">LAX</option>
                        <option value="LHE">LHE</option>
                        <option value="LHR">LHR</option>
                        <option value="LYP">LYP</option>
                        <option value="MAD">MAD</option>
                        <option value="MAN">MAN</option>
                        <option value="MCT">MCT</option>
                        <option value="MRU">MRU</option>
                        <option value="MUX">MUX</option>
                        <option value="MXP">MXP</option>
                        <option value="OV">OV</option>
                        <option value="PEW">PEW</option>
                        <option value="ROM">ROM</option>
                        <option value="RUH">RUH</option>
                        <option value="SAW">SAW</option>
                        <option value="SKT">SKT</option>
                        <option value="SHJ">SHJ</option>
                        <option value="TIF">TIF</option>
                        <option value="UET">UET</option>
                        <option value="VIE">VIE</option>
                      </Select>
                    </Box>
                    <Box mx={"0.6rem"}>
                      <Select
                        placeholder="Select option"
                        name="sector2"
                        borderColor="blue.300"
                        onChange={props.handleInput}
                      >
                        <option value="JED">JED</option>
                        <option value="MED">MED</option>
                        <option value="TIF">TIF</option>
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
                        <option value="6S">6S</option>
                        <option value="AT">AT</option>
                        <option value="EG">EG</option>
                        <option value="EK">EK</option>
                        <option value="EK">EK</option>
                        <option value="ER">ER</option>
                        <option value="ET">ET</option>
                        <option value="EY">EY</option>
                        <option value="EY">EY</option>
                        <option value="EY">EY</option>
                        <option value="F3">F3</option>
                        <option value="FZ">FZ</option>
                        <option value="G9">G9</option>
                        <option value="J2">J2</option>
                        <option value="J9">J9</option>
                        <option value="KU">KU</option>
                        <option value="LH">LH</option>
                        <option value="ME">ME</option>
                        <option value="MLE">MLE</option>
                        <option value="MS">MS</option>
                        <option value="OV">OV</option>
                        <option value="PA">PA</option>
                        <option value="PC">PC</option>
                        <option value="PK">PK</option>
                        <option value="QR">QR</option>
                        <option value="RJ">RJ</option>
                        <option value="SM">SM</option>
                        <option value="SV">SV</option>
                        <option value="TK">TK</option>
                        <option value="WY">WY</option>
                        <option value="XY">XY</option>
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
