import React from 'react'
import {
    AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,useDisclosure,Button,
  AlertDialogCloseButton,Box
  } from '@chakra-ui/react'
function ConfirmDialog({children}) {
    console.log(children);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef()
  return (
    <>
   
   <Box as='span' onClick={onOpen}>{children}</Box>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Delete Agent?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to delete the agent?
          </AlertDialogBody>
          <AlertDialogFooter>
           
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
    
    </>
  )
}

export default ConfirmDialog