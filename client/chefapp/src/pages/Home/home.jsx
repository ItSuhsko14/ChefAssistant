import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/slices/cards.js'
import Card from '../Card/Card.js'
import Sceleton from '../Card/Sceleton.js'
import Button from '@mui/material/Button';


export const Home = () => {
	const dispatch = useDispatch();
	const { cards } = useSelector( state => state.cards );
	const isCardsLoading = cards.status === "loaded";
	
	React.useEffect( () => {
		dispatch(fetchCards())
	}, []);

	console.log(cards);

	  return (
 		<h1>asdfsa</h1>,
 		<Button variant="text">Text</Button>,
		<Button variant="contained">Contained</Button>,
		<Button variant="outlined">Outlined</Button>,
    	isCardsLoading 
    		? cards.items.map( (obj, index) =>
    			<Card key={index} title={obj.title} text={obj.text} />
    			)
    		: <div><Sceleton /></div>
  		);
}