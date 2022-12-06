const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/", (req, res) => {

  VoucherModel.find({status:"Pending"},"v_id agentName arrivalDate returnDate totalPersons totalAdults totalChildren totalInfants totalNights status")
    .then((data) => {
      if (!data) {
       
        res.send({ success: false, payload: "Error While fething data" });
      } else {
       
        res.send({ success: true, payload: data });
      }
    })
    .catch((err) => {
      res.send({ success: false,payload:"internal server error" });
    });
});

module.exports = router;
