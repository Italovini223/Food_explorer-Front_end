import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider} from 'styled-components';
import theme from './styles/theme'
import GlobalStyles from './styles/global';

import { New } from './pages/New';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </React.StrictMode>,
)
