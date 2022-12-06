const express = require("express");
const UserVoucher = require("../../database/Models/UserModel");
const router = express.Router();

router.post("/indexVoucher", (req, res, next) => {
  const id2 = req.body.token;
  UserVoucher.find({ token: id2 })
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
