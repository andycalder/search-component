import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faChevronLeft,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(
  faSearch,
  faChevronLeft,
  faTimes
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
