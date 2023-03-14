import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { logout } from '../../redux/slices/auth.js';
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth.js';
import LogoutIcon from '@mui/icons-material/Logout';

export const LogInButton = () => {
		return (
		<>	
			<Link 
				href="login"
				color="inherit"
			>
				<Button 
					color="inherit"
					variant="outlined"
					xs={{ mr: 1 }}
					sm={{ mr: 2 }}
					md={{ mr: 5 }}
				>
					login 
				</Button>
			</Link>
			<Link 
				href="/registration"
				color="inherit"
			>
				<Button 
					color="inherit"
					variant="outlined"
				>
					registration
				</Button>
			</Link>

			
		</>
		)
	}





export const LogOutButton = () => {

	const isAuth = useSelector(selectIsAuth);
	const onClickLogOut = () => {
		console.log("isAuth");
		console.log(isAuth);
		console.log("click logout");
		dispatch(logout());	
		console.log("isAuth");
		console.log(isAuth);
		window.localStorage.removeItem('token')
		
	}

	const dispatch = useDispatch();
	
		return (
			<Button color="inherit" onClick={onClickLogOut}>
				<LogoutIcon />
			</Button>
		)
	}