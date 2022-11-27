const mongoose = require("mongoose");

const VoucherSchema = new mongoose.Schema(
  {
    v_id: {
      type: String,
      required: true,
    },
    agentName: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      // ref: "user",
      required: true,
    },
    arrivalDate: {
      type: String,
      // required:true
    },
    returnDate: {
      type: String,
      // required:true
    },
    arrivalTime: {
      type: String,
    },
    depDate: {
      type: String,
    },
    depTime: {
      type: String,
    },

    totalPersons: {
      type: String,
      // required:true
    },
    totalAdults: {
      type: String,
      // required:true
    },
    totalChildren: {
      type: String,
      // required:true
    },
    totalInfants: {
      type: String,
      // required:true
    },
    totalNights: {
      type: String,
      // required:true
    },
    status: {
      type: String,
      required: true,
      default: "Pending",
    },
    serviceNo: {
      type: String,
    },
    flightNo: {
      type: String,
    },
    sector: [{ type: String }],
    returnSector: [{ type: String }],

    pnr: {
      type: String,
    },
    //   mutamers:[{
    //     pilgrimName:String,
    //     passportNo:String,
    //     dob:String,
    //     ageGroup:String,
    //     childWithoutBed:String,
    //     visaNo:String,
    //     issueDate:String
    //   }],
    mutamers: [],
    ziarat: String,

    remarks: String,

    tranportationDetail: [
      {
        tdate: String,
        transportTrip: String,
        transportBy: String,
      },
    ],

    shirka: String,

    party: String,

    iata: String,
  },
  { timestamps: true }
);

var voucher = mongoose.model("voucher", VoucherSchema, "voucher");
module.exports = mongoose.model("voucher", VoucherSchema);

// var ListVoucher = new voucher({
//   v_id: "Vo_12396BC",
//   agentName: "ali hamza",
//   arrivalDate: "30 Jan 22",
//   returnDate: "3 Dec 22	",
//   totalPersons: "1",
//   totalAdults: "33",
//   totalChildren: "1",
//   totalInfants: "22",
//   totalNights: "2",
//   status: "Approved",
// });

// // save model to database
// ListVoucher.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to VoucherTable");
// });
