import { Center, Heading, Box, Flex, Button } from "@chakra-ui/react";
import { Cookies, useCookies } from "react-cookie";

import Link from "next/link";
import Router from "next/router";
import { React, useEffect } from "react";

import { useState } from "react";

import axios, { Axios } from "axios";
import Ziarat from "../components/CreateVoucher/Ziarat";
import Mautamars from "../components/CreateVoucher/Mautamars/Mautamars";
import Flight from "../components/CreateVoucher/FlightInfo/Flight";
import Transportation from "../components/CreateVoucher/Transportation";
import MainHead from "../components/CreateVoucher/MainHead";

const editVoucher = (props) => {
  const items = props.allData.payload;
  const FormInputFields = {
    depardate: "",
    departime: "",
    sector1: "",
    sector2: "",
    flight1: "",
    flight2: "",
    pnr1: "xyz",
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
    remark: "hi",
  };

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
  // console.log(FieldValue);
  const handleInputField2 = (index, event) => {
    let data = [...transport];
    data[index][event.target.name] = event.target.value;
    settransport(data);
  };

  const addFields = () => {
    let newfield = {
      date: "",
      from_to: "",
      type: "",
    };
    settransport([...transport, newfield]);
  };

  const removeFields = (index) => {
    let data = [...transport];
    data.splice(index, 1);
    settransport(data);
  };

  // console.log("data ", FieldValue, transport);
  useEffect(() => {
    setcountDate(
      FieldValue.returndate.split("-")[2] -
        FieldValue.depardate.split("-")[2] -
        1
    );
  }, [FieldValue]);

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
      });
  }, []);

  var uniq = "TA" + "-" + new Date().getTime();

  const handleOnsubmission = (e) => {
    e.preventDefault();
    // console.log(transport, FieldValue, MautamarsRowData);
    // url: `${process.env.NEXT_PUBLIC_HOST}/createVoucher`,
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
  }, [MautamarsRowData, FieldValue, transport]);
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
          <Flight
            handleInput={handleInputField}
            date={countDate}
            data={FieldValue}
          />

          <Mautamars
            listMautamers={MautamarsList}
            getData={setMautamarsRowData}
            sendData={MautamarsRowData}
          />
          <Transportation
            handleInput={handleInputField2}
            FieldValue={transport}
            add={addFields}
            remove={removeFields}
          />
        </Flex>
        <Ziarat handleInput={handleInputField} data={FieldValue} />
      </form>
    </>
  );
};

export default editVoucher;

export async function getServerSideProps(context) {
  // console.log(context.query);
  const id = context.query.id;
  let data = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/userdashboard/editVoucher?id=${id}`
  );
  let allData = await data.json();
  console.log(allData);

  return {
    props: { allData }, // will be passed to the page component as props
  };
}
