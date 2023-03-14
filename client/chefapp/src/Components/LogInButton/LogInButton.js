import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

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
					sx={{ mr:2 }}
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