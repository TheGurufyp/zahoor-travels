const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const router = express.Router();

router.get("/adminviewvoucher", (req, res, next) => {
  const id = req.query.id;
  //   res.send({ payload: id });

  VoucherModel.findById(id)
    .then((result) => {
      //   console.log(result.status);
      if (result.status === "Approved") {
        res.send({ success: true, payload: result });
      } else {
        res.send({ success: false });
      }
      //   console.log(result);
    })
    .catch((err) => {
      res.send({ success: false, payload: "internal server error" });
    });
});

module.exports = router;
