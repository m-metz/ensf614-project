//Appears when specific movie is selected from homescreen
import Movie from'../components/Movie';
import SearchCard from'../components/SearchCard';
import {Grid} from '@mui/material';

//Get session variables
const currentMovieId = sessionStorage.getItem("currentMovieId");
let title = sessionStorage.currentMovie;
let image = sessionStorage.movieImage;
console.log("id:", currentMovieId);
console.log("title:", title);
console.log("image:", image);

function Moviepage() {

    return (
        <Grid container spacing={-1} justifyContent="center" >

            <Grid>
            <Movie id={currentMovieId} 
                image={image} 
                title={title} />
            </Grid>
            <Grid>
                <SearchCard
                    title="Search Theatres"
                    button = "Search">

                </SearchCard>
            </Grid>
        </Grid>
    );
}
export default Moviepage;