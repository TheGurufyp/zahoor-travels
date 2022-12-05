const express = require("express");
// const VoucherModel = require("../../database/Models/VoucherModel");
const Voucher = require("../../database/Models/VoucherModel");
const router = express.Router();

router.post("/createVoucher", (req, res, next) => {
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
  } = req.body;
  console.log(req.body);
  const getVouchers = new Voucher({
    Depsector1: sector1,
    Depsector2: sector2,
    returnsector1: returnsector1,
    returnsector2: returnsector2,
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
  });

  getVouchers.save(function (err, book) {
    if (err) return console.error(err);
    console.log(book.name + " Saved");
    res.redirect("/");
  });
  // let id = "638c6d21f0f4eed3df8f178b";
  // Voucher.find().then((result) => {
  //   console.log(result[0].tranportationDetail);
  // });
});

module.exports = router;
