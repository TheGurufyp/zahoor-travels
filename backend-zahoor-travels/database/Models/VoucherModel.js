const mongoose = require("mongoose");

const VoucherSchema = new mongoose.Schema(
  {
    v_id: {
      type: String,
      // required:true
    },
    agentName: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      // ref: "user",
      required: true,
    },
    agentId:{
      type:mongoose.SchemaTypes.ObjectId,
      ref:"user"
    },
    arrivalDate: {
      type: String,
      // required:true
    },
    returnDate: {
      type: String,
      // required:true
    },
    returnTime: {
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
    DepFilght1: { type: String },
    DepFilght2: { type: String },
    returnFlight1: { type: String },
    returnFlight2: { type: String },

    Depsector1: { type: String },
    Depsector2: { type: String },
    returnSector1: { type: String },
    returnSector2: { type: String },
    countNight: { type: String },

    Deppnr: {
      type: String,
    },
    returnpnr: {
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

    tranportationDetail: [],

    shirka: String,

    party: String,

    iata: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("vouchers", VoucherSchema);

// // save model to database
// ListVoucher.save(function (err, book) {
//   if (err) return console.error(err);
//   console.log(book.name + " saved to VoucherTable");
// });
