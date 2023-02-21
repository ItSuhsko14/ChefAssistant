
import React from 'react'
import './App.css';

import {  createBrowserRouter,
          RouterProvider
           } from 'react-router-dom'
import GaetAll from './GaetAll.js'
import Login from './pages/Login/Login.js'
import ErrorPage from './pages/Error/ErrorPage.js'
import Registration from './pages/Registration/Registration.js'
import Navbar from './pages/Navbar/Navbar.js'
import { Home } from './pages/Home/home'
import { Header } from './pages/Header/Header.js'
import Container from "@mui/material/Container";




function App() {

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
    },
    {
      path: "navbar",
      element: <Navbar />,
      errorElement: <ErrorPage />
    }
  ])

  return (
    <>
      <Header />
      <Container>
        <RouterProvider router={router} />
      </Container>   
    </>
        
    
    )
  }

export default App;
