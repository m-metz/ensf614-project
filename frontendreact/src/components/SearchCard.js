import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SearchCard(props) {
  return (
    <Card sx={{ minWidth: 750, height: 500}}>
      <CardContent>
        <h1>TO DO: MAKE THIS <br></br>CARD WITH THEATRE 
          DROP DOWN AND WITH A <br></br>BUY TICKET BUTTON</h1>
        <br></br>
      </CardContent>
      <CardActions>
        <Button className="btn">{props.button}</Button>
      </CardActions>
    </Card>
  );
}