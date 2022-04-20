import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-dom';
ReactDOM.render(
  <React.StrictMode>
    <Provider value={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);