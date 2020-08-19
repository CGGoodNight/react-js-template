import homeAction from "./constants";
import immutable from 'immutable';

const initState = immutable.fromJS({
  count: 0
})

export default (state=initState, action) => {
  switch(action.type) {
    case homeAction.ADD_COUNT: {
      return state.update('count', count => count + 1);
    }
    default: return state;
  }
}