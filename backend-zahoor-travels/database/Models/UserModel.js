const mongoose=require('mongoose');



const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
password:{
    type:String,
    required:true
},
// mutamers:[{
//     pilgrimName:String,
//     passportNo:String,
//     dob:String,
//     ageGroup:String,
//     childWithoutBed:String,
//     visaNo:String,
//     issueDate:String
//   }],

token:{
    type:String
},
  mutamers:[],


   
  });

  module.exports=  mongoose.model("user", UserSchema);

