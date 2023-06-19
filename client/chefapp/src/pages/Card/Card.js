import React, { useEffect, useState } from 'react';
import { Ingredient, AddIngredient } from './CardItems.js';
import styles from './card.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRemoveCard, fetchCards } from '../../redux/slices/cards.js';
import { Link, useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';
import axios from '../../axios.js';
import Loading from '../../Components/Loading/Loading.js';

function MyCard(props) {
  const [currentCard, setCurrentCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);
  const { id } = useParams();
  const param = useParams();
  console.log(param)
  console.log(id)
  const cardId = id;
  const navigate = useNavigate();
  

  const dispatch = useDispatch();

  useEffect( () => {
    axios
      .get(`cards/${id}`)
      .then( (res) => {
        setCurrentCard(res.data);
        setIsLoading(false);
      })
      .catch( (err) => {
        console.warn(err);
        alert('Помилка при отриманні статті')
      });
  }, [id])

  if (isLoading) return <Loading />
  
  console.log(currentCard);
  const items = currentCard.items;
  
  // console.log(items);
  console.log(id);
  
  const deleteCard = async () => {
      console.log(id);
      dispatch(fetchRemoveCard(id));
      navigate('/getAll')
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