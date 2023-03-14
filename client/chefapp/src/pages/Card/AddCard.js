import React, { useState } from 'react';
import { IngredientInput, AddIngredient } from './CardItems.js';
import styles from './card.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import axios from '../../axios.js'
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import ClearIcon from '@mui/icons-material/Clear';




function AddCard(props) {
  const [listItems, setListItems] = useState(['']);
  
  
  function addNewField() {
    setListItems([...listItems, ''])
    console.log(listItems);
    console.log('function addNewField run');
  }

  const dispatch = useDispatch(); 
  const { register, 
          handleSubmit,
          setError, 
          formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      cardName: 'input name',
      cardText: 'input description'
    },
    mode: 'onChange'
  })

  
  const onSubmit = async (values) => {
    console.log(values);
    const params = {
      title: values.cardName,
      text: values.cardText,
      items: [],
      }
      let itemKeys = Object.keys(values).slice(2);
      for (let i=0; i<itemKeys.length; i=i+2) {
        console.log(values[itemKeys[i]]);
        params.items.push({name: values[itemKeys[i]], quantity: values[itemKeys[i+1]]});
      }
        
        console.log(itemKeys);
        console.log(params);
    
    try {
      const data = await axios.post('/cards', params)
      console.log(data);
    } catch (err) {
      console.log("card dont create");
      console.warn(err)
    } 
  }

  return (
    <>
      <Box className={styles.container}>
        
      <form onSubmit={handleSubmit(onSubmit)}>  
        <Box className={styles.ingredientContainer}>
          <h1 className={styles.header}>
            <TextField 
              className={styles.cardNameInput} 
              label="Card name" 
              variant="outlined" 
              error={Boolean(errors.cardName?.message)}
              helperText={errors.cardName?.message}
              {...register("cardName", { required: "input card name"})}
            />
          </h1>
          <p>
            <TextField 
              className={styles.cardNameInput} 
              label="Card text" 
              variant="outlined" 
              error={Boolean(errors.cardText?.message)}
              helperText={errors.cardText?.message}
              {...register("cardText", { required: "input card text"})}
            />
          </p>
          <>          
              {listItems.map((item, index) => {
                return(

            <>
              <Grid container key={index} spacing={0} className={styles.ingredient}>
                  <Grid xs={7}>
                    <TextField {...register(`inputName-${index}`)} label={props.label} variant="outlined" type="text" />
                  </Grid>
                  <Grid xs={3}>
                    <TextField {...register(`inputAmount-${index}`)} label="amout" variant="outlined" type="number" />
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
              })}
          </>

          <AddIngredient click={addNewField} />
            
        </ Box>

          <Button variant="contained" type="submit"> 
            Save
            <SaveIcon />
          </Button>          
        
      </form>

      </Box>
      
    </>
  );
}

export default AddCard