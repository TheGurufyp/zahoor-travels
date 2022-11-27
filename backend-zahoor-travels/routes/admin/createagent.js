const express = require("express");
const router = express.Router();
const User = require("../../database/Models/UserModel");
const userAlreadyExists = require("../../middleware/user/userAlreadyExist");
const bcrypt = require("bcrypt");
const authAdmin = require("../../middleware/admin/authAdmin");

router.post("/", [userAlreadyExists,authAdmin], async (req, res) => {
  if (req.userAlreadyExists == false) {
    // create new agent

    if (req.body.password) {
      // password is defined in body
      const { username, password } = req.body;
      const hashPassword = bcrypt.hashSync(password, 10);

      const newUser = new User({
        username: username,
        password: hashPassword,
      });

      newUser.save()
        .then(() => {
          res.send({
            success: true,
            payload: "New Agent Created Successfully",
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
