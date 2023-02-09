import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import ErrorBoundary from '@Components/common/ErrorBoundary/index';
import App from './app';
import Loader from './components/common/Loader';
import configureStore from './store';
import history from './utils/history';
import './assets/css/index.css';

const { persistor, store } = configureStore();

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <ErrorBoundary>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </ErrorBoundary>
      </PersistGate>
    </Provider>,
    document.getElementById('app'),
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default;
    render(NextApp);
  });
}
