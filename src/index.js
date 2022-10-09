import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/Counter/App';
import { App } from './components/ColorPicker/App';
// import { App } from './components/Dropdown/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
