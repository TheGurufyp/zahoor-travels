import { Center, Heading, Box, Flex, Button } from "@chakra-ui/react";
import { Cookies, useCookies } from "react-cookie";

import Link from "next/link";
import Router from "next/router";
import { React, useEffect, useMemo } from "react";

import { useState } from "react";

import axios, { Axios } from "axios";
import Ziarat from "../components/CreateVoucher/Ziarat";
import Mautamars from "../components/CreateVoucher/Mautamars/Mautamars";
import Flight from "../components/CreateVoucher/FlightInfo/Flight";
import Transportation from "../components/CreateVoucher/Transportation";
import MainHead from "../components/CreateVoucher/MainHead";

const FormInputFields = {
  depardate: "",
  departime: "",
  sector1: "",
  sector2: "",
  flight1: "",
  flight2: "",
  pnr1: "",
  arrivedate: "",
  arrivetime: "",
  returndate: "",
  returntime: "",
  returnsector1: "",
  returnsector2: "",
  returnflight1: "",
  returnflight2: "",
  pnr2: "",
  shirka: "",
  iata: "",
  party: "",
  service: "",
  radio: "",
  remark: "",
};

const Create = (props) => {
  const [MautamarsList, setMautamarsList] = useState([]);
  const [MautamarsRowData, setMautamarsRowData] = useState([]);
  let MautamarsRowData2 = [];
  const [FieldValue, setFieldValue] = useState(FormInputFields);
  const [transport, settransport] = useState([
    {
      date: "",
      from_to: "",
      type: "",
    },
  ]);

  const [countDate, setcountDate] = useState(0);

  const handleInputField = (event) => {
    const { name, value } = event.target;
    setFieldValue({ ...FieldValue, [name]: value });
  };

  const handleInputField2 = (index, event) => {
    let data = [...transport];
    data[index][event.target.name] = event.target.value;
    settransport(data);
  };
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
    // arr.push(list);
  };

  const addFields = () => {
    let newfield = {
      date: "",
      from_to: "",
      type: "",
    };
    settransport([...transport, newfield]);
  };
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { date: "", from_to: "", types: "" }]);
  };

  const removeFields = (index) => {
    let data = [...transport];
    data.splice(index, 1);
    settransport(data);
  };

  useEffect(() => {
    setcountDate(
      FieldValue.returndate.split("-")[2] -
        FieldValue.depardate.split("-")[2] -
        1
    );
  }, [FieldValue]);

  const content = useMemo(
    () => (
      <>
        <Mautamars
          listMautamers={MautamarsList}
          getData={setMautamarsRowData}
          sendData={MautamarsRowData}
        />
      </>
    ),
    [MautamarsList]
  );

  const [cookie, setCookie] = useCookies(["username"]);

  // Simple POST request with a JSON body using fetch

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userToken: cookie.token }),
    };
    fetch(`${process.env.NEXT_PUBLIC_HOST}/getAgentMautamers`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.payload);
        setMautamarsList(data.payload);
        let temp = data.payload.map((m, i) => {
          return { ...m, checked: false };
        });
      });
  }, []);
  // console.log(MautamarsList);

  var uniq = "TA" + "-" + new Date().getTime();

  const handleOnsubmission = (e) => {
    e.preventDefault();
    // console.log(transport, FieldValue, MautamarsRowData2);
    axios
      .post(`${process.env.NEXT_PUBLIC_HOST}/createVoucher`, {
        FieldValue,
        transport,
        MautamarsRowData2,
        agent: cookie.username,
        v_id: uniq,
        agentId: cookie.id,

        totalNights: countDate,
      })
      .then(function (response) {
        Router.push("/userdashboard");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    MautamarsRowData.map((item) => {
      // MautamarsRowData2(item.original);

      MautamarsRowData2.push(item.original);
    });
  });

  const changeDateHandler = (event) => {
    setdate((current) => [...current, event.target.value]);
  };

  const flight = useMemo(
    () => (
      <>
        <Flight handleInput={handleInputField} date={countDate} />
      </>
    ),
    [FieldValue]
  );

  return (
    <>
      <MainHead />
      <form onSubmit={handleOnsubmission}>
        <Flex
          direction={"column"}
          border="1px"
          borderColor={"gray.300"}
          width={"90%"}
          marginInline="auto"
        >
          <Box>{flight}</Box>

          <Box>{content}</Box>

          <Transportation
            handleInput={handleInputField2}
            FieldValue={transport}
            add={addFields}
            remove={removeFields}
          />
        </Flex>
        <Ziarat handleInput={handleInputField} />
      </form>
    </>
  );
};
export default Create;
