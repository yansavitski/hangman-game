const mongoose = require("mongoose");
const GAME_STATUS = {
  IN_PROCESS: "in process",
  LOSE: "lose",
  WIN: "win"
};

const gameSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  letters: {
    type: Array,
    required: true,
    default: []
  },
  mistakes_count: {
    type: Number,
    required: true,
    default: 0
  },
  status: {
    type: String,
    required: true,
    default: GAME_STATUS.IN_PROCESS
  },
  score: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports.schema = mongoose.model("Game", gameSchema);
module.exports.GAME_STATUS = GAME_STATUS;
