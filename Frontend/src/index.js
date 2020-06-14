import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";
import rootSaga from "./redux/rootSaga";
import Logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";

const SagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(Logger, SagaMiddleware));
SagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
