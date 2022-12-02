import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';


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