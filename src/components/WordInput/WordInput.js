import React from "react";
import PropTypes from "prop-types";

import "./WordInput.scss";

const WordInput = ({ word }) => {
  return (
    <div className="word-input">
      {word.map((letter, index) => (
        <div key={index} className="word-input__letter">
          {letter || "_"}
        </div>
      ))}
    </div>
  );
};

WordInput.propTypes = {
  word: PropTypes.array.isRequired
};

WordInput.defaultProps = {
  word: []
};

export default WordInput;
