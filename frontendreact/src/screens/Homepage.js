import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';


function Homepage() {
    const[isLoading, setIsLoading] = useState(true);
    const [loadedMovies, setLoadedMovies] = useState([]);

    getFetch("http://localhost:8080/movie/all/active/public")
    .then(data => {
        setIsLoading(false);
        setLoadedMovies(data);
    });

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <div>
        <section className="card">
            <h1>In Theaters Now! Search All Movies: </h1>
            <Movielist movies={loadedMovies} />
        </section>

        </div>
    );
} 
export default Homepage;