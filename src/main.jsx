import React from 'react';
import ReactDOM from 'react-dom/client';

import {AuthProvider} from './hooks/auth';
import {FavoritesProvider} from './hooks/favorites';
import {CartProvider} from './hooks/cart';
import {OrderProvider} from './hooks/order'

import {ThemeProvider} from 'styled-components';
import theme from './styles/theme'
import GlobalStyles from './styles/global';

import { Routes } from './routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
      <FavoritesProvider>
      <CartProvider>
      <OrderProvider>
        <Routes />
      </OrderProvider>
      </CartProvider>
      </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
