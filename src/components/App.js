import React from "react";
import { Provider } from "react-redux";
import Game from "./Game/Game";
import store from "../store";

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default App;
