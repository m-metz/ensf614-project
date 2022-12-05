import classes from '../styles/Movie.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/**
 * Singular movie component with image and title.
 */

function Movie(props) {

    //Handler for when movie is selected
    function movieSelectHandler() {
        console.log(props.title);
        sessionStorage.setItem("movieImage", props.image);
        sessionStorage.setItem("currentMovie", props.title);
        sessionStorage.setItem("currentMovieId", props.id);
        window.location.pathway = '/moviepage';
        window.location.href = window.location.pathway;
    }

    //Rendered component
    return (
        <Card sx={{ }} onClick={movieSelectHandler}>
            <CardActionArea>
                <CardMedia
                    component = "img"
                    image={props.image}
                    alt={props.title}
                    />
            <CardContent>
                <Typography gutterBottom variant = "h5" component="div">
                    {props.title}
                </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
    );
}
export default Movie;