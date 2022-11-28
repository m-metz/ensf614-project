import classes from '../styles/Movie.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Movie(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component = "img"
                    height="140"
                    image={props.image}
                    alt={props.title}
                    />
            <CardContent>
                <Typography gutterBottom variant = "h3" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
    );
}
export default Movie;