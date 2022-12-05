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
  token: {
    type: String,
  },
  mutamers: [],

  totalVouchers:{
   type: Number,
   default:0
  },
  totalPendingVocuhers:{
    type: Number,
    default:0
   },
  totalApprovedVouchers:{
    type: Number,
    default:0
   },
  totalAdults:{
    type: Number,
    default:0
   },
  totalInfants:{
    type: Number,
    default:0
   },
  totalChild:{
    type: Number,
    default:0
   },
   totalPersons:{
    type: Number,
    default:0
   }
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
