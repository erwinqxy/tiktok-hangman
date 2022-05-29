import App from "./App";

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import storage from 'local-storage-fallback';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './useTheme';
import style from 'styled-theming';
import './style.css';


const getBackground = style('mode', {
  light: '#EEE',
  dark: '#111'
});

const getForeground = style('mode', {
  light: '#111',
  dark: '#EEE'
});


const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;
function Index() {
    const theme = useTheme();
  
    return (
      <div> 
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div className="App">
            <App/>
          </div>
        </>
      </ThemeProvider>
      </div>
    );
  }
const rootElement = document.getElementById('root');
ReactDOM.render(<Index />, rootElement);
