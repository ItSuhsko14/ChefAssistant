import React from 'react';
import { Ingredient, AddIngredient } from './CardItems.js';
import styles from './card.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch } from 'react-redux';
import { fetchRemoveCard } from '../../redux/slices/cards.js';

function MyCard(props) {
  const items = props.items;
  console.log(items[0]);

    const dispatch = useDispatch();
    const cardId = props.cardId;
    
    const deleteCard = async () => {
    dispatch(fetchRemoveCard(props.cardId));
    }

  return (
    <>
      <Box className={styles.container}>
        <h1 className={styles.header}>{props.name}</h1>
        <p>{props.text}</p>
        <p>
          <Button variant="contained"> 
            Edit card   
            <EditIcon />
          </Button>          
          <Button variant="contained" onClick={deleteCard}> 
            Delete card
            <ClearIcon />
          </Button>          
        </p>
        <Box className={styles.ingredientContainer}>
          {items.map( (item) => {
            return(
              <Ingredient name={item.name} amount={item.quantity} />
            )
          })}
          
        </ Box>
      </Box>
      
    </>
  );
}

export default MyCard