const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/getAdminVouchers", (req, res, next) => {
  VoucherModel.find({}).sort({createdAt:-1})
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
