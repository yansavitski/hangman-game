import { ACTIONS } from ".";

const URL = "/api/v1/best-scores";

export default () => async dispatch => {
  dispatch({
    type: ACTIONS.FETCH_SCORES,
    isLoading: true
  });

  const response = await fetch(URL);
  const data = await response.json();

  dispatch({
    type: ACTIONS.FETCH_SCORES,
    isLoading: false,
    scores: data.scores,
    error: data.error
  });
};
