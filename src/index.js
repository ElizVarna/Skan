import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
import './fonts/Ferry.otf';
import './fonts/Inter-Regular.otf';

import { Provider } from 'react-redux';
import store from './storage/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);