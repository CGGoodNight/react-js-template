import React from 'react';
import AppRouter from "./routers";
import './App.css';

import { Provider } from 'react-redux';
import store from "./store";
import LocaleProvider from "./containers/LocaleProvider";

// 挂载mock
import "./mock/fetchVersion";

function App() {
  return (
    <Provider store={ store }>
      <LocaleProvider>
        <AppRouter />
      </LocaleProvider>
    </Provider>
  );
}

export default App;
