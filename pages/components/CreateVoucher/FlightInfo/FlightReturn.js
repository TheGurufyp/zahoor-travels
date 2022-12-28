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
                <option value="JED">JED</option>
                <option value="MED">MED</option>
                <option value="TIF">TIF</option>
              </Select>
              <Box mx={"0.5rem"}></Box>

              <Select
                placeholder="Select option"
                name="returnsector2"
                onChange={props.handleInput}
                borderColor="blue.300"
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
                placeholder="Select Flight"
                borderColor="blue.300"
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
              placeholder="Select Party"
              name="party"
              borderColor="blue.300"
              onChange={props.handleInput}
            >
              <option value="AEROGLOBE">AEROGLOBE</option>
              <option value="AFNAN">AFNAN</option>
              <option value="ALSAMADTRY">ALSAMADTRY</option>
              <option value="ZAHOOR TRAVEL">ZAHOOR TRAVEL</option>
            </Select>
          </Box>
          <Box mx={"2rem"} my="2rem">
            IATA : <label htmlFor="select"></label>
            <Select
              placeholder="Select IATA"
              name="iata"
              borderColor="blue.300"
              onChange={props.handleInput}
            >
              <option value="IATA-1">IATA-1</option>
              <option value="IATA-2">IATA-2</option>
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
