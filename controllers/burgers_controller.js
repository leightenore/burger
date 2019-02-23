const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burger, function(result) {
    console.log(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let id = req.params.id;

  burger.update(true, id, function(result) {
    console.log(result);
  });
});

module.exports = router;