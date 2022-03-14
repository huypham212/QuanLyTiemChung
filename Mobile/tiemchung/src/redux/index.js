import { createStore, combineReducers } from 'redux';
import appReducer from './reducers';

const rootReducer = combineReducers(
    { appState: appReducer }
);

const store = createStore(rootReducer)

export default store;