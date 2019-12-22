import { ACTIONS } from ".";

const URL = "api/v1/start-game";

export default () => async dispatch => {
  dispatch({
    type: ACTIONS.START_GAME,
    isLoading: true
  });

  const response = await fetch(URL);
  const data = await response.json();

  dispatch({
    type: ACTIONS.START_GAME,
    isLoading: false,
    id: data.id,
    status: data.status,
    word: data.word,
    mistakes: data.mistakes_count,
    score: data.score,
    error: data.error
  });
};
