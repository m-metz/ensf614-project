import classes from '../styles/MovieList.css';
import Movie from './Movie';
import {Grid} from '@mui/material';

function Movielist(props) {
    return (
        <Grid container spacing={1} justifyContent="center"  direction="row">
            {props.movies.map(movie => <Grid item xs = {2.5}> <Movie key={movie.id} 
                                                    id={movie.id} 
                                                    image={movie.image} 
                                                    title={movie.title} 
                                                    description={movie.description}/> </Grid>)}

        </Grid>
    )

}

export default Movielist;