const express = require("express");
const UserModel = require("../../database/Models/UserModel");
const router = express.Router();

router.post("/getAgentMautamers", (req, res, next) => {
  const userId = req.body.userToken;
  // console.log(req.body.userToken);

  UserModel.find({ token: userId })
    .then((result) => {
      // console.log(result[0].mutamers);
      res.send(result[0].mutamers);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
