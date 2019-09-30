import languageAction from "./constants";
const initState = {
  language: "zh"
}

export default (state=initState, action) => {
  switch(action.type) {
    case languageAction.SWITCH_LANGUAGE: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.language = action.lang;
      return newState;
    }
    default: return state;
  }
}