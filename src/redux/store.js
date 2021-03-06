import { createStore, applyMiddleware } from "redux";
import { reducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import setAuterizationToken from "../utils/setAutorizationToken";

import rootSaga from "redux/sagas";

const mode = process.env.REACT_APP_STAGE;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
let store = null;

if (mode === "dev") {
  store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
} else {
  store = createStore(reducer, applyMiddleware(sagaMiddleware));
}

if (localStorage.jwtToken) {
  setAuterizationToken(localStorage.jwtToken);
}

sagaMiddleware.run(rootSaga);

export { store };
