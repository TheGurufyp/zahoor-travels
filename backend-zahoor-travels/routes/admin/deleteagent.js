const express = require("express");
const User = require("../../database/Models/UserModel");
const router = express.Router();
const authAdmin=require("../../middleware/admin/authAdmin")

router.post("/", authAdmin ,(req, res) => {

    const user_id=req.body.user_id;
    if(user_id)
   { User.findOneAndDelete({_id:user_id})
    .then((data) => {
    if(data){
        res.send({ success: true, payload: "deleted successfully" });
    }
       else{
        res.send({ success: false, payload: "Already deleted" });
       }
      
    })
    .catch((err) => {
      res.send({ success: false,payload:"internal server error" });
    });}
    else{
        res.send({ success: false,payload:"body is empty" });
    }
});

module.exports = router;
