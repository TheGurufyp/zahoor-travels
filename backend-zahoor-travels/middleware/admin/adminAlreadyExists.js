const Admin= require("../../database/Models/Admin");



const adminAlreadyExists= async(req,res,next)=>{
    // console.log(req.body)
    if(req.body.username){
const {username}=req.body;

const result= await Admin.findOne({username:username});

if(result){
    // username found
    req.alreadyExists=true;
    req.user=result; 
}
else{
    // username not found
    req.alreadyExists=false;
    
}
next();
    }
    else{
        res.send({success:false,payload:"username not found in body"});
    }
}

module.exports=adminAlreadyExists;