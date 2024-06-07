import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from 'redux-devtools-extension';
import index from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(index, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga)

export default store;