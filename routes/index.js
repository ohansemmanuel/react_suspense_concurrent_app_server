var express = require("express");
var router = express.Router();
var { data } = require("../data");

router.get("/", (req, res, next) => {
  // return single default user
  const firstUserId = Object.keys(data)[0];
  res.redirect(`users/${firstUserId}`);
});

module.exports = router;
