import React from "react";
import PropTypes from "prop-types";
import { GAME_STATUS } from "../../enums";

import "./GameResult.scss";

const DATA = {
  [GAME_STATUS.WIN]: {
    cssClass: "game__result_win",
    title: "You Win"
  },
  [GAME_STATUS.LOSE]: {
    cssClass: "game__result_lose",
    title: "You Lose"
  }
};

const GameResult = ({ result }) => {
  const data = DATA[result];

  return <div className={`game__result ${data.cssClass}`}>{data.title}</div>;
};

GameResult.propTypes = {
  result: PropTypes.oneOf([GAME_STATUS.WIN, GAME_STATUS.LOSE])
};

export default GameResult;
