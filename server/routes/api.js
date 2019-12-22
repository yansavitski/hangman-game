const express = require("express");
const router = express.Router();

const GameService = require("../services/gameService");

router.get("/api/v1/start-game", async (req, res) => {
  const gameService = new GameService();

  return await gameService.create(res);
});

router.get("/api/v1/check-letter", async (req, res) => {
  const { id, letter } = req.query;
  const gameService = new GameService();

  return await gameService.setLetter(res, { id, letter });
});

router.get("/api/v1/best-scores", async (req, res) => {
  const gameService = new GameService();

  return await gameService.getBestScores(res);
});

module.exports = router;
