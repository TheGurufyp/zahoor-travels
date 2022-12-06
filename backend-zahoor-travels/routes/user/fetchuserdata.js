const express = require("express");
// const VoucherModel = require("../../database/Models/VoucherModel");
const Voucher = require("../../database/Models/VoucherModel");
const router = express.Router();
const User = require("../../database/Models/UserModel");

router.post("/createVoucher", async (req, res, next) => {
  //   console.log(req.body);
  const {
    depardate,
    departime,
    sector1,
    sector2,
    flight1,
    flight2,
    arrivedate,
    arrivetime,
    pnr1,
    returndate,
    returntime,
    returnsector1,
    returnsector2,
    returnflight1,
    returnflight2,
    pnr2,
    shirka,
    party,
    iata,
    service,
    radio,
    remark,
    transportation,
    agent,
    mautamers,
    totalAdult,
    totalInfant,
    totalChild,
    v_id,
    totalNight,
    agentId,
    totalPersons,
  } = req.body;
  // console.log(req.body);
  const getVouchers = new Voucher({
    Depsector1: sector1,
    Depsector2: sector2,
    returnSector1: returnsector1,
    returnSector2: returnsector2,
    Deppnr: pnr1,
    returnpnr: pnr2,
    DepFilght1: flight1,
    DepFilght2: flight2,
    returnFlight1: returnflight1,
    returnFlight2: returnflight2,
    depDate: depardate,
    depTime: departime,
    arrivalDate: arrivedate,
    arrivalTime: arrivetime,
    returnDate: returndate,
    returnTime: returntime,
    serviceNo: service,
    ziarat: radio,
    remarks: remark,
    shirka: shirka,
    party: party,
    iata: iata,
    tranportationDetail: transportation,
    agentName: agent,
    mutamers: mautamers,
    v_id: v_id,
    totalAdults: totalAdult,
    totalChildren: totalChild,
    totalInfants: totalInfant,
    totalNights: totalNight,
    agentId: agentId,
    totalPersons: totalPersons,
  });
  const user_id = agentId;
  getVouchers
    .save()
    .then()
    .catch((err) => {
      console.log(err);
    });
  let no = 100;

  try {
    await User.findByIdAndUpdate(
      { _id: user_id },
      {
        $inc: {
          totalPendingVocuhers: +1,
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
