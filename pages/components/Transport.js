import {
  Center,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  ButtonGroup,
  Divider,
  Input,
  Select,
  Option,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { React } from "react";
import { ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
const Transport = () => {
  return (
    <>
      <div className="box">
        <input
          name="firstName"
          placeholder="Enter First Name"
          value={x.firstName}
          onChange={(e) => handleInputChange(e, i)}
        />
        <input
          className="ml10"
          name="lastName"
          placeholder="Enter Last Name"
          value={x.lastName}
          onChange={(e) => handleInputChange(e, i)}
        />
        <div className="btn-box">
          {inputList.length !== 1 && (
            <button className="mr10" onClick={() => handleRemoveClick(i)}>
              Remove
            </button>
          )}
          {inputList.length - 1 === i && (
            <button onClick={handleAddClick}>Add</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Transport;
