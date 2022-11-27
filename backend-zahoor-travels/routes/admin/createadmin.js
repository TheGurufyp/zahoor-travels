const express = require("express");
const router = express.Router();
const Admin = require("../../database/Models/Admin");
const adminAlreadyExists = require("../../middleware/admin/adminAlreadyExists");
const bcrypt = require("bcrypt");
const authAdmin = require("../../middleware/admin/authAdmin");

router.post("/", [adminAlreadyExists], async (req, res) => {
  if (req.alreadyExists == false) {
    // create new admin

    if (req.body.password) {
      // password is defined in body
      const { username, password } = req.body;
      const hashPassword = bcrypt.hashSync(password, 10);

      const newAdmin = new Admin({
        username: username,
        password: hashPassword,
      });

      newAdmin
        .save()
        .then(() => {
          res.send({
            success: true,
            payload: "New Admin Created Successfully",
          });
        })
        .catch((error) => {
          res.send({ success: false, payload: "Can't save in database" });
        });
    } else {
      // password is undefined
      res.send({ success: false, payload: "password is undefined" });
    }
  } else {
    res.send({ success: false, payload: "username already exists" });
  }
});

module.exports = router;
