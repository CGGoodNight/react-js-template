import { createStore, applyMiddleware } from 'redux';
import rootReducers from "./rootReducers";
// thunk
// import thunk from 'redux-thunk';

//saga
// import createSagaMiddleware from 'redux-saga';
// import mySaga from './rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

// saga
// const sagaMiddleware = createSagaMiddleware();

const enhancers = process.env.NODE_ENV === "development" ? composeWithDevTools(
  // thunk
  // applyMiddleware(thunk)
  // saga
  // applyMiddleware(sagaMiddleware)
  applyMiddleware()
  // other store enhancers if any
)
:
applyMiddleware();
// thunk
// applyMiddleware(thunk);
// saga
// applyMiddleware(sagaMiddleware)

const store = createStore(
  rootReducers, 
  enhancers
);

// saga
// sagaMiddleware.run(mySaga);

export default store;