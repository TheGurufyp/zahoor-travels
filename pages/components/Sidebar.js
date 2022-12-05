import React, { useRef, useState, useEffect } from "react";
import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import Link from "next/link";

function SideBar({ setopenSidebar, openSidebar }) {
  // const [openSidebar, setopenSidebar] = useState(false)

  let sideStyles = {
    position: "fixed",
    left: "0px",
    top: "0px",
    zIndex: 1100,
    backgroundColor: "rgb(22, 45, 163,0.9)",
    width: "250px",
    height: "100vh",
    transition: "all 0.3s",
    transform: openSidebar ? "translateX(0px)" : "translateX(-100%)",
  };

  return (
    <>
      <Box style={sideStyles}>
        <Flex direction={"column"} justify="center" h="100%">
          <Box color="white" textAlign={"center"}>
            <Link href={"/userdashboard"}>Home</Link>
            <Divider w="80%" mx="auto" my="15px" />
            <Link href={"/userdashboard/create"}>Create Vocuhers</Link>
            <Divider w="80%" mx="auto" my="15px" />

            <Link href={"/userdashboard/menage"}>Manage Vouchers</Link>
            <Divider w="80%" mx="auto" my="15px" />
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default SideBar;
