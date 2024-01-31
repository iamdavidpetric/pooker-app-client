import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import sagas from 'Sagas';

import { localConfig } from './config';
import apiMiddleware from './apiMiddleware';
import rootReducer, { history } from './rootReducer';

let middlewares = [];
const loggerOptions = {
  collapsed: true,
  duration: true,
  timestamp: true,
};

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger(loggerOptions);
const routerMiddleware = createRouterMiddleware(history);

middlewares.push(apiMiddleware);
middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware);
middlewares.push(loggerMiddleware);

const storeEnhancers = applyMiddleware(...middlewares);
const persistedReducers = persistReducer(localConfig, rootReducer);
const store = createStore(persistedReducers, storeEnhancers);

const persistor = persistStore(store, {}, () => {});

sagaMiddleware.run(sagas);

export default () => ({ persistor, store });
