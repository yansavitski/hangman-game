const { schema: Game, GAME_STATUS } = require("../models/game");
const DICTIONARY = ["3dhubs", "marvin", "print", "filament", "order", "layer"];

class GameService {
  async create(res) {
    try {
      let game = new Game();

      game.word = this.generateWord();

      game = await game.save();

      return res.status(200).json({
        id: game._id,
        score: game.score,
        status: game.status,
        mistakes_count: game.mistakes_count,
        word: new Array(game.word.length)
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async setLetter(res, { id, letter }) {
    try {
      if (!id || !letter) {
        return res.status(400).json({ error: "Invalid inputs" });
      }

      const game = await Game.findById(id);

      if (game.status !== GAME_STATUS.IN_PROCESS) {
        return res.status(400).json({ error: "Game already ended" });
      }

      if (game.letters.includes(letter)) {
        return res
          .status(400)
          .json({ error: `Letter "${letter}" already been checked` });
      }

      game.letters.push(letter);

      const word = game.word.split("").reduce((res, letterInWord, index) => {
        if (game.letters.includes(letterInWord)) {
          res[index] = letterInWord;
        }

        return res;
      }, new Array(game.word.length));

      if (!game.word.includes(letter)) {
        game.mistakes_count++;
      }

      this.checkEndGame(game);

      await game.save();

      return res.status(200).json({
        id: game._id,
        score: game.score,
        status: game.status,
        mistakes_count: game.mistakes_count,
        word
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getBestScores(res) {
    try {
      const games = await Game.find(null, "score", {
        sort: { score: -1 },
        order: "DESC",
        limit: 10
      });

      const scores = games.reduce((result, game) => {
        if (game.score) {
          result.push(game.score);
        }

        return result;
      }, []);

      return res.status(200).json({
        scores
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  checkEndGame(game) {
    if (game.mistakes_count >= 5) {
      game.status = GAME_STATUS.LOSE;
    } else if (
      game.word
        .split("")
        .every(letterInWord => game.letters.includes(letterInWord))
    ) {
      game.status = GAME_STATUS.WIN;
      game.score = game.word.length * 100 - 50 * game.mistakes_count;
    }

    return game;
  }

  generateWord() {
    const length = DICTIONARY.length;
    const randomIndex = Math.round(Math.random() * length);

    return DICTIONARY[randomIndex];
  }
}

module.exports = GameService;
