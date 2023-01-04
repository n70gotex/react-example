import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from "./routers";
import { RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router ={router}/>
  </React.StrictMode>
);






reportWebVitals();
