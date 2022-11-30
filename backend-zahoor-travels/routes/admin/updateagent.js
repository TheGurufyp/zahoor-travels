const express = require("express");
const User = require("../../database/Models/UserModel");
const router = express.Router();
const authAdmin=require("../../middleware/admin/authAdmin")
const bcrypt = require("bcrypt");

router.post("/", authAdmin ,async(req, res) => {
    const user_id=req.body.user_id;
    if(user_id)
    { 
   

    const {username,password}=req.body;
try {
    
    
    if(!username && !password)
    {
        res.send({ success: false, payload: "nothing updated" });
    }

    else if(username && password){

        const hashPassword = bcrypt.hashSync(password, 10);
      await User.findByIdAndUpdate({_id:user_id},{$set:{
            username:username,
            password:hashPassword
        }})
        res.send({ success: true, payload: "updated username and password" });
    }

  else  if(username && !password){
        await User.findByIdAndUpdate({_id:user_id},{$set:{
            username:username
        }})
        res.send({ success: true, payload: "updated username" });
    }

    else if(!username && password){
        const hashPassword = bcrypt.hashSync(password, 10);
        await User.findByIdAndUpdate({_id:user_id},{$set:{
            password:hashPassword
        }})
        res.send({ success: true, payload: "updated password" });
    }
else
   { res.send({ success: true, payload: "updated successfully" });}
} catch (error) {
    res.send({ success: false, payload: "Can't Update" });
}
    
   
   
   }

   
});

module.exports = router;
