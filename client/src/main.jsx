import React from 'react';
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import { store } from './redux/store.js';
import { persistor } from './redux/store';
import { stripePromise } from './utils/stripe.js';

import App from './App.jsx'
import Spinner from './components/spinner/spinner.component.jsx';

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner/>} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
