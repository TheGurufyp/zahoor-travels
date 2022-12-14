const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.post("/getUserVouchers", (req, res, next) => {
  // console.log(req.body.id);
  const id = req.body.id;
  VoucherModel.find({ agentId: id }).sort({createdAt:-1})
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
      res.send({ success: false, payload: "internal server error" });
    });
});

module.exports = router;
