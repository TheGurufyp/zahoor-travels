const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/adminviewvoucher", (req, res, next) => {
  const id2 = req.query.id;
  //   res.send({ payload: id });
  console.log(id2);

  VoucherModel.find({ _id: id2 })
    .then((result) => {
      // console.log(result);
      if (result) {
        res.send({ success: true, payload: result });
      } else {
        res.send({ success: false });
      }
      console.log(result);
    })
    .catch((err) => {
      res.send({ success: false, payload: "internal server error" });
    });
});

module.exports = router;
