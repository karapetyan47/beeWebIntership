import { createStore, applyMiddleware } from "redux";
import { reducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import rootSaga from "redux/sagas";

const mode = process.env.NODE_ENV;
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
let store = null;
console.log(mode);

if (mode === "development") {
  store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
} else {
  store = createStore(reducer, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

export { store };
