import React from 'react';
import ReactDOM from 'react-dom/client';
import {   
          
          
          createBrowserRouter,
          RouterProvider
           } from 'react-router-dom'
import './index.css';

import reportWebVitals from './reportWebVitals';
import GaetAll from './GaetAll.js'
import Login from './pages/Login/login.js'
import ErrorPage from './pages/Error/ErrorPage.js'
import Registration from './pages/Registration/Registration.js'

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>This is router</div>,
      errorElement: <ErrorPage />
    },
    {
      path: "login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
      path: "getAll",
      element: <GaetAll />,
      errorElement: <ErrorPage />
    },
    {
      path: "registration",
      element: <Registration />,
      errorElement: <ErrorPage />
    }
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
