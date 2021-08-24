import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faChevronLeft,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from './components/SearchBar';

library.add(
  faSearch,
  faChevronLeft,
  faTimes
);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Prompt', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchBar />
  </React.StrictMode>,
  document.getElementById('root')
);
