const express = require("express");
const User = require("../../database/Models/UserModel");
const router = express.Router();
const authAdmin = require("../../middleware/admin/authAdmin");

router.get("/", (req, res) => {
  User.find({}, "username")
    .then((data) => {
      // console.log(data);
      res.send({ success: true, payload: data });
    })
    .catch((err) => {
      res.send({ success: false, payload: "internal server error" });
    });
});

module.exports = router;
