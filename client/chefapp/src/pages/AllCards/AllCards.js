import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { CardPreview } from './CardPreview.js';

function GaetAll() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const baseUrl = 'http://localhost:5000/cards/';
  
  useEffect( () => {
    fetch(baseUrl)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(true);
          setItems(result);
        },

        (error) => {
          setIsLoading(false);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoading) {
    return (
        <Box component="span" sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 1,
          height: 400,
         }}>
            <CircularProgress />
        </Box>
      )
  } else {
      
      return (
        <>
          <Container>
            <Grid container spacing={2}>
              
              {items.map( item => (
                  <Grid xs={4}>    
                    <CardPreview 
                      name={item.name} 
                      text={item.text} 
                      link={item._id} 
                      cardId={item._id} 
                    />
                  </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )
  }
}

export default GaetAll;