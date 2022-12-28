import React, { useEffect } from "react";
import { Center } from "@chakra-ui/react";
import FlightDepart from "./FlightDepart";
import FlightReturn from "./FlightReturn";

const Flight = ({ handleInput, date, data }) => {
  useEffect(() => {
    console.log("render F");
  }, []);
  // console.log("1", date);
  return (
    <>
      {/* {console.log("2nd")} */}
      <Center fontSize={"2rem"} fontWeight="semibold" bg={"gray.200"}>
        Flight Information
      </Center>
      <FlightDepart handleInput={handleInput} data={data} />
      <FlightReturn handleInput={handleInput} date={date} data={data} />
    </>
  );
};

export default Flight;
