const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/adminviewvoucher", (req, res, next) => {
  const id2 = req.query.id;
 


  VoucherModel.find({ _id: id2 })
    .then((result) => {
   
      if (result) {
        res.send({ success: true, payload: result });
      } else {
        res.send({ success: false });
      }
     
    })
    .catch((err) => {
      res.send({ success: false, payload: "internal server error" });
    });
});

module.exports = router;
