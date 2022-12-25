const express = require("express");
// const VoucherModel = require("../../database/Models/VoucherModel");
const Voucher = require("../../database/Models/VoucherModel");
const router = express.Router();
const User = require("../../database/Models/UserModel");
const { redirect } = require("next/dist/server/api-utils");
const moment = require("moment");

router.post("/createVoucher", async (req, res, next) => {
  // console.log(req.body);
  const {
    FieldValue,
    MautamarsRowData2,
    transport,
    agentId,
    agent,
    v_id,
    totalNights,
  } = req.body;
  // console.log(FieldValue, transport, MautamarsRowData2);

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
    totalAdult,
    totalInfant,
    totalChild,
    totalNight,
    totalPersons,
  } = FieldValue;
  // console.log(MautamarsRowData2);
  console.log(moment().format());
  let totalChilds = 0;
  let totalInfants = 0;
  let totalAdults = 0;

  MautamarsRowData2.map((item) => {
    const realAge = parseInt(item.Age.trim().split(/\s+/));
    // console.log(realAge);
    if (realAge >= 4 && realAge <= 10) {
      // console.log("child");
      totalChilds++;
    } else if (realAge > 10) {
      // console.log("adults");
      totalAdults++;
    } else {
      // console.log("infant");
      totalInfants++;
    }
    // console.log(realAge);
  });
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
    tranportationDetail: transport,
    agentName: agent,
    mutamers: MautamarsRowData2,
    v_id: v_id,
    totalAdults: totalAdults,
    totalChildren: totalChilds,
    totalInfants: totalInfants,
    totalNights: totalNights,
    totalPersons: totalAdults + totalChilds + totalInfants,
    agentId: agentId,
  });
  const user_id = agentId;
  getVouchers
    .save()
    .then((result) => {
      // res.redirect("/");
    })
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
