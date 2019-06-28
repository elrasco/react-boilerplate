import React from 'react';
import ReactDOM from 'react-dom';

import * as stores from './stores';
import { Provider } from 'mobx-react';

import App from './components/App';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
