import languageAction from "./constants";
import immutable from 'immutable';

const initState = immutable.fromJS({
  language: "zh"
})

export default (state=initState, action) => {
  switch(action.type) {
    case languageAction.SWITCH_LANGUAGE: {
      return state.update('language', () => action.lang);
    }
    default: return state;
  }
}