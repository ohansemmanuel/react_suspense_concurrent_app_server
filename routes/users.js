const express = require("express");
const util = require("util");
const { getUserListFromData } = require("../getUserListFromData");
const { data } = require("../data");
const { randomize } = require("../randomizeResponseTime");

const router = express.Router();
const setTimeoutPromise = util.promisify(setTimeout);

/* GET users listing. */
router.get("/", (req, res) => {
  setTimeoutPromise(randomize()).then(() =>
    res.send(getUserListFromData(data))
  );
});

router.get("/:id", (req, res) => {
  setTimeoutPromise(randomize()).then(() => res.send(data[req.params.id]));
});

module.exports = router;
