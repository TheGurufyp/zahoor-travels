import { Box, Button, Flex, Input,Select,ButtonGroup, Stack,useMediaQuery  } from '@chakra-ui/react'
import { Search2Icon} from '@chakra-ui/icons'
import React from 'react'

function VoucherSearch() {
    const [isLargerThan648] = useMediaQuery('(min-width: 648px)')

  return (
   <>
   <Flex borderRadius={"8px"} border={"1px"} borderColor="gray.300"  p="10px"  bg="blue.500">
    <Stack w="100%"   direction={isLargerThan648?"row":"column"}>
<Box minW="121px" w={isLargerThan648?"170px":"100%"} >
    <Input  _focus={{bg:"white"}} variant={"filled"} type={"search"} placeholder='Voucher #'/>
</Box>

<Box   w={isLargerThan648?"40%":"100%"}>
<Select  _focus={{bg:"white"}} variant={"filled"}  placeholder='- Agents -'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>


<Box  w={isLargerThan648?"50%":"100%"} minW={"170px"}>
    <Input type={"search"}  _focus={{bg:"white"}} variant={"filled"} placeholder='Search Keywords'/>
</Box>

<Box>
<ButtonGroup  spacing='1'>
  <Button  leftIcon={<Search2Icon/>} colorScheme='yellow'>Search</Button>
  <Button colorScheme={"red"}>Reset</Button>
</ButtonGroup>
</Box>
</Stack>
   </Flex>
   
   
   
   
   
   
   </>
  )
}

export default VoucherSearch