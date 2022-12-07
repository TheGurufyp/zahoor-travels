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
function ConfirmDialog({children,head,desc,clickedYes,user_id,id,agentId}) {
    
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
           
            <Button onClick={()=>{ onClose();clickedYes(id,agentId)}} colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
    
    </>
  )
}

export default ConfirmDialog