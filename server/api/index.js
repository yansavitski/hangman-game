const express = require("express");
const router = express.Router();

router.get("/api/v1/start-game", (req, res) => res.send('Test'));

module.exports = router;