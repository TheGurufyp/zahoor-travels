const express = require('express')
const router = express.Router()
const User = require("../../database/Models/UserModel");
const authAdmin = require('../../middleware/admin/authAdmin');





router.post("/",authAdmin,async(req,res)=>{ // auth will apply in future

  if(req.success)

 { const {mutamers,username}=req.body;

   User.findOneAndUpdate({username:username},{$set:{mutamers:mutamers}},function(err,data){
if(err){   

    res.send({success:false,payload:"something went wronge"});
}
    else{
        res.send({success:true,payload:"file uploaded successfully"});
    }
  });

  res.send({success:false,payload:"Internal server error"});

}
else{
  res.send({success:false,payload:"Authentication failed"});
}
    
})










module.exports = router