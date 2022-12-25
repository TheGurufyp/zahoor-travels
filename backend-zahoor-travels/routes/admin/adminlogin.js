const express = require("express");
const router = express.Router();
const Admin = require("../../database/Models/Admin");
const adminAlreadyExists = require("../../middleware/admin/adminAlreadyExists");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const privateKey = "hunfaisagoodboy"; // will be in dotenv in future

router.post("/", adminAlreadyExists, async (req, res) => {
  if (req.alreadyExists === true) {
    // user exists in database

    if (req.body.password) {
      // password is defined in body
      const password = req.body.password;

      const match = await bcrypt.compare(password, req.user.password);

      if (match) {
        // password matches
        const token = jwt.sign(
          { username: req.user.username, _id: req.user._id },
          privateKey
        );

        Admin.findOneAndUpdate(
          { username: req.user.username },
          { $set: { token: token } },
          function (error, data) {
            if (error) {
              res.send({ success: false, payload: "Internal server error" });
            } else {
              res.send({
                success: true,
                payload: {
                  token,
                  username: req.user.username,
                  isAdmin: true,
                },
              });
            }
          }
        );
      } else {
        // password not matches
        res.send({ success: false, payload: "Invalid Password" });
      }
    } else {
      // password is undefined
      res.send({ success: false, payload: "password is undefined" });
    }
  } else {
    res.send({ success: false, payload: "username doesn't exists" });
  }
});

module.exports = router;
