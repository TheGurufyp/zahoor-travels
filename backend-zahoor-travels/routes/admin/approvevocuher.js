const express = require("express");
const VoucherModel = require("../../database/Models/VoucherModel");
const User = require("../../database/Models/UserModel");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { vid, user_id } = req.body;
  if (!vid) {
    res.send({ success: false, payload: "id not found in body" });
  }

  try {
    let data = await VoucherModel.findById(
      { _id: vid },
      "status agentId totalPersons totalAdults totalChildren totalInfants"
    );

    data = await data.populate("agentId", "-mutamers -password -token");
    //  console.log(data.agentId.totalAdults)
    //    await   data.updateOne({status:"Approved",$inc:{"agentId.totalApprovedVouchers":1}}) ;

    // await VoucherModel.findOneAndUpdate({_id:vid},{status:"Approved"});

    await data.updateOne({ status: "Approved" });

    await User.findByIdAndUpdate(
      { _id: user_id },
      {
        $inc: {
          totalVouchers: 1,
          totalApprovedVouchers: 1,
          totalPendingVocuhers: -1,
        },
        $set: {
          totalAdults: data.agentId.totalAdults + data.totalAdults,
          totalInfants: data.agentId.totalInfants + data.totalInfants,
          totalChild: data.agentId.totalChild + data.totalChildren,
          totalPersons: data.agentId.totalPersons + data.totalPersons,
        },
      }
    );

    res.send({ success: true, payload: "Voucher Approved" });
  } catch (error) {
    console.log(error);
    res.send({ success: false, payload: "Error While fething data" });
  }
});

module.exports = router;
