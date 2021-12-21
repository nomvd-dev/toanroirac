import {applyMiddleware, combineReducers, createStore} from 'redux';
import {GoiYReducer} from './GoiYReducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    GoiYReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))