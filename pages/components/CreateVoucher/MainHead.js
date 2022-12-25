import React from "react";
import { Button, Box, Flex, Center, Heading } from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";

const MainHead = () => {
  return (
    <>
      <Center my={"1rem"}>
        <Heading color={"blue.500"}>Create / Update Voucher</Heading>
      </Center>
      <Flex
        align={"center"}
        bg={"blue.400"}
        borderRadius="8px"
        my={"0.5rem"}
        w={"90%"}
        justify="space-between"
        marginInline={"auto"}
      >
        <Box>
          <Link href={`/userdashboard`}>
            <Button
              leftIcon={<ArrowLeftIcon color={"blue.400"} />}
              bg="whiteAlpha.700"
              variant="solid"
              color={"black"}
              m="1rem"
            >
              Go Back
            </Button>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default MainHead;
