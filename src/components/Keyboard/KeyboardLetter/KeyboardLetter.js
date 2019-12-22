import React from "react";
import PropTypes from "prop-types";

const KeyboardLetter = ({ letters, letter, onClick }) => {
  return (
    <span
      className={`keyboard__letter ${
        letters.includes(letter) ? "keyboard__letter_checked" : ""
      }`}
      onClick={onClick}
    >
      {letter}
    </span>
  );
};

KeyboardLetter.propTypes = {
  letters: PropTypes.array.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

KeyboardLetter.defaultProps = {
    letters: []
}


export default KeyboardLetter;
