import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/slices/cards.js';
import Link from '@mui/material/Link';

import Button from '@mui/material/Button';


export const Home = () => {
	const dispatch = useDispatch();
	const { cards } = useSelector( state => state.cards );

	
	React.useEffect( () => {
		dispatch(fetchCards())
	}, []);

	console.log(cards);

	  return (
 		<>
	 		<h1>Welcome in Cheff assistant.</h1>
	 		<p>See all cards - 
	 			<Button variant="contained">
	 				<a href="/getAll">
	 					all cards
	 				</a>
	 			</Button>
	 		</p>
	 		<p>Create new card - 
	 			<Button variant="contained">
	 				<a href="/addCard">
	 					new card
	 				</a>
	 			</Button>
	 		</p>
	 		<Button variant="text">Text</Button>
			
			<Button variant="outlined">Outlined</Button>
		</>    	
  		);
}