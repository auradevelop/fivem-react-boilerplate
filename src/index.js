import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers';
import WindowListener from './containers/WindowListener';
import store from "./reducers";
const MOUNT_NODE = document.getElementById('app');

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <WindowListener>
      <App />
    </WindowListener>
  </Provider>
);

if (module.hot) {
  module.hot.accept(['./containers/'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
