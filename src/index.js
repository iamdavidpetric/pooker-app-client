import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import Application from './view/application';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>,
);
