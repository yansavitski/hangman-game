import { ACTIONS } from "../actions";

export default (state = {}, { type, isLoading, error, scores }) => {
  switch (type) {
    case ACTIONS.FETCH_SCORES:
      return {
        isLoading,
        error,
        data: scores
      };
    default:
      return state;
  }
};
