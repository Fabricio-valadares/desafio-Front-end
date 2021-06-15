import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from "./styles"
import { BrowserRouter } from "react-router-dom"

import { CssBaseline, ThemeProvider, createMuiTheme } from "@material-ui/core"


const theme = createMuiTheme({
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

