const express = require("express");
const UserModel = require("../../database/Models/UserModel");
const router = express.Router();

router.post("/getAgentMautamers", (req, res, next) => {
  const userId = req.body.userToken;
  // console.log(req.body.userToken);

  UserModel.find({ token: userId })
    .then((result) => {
      // console.log(result[0].mutamers);
      const data = result[0].mutamers;
      res.send({ success: true, payload: data });
      // res.send(result[0].mutamers);
    })
    .catch((err) => {
      res.send({ success: false, payload: "error" });
    });
});

module.exports = router;
