import { combineReducers } from "redux";
import scores from "./scores";
import game from "./game";

export default combineReducers({
  scores,
  game
});
