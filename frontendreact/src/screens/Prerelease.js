import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';

//Should be just active movies
const prereleaseDummy =    [{
    id: '7',
    title: "GetSmart",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_crd_06.jpg",
    description: "Element of surprise",
    Rating: "3"
},
{
    id: '8',
    title: "Deadpool",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/deadpool_lob_crd_02.jpg",
    description: "Ryan reynolds doing hot boy stuff",
    Rating: "3"
}
]

function Prerelease() {
    const[isLoading, setIsLoading] = useState(true);
    const [preReleases, setPreReleases] = useState([]);

    getFetch("http://localhost:8080/movie/all/active")
    .then(data => {
        setIsLoading(false);
        setPreReleases(data);
    });

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (
        <section>
           
            <h1>Exclusive Registered User Movies </h1>
            <Movielist movies={preReleases} />

        </section>
    );
}
export default Prerelease;