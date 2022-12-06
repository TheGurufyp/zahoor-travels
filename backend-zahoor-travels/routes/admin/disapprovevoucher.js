const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const User = require("../../database/Models/UserModel");
const router = express.Router();

router.post("/", async(req, res, next) => {

    const {vid,user_id} =req.body;
    if(!vid)
    {res.send({ success: false,payload:"id not found in body" });}

    try {
        
    let data=  await  VoucherModel.findById({_id:vid},"status agentId")
         
     data= await data.populate("agentId","-mutamers -password -token");
  
await   data.updateOne({status:"Cancelled"}) ;

await User.findByIdAndUpdate({_id:user_id},
    {
        $inc:{
    totalPendingVocuhers:-1,
}
})

              res.send({ success: true, payload: "Voucher Approved" });
    } catch (error) {
        console.log(error)
        res.send({ success: false, payload: "Error While fething data" });
        
    }

        
   
});

module.exports = router;
