const User= require("../../database/Models/UserModel");


const userAlreadyExists= async(req,res,next)=>{
    // console.log(req.body)
    if(req.body.username){
const {username}=req.body;

const result= await User.findOne({username:username},"username password");

if(result){
    // username found
   
    req.userAlreadyExists=true;
    req.user=result; 
}
else{
    // username not found
   
    req.userAlreadyExists=false;
    
}
next();
    }
    else{
        res.send({success:false,payload:"username not found in body"});
    }
}

module.exports=userAlreadyExists;