import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MyCard(props) {
 
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.text}
        </Typography>

      </CardContent>

    </Card>
  );
}




export default MyCard