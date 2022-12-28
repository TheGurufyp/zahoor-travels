import React, { useEffect } from "react";
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
                  <option value="JED CITY-JED APT">JED CITY-JED APT</option>
                  <option value="JED(APT)-JED(CITY)">JED(APT)-JED(CITY)</option>
                  <option value="JED-MAK">JED-MAK</option>
                  <option value="JED-MED">JED-MED</option>
                  <option value="MAD APT-MAD HTL">MAD APT-MAD HTL</option>
                  <option value="MAD HTL-MAD TRAIN STATION">
                    MAD HTL-MAD TRAIN STATION
                  </option>
                  <option value="MAD HTL-MAD TRAIN STATION">
                    MAD HTL-MAD TRAIN STATION
                  </option>
                  <option value="MAD TRAIN STATION - MAD HTL">
                    MAD TRAIN STATION - MAD HTL
                  </option>
                  <option value="MAD-JED">MAD-JED</option>
                  <option value="MAD-MAK">MAD-MAK</option>
                  <option value="MADINAH ZIARAT">MADINAH ZIARAT</option>
                  <option value="MAK HTL-MAK TRAIN STATION">
                    MAK HTL-MAK TRAIN STATION
                  </option>
                  <option value="MAK TRAIN STATION-MAK HTL">
                    MAK TRAIN STATION-MAK HTL
                  </option>
                  <option value="MAK-JED">MAK-JED</option>
                  <option value="MAK-MAD">MAK-MAD</option>
                  <option value="MAKKAH ZIARAT">MAKKAH ZIARAT</option>
                  <option value="MED ( HTL -APT )">MED ( HTL -APT )</option>
                  <option value="Self">Self</option>
                </Select>
              </Box>
              <Box w={"25%"}>
                <Select
                  placeholder="Type-of-Transfer"
                  onChange={(event) => props.handleInput(index, event)}
                  name="type"
                  value={items.type}
                >
                  <option value="BUS">BUS</option>
                  <option value="CAR">CAR</option>
                  <option value="COASTER">COASTER</option>
                  <option value="GMC">GMC</option>
                  <option value="H-1">H-1</option>
                  <option value="HIACE">HIACE</option>
                  <option value="SELF">SELF</option>
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
