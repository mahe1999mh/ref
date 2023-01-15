import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardItem from './CardItem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CardItem />
  </React.StrictMode>
);


