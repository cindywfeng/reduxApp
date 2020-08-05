import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import dogsReducer from "./reducers/dogReducer"
import { devToolsEnhancer } from "redux-devtools-extension";
import App from './App';



const store = createStore(dogsReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);