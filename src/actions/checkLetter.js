import { ACTIONS } from ".";

const URL = "api/v1/check-letter";

export default ({ id, letter }) => async dispatch => {
  dispatch({
    type: ACTIONS.CHECK_LETTER,
    isLoading: true
  });

  const response = await fetch(`${URL}?id=${id}&letter=${letter}`);
  const data = await response.json();

  dispatch({
    type: ACTIONS.CHECK_LETTER,
    isLoading: false,
    status: data.status,
    word: data.word,
    letter: letter,
    mistakes: data.mistakes_count,
    score: data.score,
    error: data.error
  });
};
