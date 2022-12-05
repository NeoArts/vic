import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div style={{background: "#F1F1F1", width: "100%"}}>
    <App />
  </div>
);
