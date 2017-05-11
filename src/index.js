import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let baseUrl = 'https://newsapi.org/v1/sources'
let newsUrl = 'https://newsapi.org/v1/articles'

ReactDOM.render(
  <App baseUrl={baseUrl} newsUrl={newsUrl}/>,
  document.getElementById('root')
);
