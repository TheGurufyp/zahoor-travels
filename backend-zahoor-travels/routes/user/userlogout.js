const express = require('express')
const router = express.Router()
const User= require("../../database/Models/UserModel");

const jwt = require('jsonwebtoken');
const privateKey = "hunfaisagoodboy"; // will be in dotenv in future

router.post("/",async(req,res)=>{


    const token=req.headers.token;
if(token){

    try {
        const tokenDecoded = jwt.verify(token, privateKey);
       
       await User.updateOne({username:tokenDecoded.username}, { $unset: { token: 1 } });
       
       res.send({success:true,payload:"logout successful"})
      
      
    } catch (error) {
        res.send({success:false,payload:"internal server error"});
    }



}
else{
    res.send({success:false,payload:"token not found"});
}






})










module.exports = router