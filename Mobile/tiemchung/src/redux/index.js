import { createStore, combineReducers, applyMiddleware } from 'redux';
import appReducer from './reducers';
import { getUser } from '../middleware';

const middlewareEnhancer = applyMiddleware(getUser);

const rootReducer = combineReducers(
    { appState: appReducer }
);

const store = createStore(rootReducer);

export default store;