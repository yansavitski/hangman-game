import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fetchScores from "../../actions/fetchScores";

import "./BestScores.scss";

function stateToProps(state) {
  const {
    scores: { data: scores },
    game: { score }
  } = state;

  return {
    scores,
    score
  };
}

function dispatchToProps(dispatch) {
  return {
    fetchScores: () => dispatch(fetchScores())
  };
}

const BestScores = ({ fetchScores, scores, score }) => {
  useEffect(() => {
    fetchScores();
  }, [fetchScores, score]);

  if (!scores || !scores.length) {
    return null;
  }

  return (
    <div className="best-scores">
      <p className="best-scores__title">Best Scores</p>
      {scores.map((score, index) => (
        <span key={index} className="best-scores__record">
          {score}
        </span>
      ))}
    </div>
  );
};

BestScores.propTypes = {
  fetchScores: PropTypes.func.isRequired,
  scores: PropTypes.array,
  score: PropTypes.number
};

BestScores.defaultProps = {
  score: 0
};

export default connect(stateToProps, dispatchToProps)(BestScores);
