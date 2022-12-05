import classes from '../styles/MovieList.css';
import Movie from './Movie';
import {Grid} from '@mui/material';

/**
 * Grid component for all movie cards
 */

function Movielist(props) {

    function movieSelectHandler() {
        window.location.pathway = '/moviepage';
        window.location.href = window.location.pathway;
    }


    return (
        <Grid container spacing={1} justifyContent="center"  rowSpacing = {2} direction="row">
            {props.movies.map(movie => <Grid item xs = {2.5}  key={movie.id} > <Movie
                                                    id={movie.id} 
                                                    image={movie.image} 
                                                    title={movie.title} 
                                                    description={movie.description}
                                                    onClick={movieSelectHandler}/> </Grid>)}

        </Grid>
    )

}

export default Movielist;