import { createStore, combineReducers, applyMiddleware } from 'redux';
import asyncThunk from 'redux-async-thunk';
import appReducer from './reducers';
//import { getUser } from '../middleware';

//const middlewareEnhancer = applyMiddleware(getUser);

const rootReducer = combineReducers(
    { appState: appReducer }
);

const store = createStore(rootReducer, applyMiddleware(asyncThunk));

export default store;