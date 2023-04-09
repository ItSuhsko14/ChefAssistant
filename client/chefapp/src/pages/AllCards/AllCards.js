import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { CardPreview } from './CardPreview.js';
import { fetchCards } from '../../redux/slices/cards.js';
import axios from '../../axios.js';

function GaetAll() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const baseUrl = 'http://localhost:5000/cards/';
  
  const dispatch = useDispatch();
  const { cards } = useSelector(state => state.cards);
  console.log(cards);
  const isCardsLoading = cards.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchCards())
  }, [])

    if (isCardsLoading) {
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
    )}
        
      return (
        <>
          <Container>
            <Grid container spacing={2}>
              
              {cards.items.map( item => (
                  <Grid xs={4}>    
                    <CardPreview 
                      name={item.title} 
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

export default GaetAll;