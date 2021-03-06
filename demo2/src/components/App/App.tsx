import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../store';
import { Layout } from '../Layout/Layout';
import { Routes } from '../Routes/Routes';
import "../../assets/scss/bootstrap.scss";
import "../../assets/scss/styles.scss";


export const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  </Provider>
);
