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
function ConfirmDialog({children,head,desc,clickedYes}) {
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
          <AlertDialogHeader>{head}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {desc}
          </AlertDialogBody>
          <AlertDialogFooter>
           
            <Button onClick={clickedYes} colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
    
    </>
  )
}

export default ConfirmDialog