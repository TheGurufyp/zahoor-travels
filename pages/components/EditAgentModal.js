import React, { useContext, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Box,Button,ButtonGroup,FormControl,FormLabel,Input,Text,Highlight,useToast
  } from '@chakra-ui/react'
  import { Form, useFormik } from "formik";
  import { userContext } from "../../context/userState";
  import axios from "axios";
  import { useRouter } from "next/router";

function EditAgentModal({children,user_id}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
 const [apiInProgress, setapiInProgress] = useState(false);
  const toast = useToast();
  const { user, setuser,token, settoken } = useContext(userContext);
  const router = useRouter();



  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      setapiInProgress(true);
      
      axios
        .post(`${process.env.NEXT_PUBLIC_HOST}/updateagent`, {
          username: values.username,
          password: values.password,
          user_id:user_id
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
            onClose();
           
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
   
   <Box as='span' onClick={onOpen}>{children}</Box>

<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <form onSubmit={formik.handleSubmit}>
    <ModalHeader>Edit Agent</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
     <Text mb="10px" borderRadius={"8px"} backgroundColor="yellow.200" p="5px" px="10px">
     <Highlight query='Note:' styles={{ py: '1', fontWeight: 'Bold' ,color:"red" }}>
     Note: If you don&#39;t enter username or password it will took the previous one.
    </Highlight> </Text>
    <FormControl >
              <FormLabel>Username</FormLabel>
              <Input  placeholder='Enter New Username'  name="username"   onChange={formik.handleChange}
                value={formik.values.username}/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Enter New Password'  name="password"
                
                onChange={formik.handleChange}
                value={formik.values.password}/>
            </FormControl>

   
    </ModalBody>
    <ModalFooter>
      <Button  colorScheme={"blue"} type="submit"  spinnerPlacement="end"
                isLoading={apiInProgress}
                loadingText="Loading">Update</Button>
    </ModalFooter>
    </form>
  </ModalContent>
</Modal>
   
   
   
   
   </>
  )
}

export default EditAgentModal