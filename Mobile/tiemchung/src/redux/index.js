import { createStore, combineReducers, applyMiddleware } from 'redux';
import asyncThunk from 'redux-async-thunk';
import appReducer from './reducers';

const rootReducer = combineReducers(
    { appState: appReducer }
);

const store = createStore(rootReducer, applyMiddleware(asyncThunk));

export default store;