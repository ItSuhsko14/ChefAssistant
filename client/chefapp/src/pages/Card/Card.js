import React from 'react';
import { Ingredient, AddIngredient } from './CardItems.js';
import styles from './card.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';


function MyCard(props) {
  const items = props.items;
  console.log(items[0]);

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
        </p>
        <Box className={styles.ingredientContainer}>
          {items.map( (item) => {
            return(
              <Ingredient name={item.name} amount={item.quantity} />
            )
          })}
          <AddIngredient />
        </ Box>
      </Box>
      
    </>
  );
}

export default MyCard