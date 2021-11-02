import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './Auth';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#311b92',
    },
    secondary: {
      main: '#673ab7',
    },
  },
});


ReactDOM.render(
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </AuthContextProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

