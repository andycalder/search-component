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
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';

library.add(
  faSearch,
  faChevronLeft,
  faTimes
);

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
    font-family: 'Prompt', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Map />
    <SearchBar />
  </React.StrictMode>,
  document.getElementById('root')
);
