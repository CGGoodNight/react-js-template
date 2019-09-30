import homeAction from "./constants";
const initState = {
  count: 0
}

export default (state=initState, action) => {
  switch(action.type) {
    case homeAction.ADD_COUNT: {
      const newState = JSON.parse(JSON.stringify(state));
      newState.count = newState.count + 1;
      return newState
    }
    default: return state;
  }
}