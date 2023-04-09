import React from 'react';
import { Ingredient, AddIngredient } from './CardItems.js';
import styles from './card.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemoveCard } from '../../redux/slices/cards.js';
import { Link, NavLink } from "react-router-dom";
import {useParams} from 'react-router-dom';

function MyCard(props) {
  
  const { id } = useParams();
  const cardId = id;
  const { cards } = useSelector(state => state.cards);
  const currentCard = cards.items.find( item => item._id == id );
  const items = currentCard.items;
  console.log(items);
  console.log(id)

  const dispatch = useDispatch();
  const deleteCard = async () => {
      dispatch(fetchRemoveCard(props.cardId));
    }

  
  return (
    <>
      <Box className={styles.ingredientContainer}>
        <h1 className={styles.header}>{currentCard.title}</h1>
        <p>{currentCard.text}</p>
        <p>
          {items.map( (item)=> {
            return (
              <Ingredient 
                name={item.name}
                amount={item.quantity}
              />
            )
          })}
          
        </p>
        
        <p>
          <Button variant="contained"> 
            <Link to={`/addCard/${id}`}>
              Edit card   
             
            </Link>
            
          </Button>          
          <Button variant="contained" onClick={deleteCard}> 
              Delete card
              <ClearIcon />
          </Button>          
        </p>
        <Box className={styles.ingredientContainer}>
          
          
        </ Box>
      </Box>
      
    </>
  );
}

export default MyCard