import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';

//TODO: Fetch allMovies that are active and public
const dummyMovieData = [
    {
        id: '1',
        title: "Dark Phoenix",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/darkphoenix_lob_crd_01_0.jpg",
        description: "There is lightning",
    }, 
    {
        id: '2',
        title: "Spiderman",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_4.jpg",
        description: "boy is a spider",
        Rating: "3"
    },
    {
        id: '3',
        title: "AntMan",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/antmanandthewaspquantumania_lob_crd_02.jpg",
        description: "Antman",
        Rating: "3"
    },
    {
        id: '4',
        title: "Thor",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thorloveandthunder_lob_crd_04.jpg",
        description: "Chris hemsworth doing hot guy stuff",
        Rating: "3"
    }, 
    {
        id: '5',
        title: "Captain Marvel",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
        description: "Captain marvel doing things",
        Rating: "3"
    },
    {
        id: '6',
        title: "Deadpool",
        image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/deadpool_lob_crd_02.jpg",
        description: "Ryan reynolds doing hot boy stuff",
        Rating: "3"
    }
    
]

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
        <section>
           
            <h1>In Theaters Now </h1>
            <Movielist movies={loadedMovies} />

        </section>
    );
}
export default Homepage;