import React from "react";
import GallowTree from "../GallowTree/GallowTree";
import BestScores from "../BestScores/BestScores";
import StartGame from "../StartGame/StartGame";
import Keyboard from "../Keyboard/Keyboard";
import { connect } from "react-redux";
import WordInput from "../WordInput/WordInput";
import GameResult from "../GameResult/GameResult";
import { GAME_STATUS } from "../../enums";

import "./Game.scss";

function stateToProps(state) {
  const { status, mistakesCount, score, word } = state.game;

  return {
    status,
    mistakesCount,
    score,
    word
  };
}

const Game = ({ status, mistakesCount, score, word }) => (
  <main className="game">
    <h1 className="game__title">Hangman Game</h1>

    <div className="game__main-content">
      {[GAME_STATUS.LOSE, GAME_STATUS.WIN].includes(status) && (
        <GameResult result={status} />
      )}

      <div className="game__gallow-tree">
        <GallowTree stage={mistakesCount} />
      </div>

      <div className="game__scores">
        <BestScores />
        <p className="game__scores__user">Your Score {score}</p>
      </div>
    </div>

    {status === GAME_STATUS.IN_PROCESS ? (
      <WordInput word={word} />
    ) : (
      <StartGame />
    )}

    <div
      className={`game__keyboard ${
        status !== GAME_STATUS.IN_PROCESS ? "game__keyboard_blocked" : ""
      }`}
    >
      <Keyboard />
    </div>
  </main>
);

Game.defaultProps = {
  score: 0,
  mistakesCount: 5
};

export default connect(stateToProps)(Game);
