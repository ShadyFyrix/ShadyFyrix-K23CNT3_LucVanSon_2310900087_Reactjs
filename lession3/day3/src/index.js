import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LvsApp from './LvsApp';
import reportWebVitals from './reportWebVitals';

const lvsRoot = ReactDOM.createRoot(document.getElementById('lvsRoot'));
lvsRoot.render(
  <React.StrictMode>
    <LvsApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
