const express = require("express");
const util = require("util");
const { randomize } = require("../randomizeResponseTime");

const router = express.Router();
const setTimeoutPromise = util.promisify(setTimeout);

router.get("/:word", (req, res) => {
  setTimeoutPromise(randomize()).then(() =>
    res.send({ [req.params.word]: req.params.word })
  );
});

module.exports = router;
