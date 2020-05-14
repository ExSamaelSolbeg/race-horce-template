import { createStore, combineReducers } from 'redux';

import screenReducer from './reducers/screen';

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any }
}

const reducers = combineReducers({
    screen: screenReducer
});

export default createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
