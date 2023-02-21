import React from 'react';
import Button from '@mui/material/Button';
import { logout } from '../../redux/slices/auth.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth.js'
import { Router, Link } from 'react-router-dom'

export const Header = () => {

	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth)
	console.log("isAuth");
	console.log(isAuth);
	console.log("selectIsAuth");
	console.log(selectIsAuth);
	const onClickLogin = () => {

	}

	const onClickLogOut = () => {
		console.log("click logout");
		dispatch(logout());	
		window.localStorage.setItem('selectIsAuth', selectIsAuth)		
		window.localStorage.setItem('auth', isAuth)		
		window.localStorage.removeItem('token');
		console.log("localStorage");
		console.log(localStorage);
		console.log("isAuth");
		console.log(isAuth);
		console.log(selectIsAuth);

	}

	return (
	<>
		<a href="/login">
			<Button variant="contained">
				login 
			</Button>
		</a>

		<Button variant="contained" onClick={onClickLogOut}>
			logout
		</Button>
	</>
		)
}