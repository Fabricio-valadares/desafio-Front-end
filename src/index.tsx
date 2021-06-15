import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from "./styles"
import { BrowserRouter } from "react-router-dom"

import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"


const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif"
  },
  palette: {
    background: {
      default: "#000"
    },
    primary: {
      main: "#23222f"
    },
    secondary: {
      main: "#5ec48d"
    }
  }
})


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
        <Global />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
