import { combineReducers } from 'redux-immutable';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    app: appReducer
});

export default rootReducer;
