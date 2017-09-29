import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import RootRoute from 'RootRoute';
import Store from 'Store';
import '../scss/main.scss';

const renderApp = NextApp => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <NextApp history={browserHistory} routes={RootRoute} />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(Router);

if (module.hot) {
  module.hot.accept(Router, () => {
    renderApp(Router);
  });
}
