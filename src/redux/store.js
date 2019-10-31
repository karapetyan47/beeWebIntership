import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { watchFetchUsers} from './sagas/fetch-users/fetch-user'

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(reducer,applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(watchFetchUsers);

export {
    store
}