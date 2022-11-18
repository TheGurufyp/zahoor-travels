import React,{useState} from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,Box,Button,ButtonGroup,FormControl,FormLabel,Input,Text,Highlight, color
  } from '@chakra-ui/react'

function EditAgentModal({children}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
   <>
   
   <Box as='span' onClick={onOpen}>{children}</Box>

<Modal onClose={onClose} isOpen={isOpen} isCentered>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Edit Agent</ModalHeader>
    <ModalCloseButton />
    <ModalBody >
     <Text mb="10px" borderRadius={"8px"} backgroundColor="yellow.200" p="5px" px="10px">
     <Highlight query='Note:' styles={{ py: '1', fontWeight: 'Bold' ,color:"red" }}>
     Note: If you don't enter username or password it will took the previous one.
    </Highlight> </Text>
    <FormControl>
              <FormLabel>Username</FormLabel>
              <Input  placeholder='Enter New Username' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Enter New Password' />
            </FormControl>

   
    </ModalBody>
    <ModalFooter>
      <Button  colorScheme={"blue"}>Update</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
   
   
   
   
   </>
  )
}

export default EditAgentModal