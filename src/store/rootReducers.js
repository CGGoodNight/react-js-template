import { combineReducers } from 'redux-immutable'
import homeReducer from '../containers/Home/reducer';
import languageReducer from '../containers/LocaleProvider/reducer';

const rootReducers = combineReducers({
    homeReducer,
    languageReducer
});

export default rootReducers;