import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { Provider } from 'react-redux';
import { Route  } from 'react-router-dom';
import { ConnectedRouter,  } from 'react-router-redux';
import history from './utils/configureHistory';
import configureStore from './utils/configureStore';
import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.css';

const preloadedState = {

}


let store = configureStore(preloadedState,history);
let rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route component={App}/>
    </ConnectedRouter>
  </Provider>,
  rootElement
);
