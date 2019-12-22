import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Keyboard.scss";
import { connect } from "react-redux";
import checkLetter from "../../actions/checkLetter";
import KeyboardLetter from "./KeyboardLetter/KeyboardLetter";

const KEYBOARD_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
const NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function stateToProps(state) {
  const { id, letters } = state.game;

  return {
    id,
    letters
  };
}

function dispatchToProps(dispatch) {
  return {
    checkLetter: ({ id, letter }) => dispatch(checkLetter({ id, letter }))
  };
}

class Keyboard extends PureComponent {
  onClick = event => {
    const { checkLetter, id, letters } = this.props;
    const letter = event.target.textContent;

    if (!letters.includes(letter)) {
      checkLetter({ id, letter });
    }
  };

  render() {
    const { letters } = this.props;

    return (
      <div className="keyboard">
        <div className="keyboard__numbers">
          {NUMBERS.map(number => (
            <KeyboardLetter
              key={number}
              letters={letters}
              letter={number}
              onClick={this.onClick}
            />
          ))}
        </div>

        <div className="keyboard__letters">
          {KEYBOARD_LETTERS.map(letter => (
            <KeyboardLetter
              key={letter}
              letters={letters}
              letter={letter}
              onClick={this.onClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

Keyboard.propTypes = {
  id: PropTypes.string,
  checkLetter: PropTypes.func.isRequired,
  letters: PropTypes.array.isRequired
};

Keyboard.defaultProps = {
  letters: []
};

export default connect(stateToProps, dispatchToProps)(Keyboard);
