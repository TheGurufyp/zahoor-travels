import React from 'react'
import {Box, Button, Flex, Heading, Image, Input} from "@chakra-ui/react"

function Adminlogin() {
  return (
    <>
    
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
#input-box{
  /* border: 1px solid rebeccapurple; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items:baseline */
  width: 80%;
  margin: 0px auto;
}
#input-box label{
  /* border: red 1px solid; */
  font-size: 1.1rem;
  font-weight: 600;
  /* margin-left: 10px; */
  color: #6b6d7c;
margin-bottom: 8px;
width: fit-content;
}
#input-box input{

  padding: 10px 10px;
color: rgb(0, 0, 0);
font-weight:normal;
letter-spacing: 0.5px;
outline: none;
border: 2px solid rgb(182, 182, 182);
font-size: 1rem;
border-radius: 4px;
width: 100%;
transition: border 0.3s;
}

/* #border::before{
  content: '';
  position: absolute;
 border: 2px solid transparent;
  width: 100%;
  height: 100%;
  
} */


/* #border{
border: 1px solid #b9b9b9;
position: relative;
border-radius: 4px;
z-index: 5;
} */
/* #border input{
  width: 99%;
} */



/* #border:hover::before {
  border: 2px solid #000B49;
  border-radius: 4px;
 
}
#border:hover{
  border: 1px solid transparent;
} */

input[type="text"]{
  margin-bottom: 20px;
  /* border: 2px solid blue; */
}

#input-box input:focus{
  border: 2px solid #000B49;
}

#forgot-password{
/* border: 1px solid red; */
width: 50%;
margin: 0px auto;
text-align: center;
font-weight: x-large;
cursor: pointer;
padding-top: 20px;
}
#forgot-password a{
  text-decoration: none;
  color: #000B49;

}
#btn-1{
  /* border: 1px solid black; */
  width: 60%;
  margin: 0px auto;
  margin-top: 30px;
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

<form id="login-page">

    
       <div id="heading">


        <Heading color={"blue.400"}>Admin Login</Heading>
      </div>
      <div id="input-box">
        <label for="Email">Username</label>
       
       <Input mb="10px" type="text" name="username" variant={"filled"}  />
     
        <label for="Password">Password</label>
       
        <Input type="password" name="password" variant={"filled"}/>
     
      </div>
      {/* <div id="forgot-password">
        <a href="#">Forgot Password ?</a>
      </div> */}
      <div id="btn-1">
           <Button mt="50px" w="85%" h="50px" display={"block"} mx="auto" colorScheme={"blue"}>Login</Button>
       </div>
     
    
<Box mt={"50px"} alignItems={"center"} display="flex" justifyContent={"center"}>
     <Image src="/images/hnsoft.jpg" alt=""/>

     
</Box>

</form>
</div>












    </Flex>
    
    
    
    
    </>
  )
}

export default Adminlogin