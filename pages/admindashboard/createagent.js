<<<<<<< Updated upstream
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Box, Button, Flex, Heading, Image, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import axios from "axios";

function Createagent() {
=======
import React,{useState,useContext} from 'react'
import {Box, Button, Flex, Heading, Image, Input,useToast} from "@chakra-ui/react"
import { useFormik } from "formik";
import axios from "axios";
import { userContext } from "../../context/userState";




function Createagent() {

  const { user, setuser,token } = useContext(userContext);
>>>>>>> Stashed changes
  const [apiInProgress, setapiInProgress] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setapiInProgress(true);
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST}/createagent`, {
          username: values.username,
          password: values.password,
        },{headers:{token:token}})
        .then(function (response) {
          let data = response.data;
          if (data.success) {
            setapiInProgress(false);
            toast({
              title: "SUCCESS",
              position: "top",
              description: data.payload,
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          } else {
            setapiInProgress(false);
            toast({
              title: "ERROR",
              position: "top",
              description: data.payload,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        })
        .catch(function (error) {
          setapiInProgress(false);
          toast({
            title: error.message,
            position: "top",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    },
  });

  return (
    <>
<<<<<<< Updated upstream
      <Flex h="100vh" border={"5px"} borderColor="red" minH="600px">
        <style jsx>{`
          #container {
            /* border: 2px solid violet; */
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif;
            /* background-color: rgba(0, 0, 0, 0.048); */
            /* margin-top: 20%; */
          }
          #login-page {
            box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%),
              0 6px 20px 0 rgb(0 0 0 / 19%);
            /* border: 2px solid rgba(0, 0, 0, 0.356); */
            /* height: 80vh; */
            width: 30%;
            background-color: white;
            margin: 30px 0px;
            height: 550px;
          }
          #heading {
            /* border: 1px solid black; */
            margin: 50px 50px;
            text-align: center;
            font-size: xx-large;
            font-weight: bold;
            color: #000b49;
          }
=======
    
    <Flex h="100vh" border={"5px"} borderColor="red" minH="600px">

    <style jsx>{`
        #container {
  /* border: 2px solid violet; */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  /* background-color: rgba(0, 0, 0, 0.048); */
  /* margin-top: 20%; */

}
#login-page{
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
/* border: 2px solid rgba(0, 0, 0, 0.356); */
/* height: 80vh; */
width: 30%;
background-color: white;
margin: 30px 0px;
height: 550px;
}
#heading{
  /* border: 1px solid black; */
  margin: 50px 50px;
  text-align: center;
  font-size: xx-large;
  font-weight: bold;
  color: #000B49;
}
#input-box {
  /* border: 1px solid rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:baseline */
  width: 80%;
  margin: 0px auto;
}
#input-box label {
  /* border: red 1px solid; */
  font-size: 1.1rem;
  font-weight: 600;
  /* margin-left: 10px; */
  color: #6b6d7c;
  margin-bottom: 8px;
  width: fit-content;
}
#btn-1 {
  //  border: 1px solid black;
  width: 100%;
  margin: 0px auto;
  margin-top: 30px;
  text-align: center;
  /* margin-bottom: 300px; */
}
#btn-1 button{
  /* border: 1px solid yellow; */
  width: 100%;
  border: 2px solid #000B49;
  padding: 20px 20px;
  border-radius: 30px;
  font-weight:500;
  background-color: #000B49;
  color: rgb(255, 255, 255);
  font-size: 1rem;
}

#btn-1 button:hover{
  background-color: white;
  color: #000B49;
 
  
}

#hnsoft{
  /* border: 1px solid red; */
  text-align: center;
  margin-top: 60px;
}

@media only screen and (max-width: 600px)
{
  
  #login-page{
      /* border: 1px solid black; */
      width: 100%;
      border: none;
      box-shadow: none;
      /* height: 100vh; */
  }
 
}
@media only screen and (min-width: 600px ) AND (max-width: 768px){
  #container{
      background-color: white;
  }
  #login-page{
      /* height: 100vh; */
      width: 80%;
      border: none;
      box-shadow: none;
      
  }
}
@media only screen and (min-width: 769px ) AND (max-width: 1023px)
{
 
  #login-page{
      width: 50%;
      /* height: 90vh; */
  }
 
}
@media only screen and (min-width: 1024px )
{
  #login-page{
      width: 50%;
      /* height: 90vh; */
      max-width:600px ;
  }
  
}
      `}</style>

    <div id="container">
>>>>>>> Stashed changes

          #btn-1 {
            /* border: 1px solid black; */
            width: 60%;
            margin: 0px auto;
            margin-top: 30px;
            /* margin-bottom: 300px; */
          }
          #btn-1 button {
            /* border: 1px solid yellow; */
            width: 100%;
            border: 2px solid #000b49;
            padding: 20px 20px;
            border-radius: 30px;
            font-weight: 500;
            background-color: #000b49;
            color: rgb(255, 255, 255);
            font-size: 1rem;
          }

          #btn-1 button:hover {
            background-color: white;
            color: #000b49;
          }

          #hnsoft {
            /* border: 1px solid red; */
            text-align: center;
            margin-top: 60px;
          }

<<<<<<< Updated upstream
          @media only screen and (max-width: 600px) {
            #login-page {
              /* border: 1px solid black; */
              width: 100%;
              border: none;
              box-shadow: none;
              /* height: 100vh; */
            }
          }
          @media only screen and (min-width: 600px) AND (max-width: 768px) {
            #container {
              background-color: white;
            }
            #login-page {
              /* height: 100vh; */
              width: 80%;
              border: none;
              box-shadow: none;
            }
          }
          @media only screen and (min-width: 769px) AND (max-width: 1023px) {
            #login-page {
              width: 50%;
              /* height: 90vh; */
            }
          }
          @media only screen and (min-width: 1024px) {
            #login-page {
              width: 50%;
              /* height: 90vh; */
              max-width: 600px;
            }
          }
        `}</style>

        <div id="container">
          <form id="login-page" onSubmit={formik.handleSubmit}>
            <div id="heading">
              <Heading color={"blue.400"}>Create Agent</Heading>
            </div>
            <div id="input-box">
              <label htmlFor="Email">Username</label>

              <Input
                mb="10px"
                type="text"
                name="username"
                variant={"filled"}
                onChange={formik.handleChange}
                value={formik.values.username}
              />

              <label htmlFor="Password">Password</label>

              <Input
                type="password"
                name="password"
                variant={"filled"}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <div id="btn-1">
              <Button
                mt="50px"
                w="85%"
                h="50px"
                display={"block"}
                mx="auto"
                colorScheme={"blue"}
                type="submit"
                spinnerPlacement="end"
                isLoading={apiInProgress}
                loadingText="Loading"
              >
                Create
              </Button>
            </div>

            <Box
              mt={"50px"}
              alignItems={"center"}
              display="flex"
              justifyContent={"center"}
            >
              <Image src="/images/hnsoft.jpg" alt="" />
            </Box>
          </form>
        </div>
      </Flex>
=======
        <Heading color={"blue.400"}>Create Agent</Heading>
      </div>
      <div id="input-box">
        <label htmlFor="Email">Username</label>
       
       <Input mb="10px" type="text" name="username" variant={"filled"}   onChange={formik.handleChange}
                value={formik.values.username}/>
     
        <label htmlFor="Password">Password</label>
       
        <Input type="password" name="password" variant={"filled"}   onChange={formik.handleChange}
                value={formik.values.password}/>
     
      </div>
     
      <div id="btn-1">
           <Button  w="55%"
                h="50px"
                  mx="auto" colorScheme={"blue"}  type="submit"
                spinnerPlacement="end"
                isLoading={apiInProgress}
              
                loadingText="Loading">Create</Button>
       </div>
     
    
<Box mt={"50px"} alignItems={"center"} display="flex" justifyContent={"center"}>
     <Image src="/images/hnsoft.jpg" alt=""/>

     
</Box>

</form>
</div>












    </Flex>
    
    
    
    
>>>>>>> Stashed changes
    </>
  );
}

export default Createagent;

export async function getServerSideProps(context) {
  const token = context.req.cookies.token;
  if (!token) {
    return {
      redirect: {
        destination: "/adminlogin",
        permanent: false,
      },
    };
  }
  let responseFromServer;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_HOST}/adminVerifyToken`,
      {},
      { headers: { token: token } }
    );

    if (response.data.success) {
      responseFromServer = { success: true };
    } else {
      return {
        redirect: {
          destination: "/adminlogin",
          permanent: false,
        },
      };
    }
  } catch (error) {
    responseFromServer = { success: false };
  }

  return {
    props: { responseFromServer },
  };
}
