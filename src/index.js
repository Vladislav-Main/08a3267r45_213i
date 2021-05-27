import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import App from './components/app/App';
import store from './redux/store';
import ErrorBoundary from './components/error-boundary';

const app = (
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Provider>
);

render(app, document.getElementById('root'));
