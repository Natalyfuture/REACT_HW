import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterApp from './RouterApp';
import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer } from './TASK_2/Components/redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
/* import App from './App';
import reportWebVitals from './reportWebVitals'; */


const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Router>
    <Provider store={store}>
     <RouterApp />
    </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
