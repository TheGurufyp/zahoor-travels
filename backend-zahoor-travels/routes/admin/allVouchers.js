const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/getAdminVouchers", (req, res, next) => {
  VoucherModel.find({})
    .then((data) => {
      if (!data) {
        // console.log('empty');
        res.send({ success: false, payload: "Error While fething data" });
      } else {
        // res.send('localhost:3000/')
        // console.log("data : ", data);
        res.send({ success: true, payload: data });
      }
    })
    .catch((err) => {
      res.send({ success: false,payload:"internal server error" });
    });
});

module.exports = router;
