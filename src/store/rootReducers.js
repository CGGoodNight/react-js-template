import { combineReducers } from 'redux'; // 连接reducers
import homeReducer from '../containers/Home/reducer';

const rootReducers = combineReducers({
    homeReducer
});

export default rootReducers;