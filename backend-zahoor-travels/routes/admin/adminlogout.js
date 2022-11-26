const express = require('express')
const router = express.Router()
const Admin= require("../../database/Models/Admin");

const jwt = require('jsonwebtoken');


router.post("/",async(req,res)=>{


    const token=req.headers.token;
if(token){

    try {
        const tokenDecoded = jwt.verify(token, privateKey);
        req.tokenDecoded=tokenDecoded;
       await Admin.updateOne({username:tokenDecoded.username}, { $unset: { token: 1 } });
       
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