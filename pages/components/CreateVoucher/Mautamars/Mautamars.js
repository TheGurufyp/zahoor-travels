import React, { useState, useMemo, useEffect, use } from "react";
import { useTable, useGlobalFilter, useRowSelect } from "react-table";

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
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  filter,
  SelectField,
} from "@chakra-ui/react";
import Styles from "./Mautamars.module.css";
import { Checkbox } from "./Checkbox";
const Mautamars = ({ listMautamers, getData, sendData }) => {
  useEffect(() => {
    console.log("render M");
  }, []);
  const [SearchField, setSearchField] = useState("");

  const HandleSearch = (event) => {
    let Search = event.target.value;
    setSearchField(Search);
  };
  const columns = useMemo(
    () => [
      {
        Header: "SR#",
        accessor: (d) => d["SrNo."],
      },
      {
        Header: "PAX NAME",
        accessor: "Pilgrim Name",
      },
      {
        Header: "PASSPORT #",
        accessor: (d) => d["Passport No."],
      },
      {
        Header: "GROUP NAME(LICENSE)",
        accessor: "Group Name",
      },
      {
        Header: "AGENT CODE",
        accessor: " ",
      },
      {
        Header: "Visa",
      },
    ],
    []
  );
  const data = useMemo(() => listMautamers, [listMautamers]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter } = state;
  return (
    <>
      <Center
        fontSize={"2rem"}
        fontWeight="semibold"
        bg={"gray.200"}
        // my="1.5rem"
      >
        Mautmamer's Information
      </Center>
      <Flex justify={"end"} my="10px" width={"95%"}>
        <Input
          type={"search"}
          placeholder="search"
          border={"1px"}
          borderColor="blue.400"
          width={"30%"}
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </Flex>
      <Box overflow="scroll" maxHeight="400px">
        <table {...getTableProps()} className={Styles.table}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th className={Styles.th} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr className={Styles.tr} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className={Styles.td} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <pre>
          <code>
            {useEffect(() => {
              getData(selectedFlatRows);
              // console.log(selectedFlatRows);
            }, [selectedFlatRows, SearchField])}
          </code>
        </pre>
      </Box>
    </>
  );
};

export default Mautamars;
