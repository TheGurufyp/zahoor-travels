const Admin= require("../../database/Models/Admin");
const jwt = require('jsonwebtoken');

const privateKey="hunfaisagoodboy"; /// come from env in future

const authAdmin=async(req,res,next)=>{


    const token=req.headers.token;
if(token){

    try {
        const tokenDecoded = jwt.verify(token, privateKey);
        req.tokenDecoded=tokenDecoded;
       const user=await Admin.findOne({username:tokenDecoded.username},"username token");
       if(user?.token === token){
        req.success=true;
        next();
       }
       else{
        res.send({success:false,payload:"Authentication failed"});
       }
    } catch (error) {
        res.send({success:false,payload:"Internal server error"});
    }



}
else{
    res.send({success:false,payload:"token not found"});
}






}


module.exports=authAdmin;