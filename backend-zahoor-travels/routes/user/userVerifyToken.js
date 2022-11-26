const express = require('express')
const router = express.Router()
const authUser=require("../../middleware/user/authUser")

router.post("/", authUser, async (req, res) => {

   if(req.success){
    res.send({success:true,payload:"Authentication successful"})
   }
   else{
    res.send({success:false,payload:"Authentication failed"})
   }


});










module.exports = router