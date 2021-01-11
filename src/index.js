import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Helmet } from "react-helmet";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import icon from './Routes/imgs/tab_logo.png';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
    <meta charSet="utf-8" />
    <title>Amnick WebDev</title>
    <link rel="shortcut icon" href={icon} />
  </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
