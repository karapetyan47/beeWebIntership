import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { watchFetchUsers} from './sagas/fetch-users/fetch-user'

const sagaMiddleware = createSagaMiddleware();



const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchUsers);


export {
    store
}