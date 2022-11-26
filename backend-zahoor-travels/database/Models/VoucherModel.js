const mongoose=require('mongoose');



const VoucherSchema = new mongoose.Schema({
   
    v_id:{
        type:String,
        required:true
    },
    agentName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    arrivalDate:{
        type:String,
        // required:true
    }
    ,
    returnDate:{
        type:String,
        // required:true

    },
    arrivalTime:{
        type:String,

    },
    depDate:{
        type:String
    },
    depTime:{
        type:String,
    },

    totalPersons:{
        type:String,
        // required:true
    },
    totalAdults:{
        type:String,
        // required:true
    },
    totalChildren:{
        type:String,
        // required:true
    },
    totalInfants:{
        type:String,
        // required:true
    },
    totalNights:{
        type:String,
        // required:true
    },
    status:{
        type:String,
        required:true,
        default:"Pending"
    },
    serviceNo:{
        type:String,

    },
    flightNo:{
        type:String,
    },
      sector:[{type:String}],
      returnSector:[{type:String}],
    
      pnr:{
        type:String
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
    mutamers:[],
      ziarat:String,

      remarks:String,

      tranportationDetail:[{
        tdate:String,
        transportTrip:String,
        transportBy:String
      }],

      shirka:String,

      party:String,

      iata:String,
      


   
  },{timestamps:true});

  module.exports=  mongoose.model("voucher", VoucherSchema);

