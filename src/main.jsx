import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider} from 'styled-components';
import theme from './styles/theme'
import GlobalStyles from './styles/global';

import { SingIn } from './pages/SingIn';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SingIn />
    </ThemeProvider>
  </React.StrictMode>,
)
