import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';
import { Box } from '@mui/material';

//Homepage of movie application. Returned here on any cancellation

function Homepage() {
    const[isLoading, setIsLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);

    if(isLoading){

        getFetch("http://localhost:8080/movie/all/active/public")
        .then(data => {
        setIsLoading(false);
        setLoadedMovies(data);
    });
}

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <div>
                    <Box sx={{margin: "1rem"}} >

        <section className="card">
            <h1>In Theaters Now! Search All Movies: </h1>
            <Movielist movies={loadedMovies} />
        </section>
                    </Box>

        </div>
    );
} 
export default Homepage;