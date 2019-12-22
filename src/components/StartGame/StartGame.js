import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import startGame from "../../actions/startGame";

import "./StartGame.scss";

function dispatchToProps(dispatch) {
  return {
    startGame: () => dispatch(startGame())
  };
}

const StartGame = ({ startGame }) => {
  return (
    <div className="start-game" onClick={startGame}>
      Start Game
    </div>
  );
};

StartGame.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default connect(null, dispatchToProps)(StartGame);
