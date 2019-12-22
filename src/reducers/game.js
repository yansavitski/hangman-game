import { ACTIONS } from "../actions";

export default (
  state = {},
  { type, isLoading, id, word, error, mistakes, score, status, letter }
) => {
  switch (type) {
    case ACTIONS.START_GAME:
      return {
        id,
        isLoading,
        word,
        error,
        status,
        score: 0
      };
    case ACTIONS.CHECK_LETTER:
      if (error) {
        return {...state, error};
      }
      
      return {
        ...state,
        isLoading,
        ...(!isLoading
          ? {
              mistakes,
              word,
              score,
              status,
              letters: [...(state.letters || []), letter]
            }
          : {})
      };
    default:
      return state;
  }
};
