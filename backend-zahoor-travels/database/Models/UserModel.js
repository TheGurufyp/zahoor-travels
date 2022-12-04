const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
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

  token: {
    type: String,
  },
  mutamers: [],
});
var user = mongoose.model("user", UserSchema, "users");
module.exports = mongoose.model("user", UserSchema);

// var listuser = new user({
//   username: "nabeel",
//   password: "1122",
// });

// // save model to database
// listuser.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to usertable");
// });
