import { createStore, applyMiddleware } from "redux";
import { reducer } from "redux/reducer";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { watchFetchUsers } from "redux/sagas/fetch-users";
import { watchFetchStaffs } from "redux/sagas/fetch-staffs";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchFetchUsers);
sagaMiddleware.run(watchFetchStaffs);

export { store };
