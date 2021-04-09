import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Routes } from "./routes/Routes";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import "./index.css";

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
