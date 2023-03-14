
import React from 'react'
import './App.css';

import { RouterProvider } from 'react-router-dom';



import { Header } from './pages/Header/Header.js'
import Container from "@mui/material/Container";
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth.js';
import { router } from './router/router.js';

function App() {
  const dispatch = useDispatch();

  React.useEffect( () => {
    dispatch(fetchAuthMe())
  }, [])
  
  return (
    <>
      <Container maxWidth='lg'>
        <Header />
        <RouterProvider router={router} />
      </Container>   
    </>
        
    
    )
  }

export default App;
