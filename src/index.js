import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';
import './sass/custom.scss';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import pageReducer  from './Components/Regestration/features/page';
import userReducer from './Components/Regestration/features/user'
import { HelmetProvider } from 'react-helmet-async';

const store = configureStore({
  reducer: {
    page: pageReducer,
    user: userReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <HelmetProvider>
        <App />
        </HelmetProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
