import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './card.module.css';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export const Ingredient = (props) => {
	return (
		<>
			<Grid container spacing={0} className={styles.ingredient}>
			    <Grid xs={9}>
			    	<div className={styles.name}> {props.name} </div>
			    </Grid>
			    <Grid xs={3}>
   		        	<div className={styles.amount} > {props.amount} </div>
			    </Grid>
		    </Grid>
		</>
		)
}

export const IngredientInput = (props) => {
	return (
		<>
			<Grid container spacing={0} className={styles.ingredient}>
			    <Grid xs={7}>
			    	<TextField label={props.label} variant="outlined" type="text" />
			    </Grid>
			    <Grid xs={3}>
			    	<TextField label={props.label} variant="outlined" type="number" />
			    </Grid>
			    
	        	<Grid item xs={2} 
	        		
	        	>	
		        	<Button variant="contained">
			          <ClearIcon />
			        </Button>	
			    </Grid>
		    </Grid>
		</>
		)
}

export const AddIngredient = (props) => {
	return (
		<>
			<Container className={styles.addIngredient}>
			    
					<Button 
			          variant="contained"
			          sx={{mr:0}}
			          className={styles.fullWidth}
			          onClick={props.click}
			        >
			          <AddIcon />
			        </Button>
			    
		    </Container>
		</>
	)
}



export const Amount = (props) => {
	return (
		<>
			<div
				style={{margin:'10px'}}
			>
				{props.amount}
			</div>			
		</>
		)
}