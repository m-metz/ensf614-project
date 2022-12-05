import Movielist from '../components/Movielist';
import { getFetch } from '../fetch';
import {useState} from 'react';

/**
 * Page component showing active but not public movies for registered users
 */


function Prerelease() {
    const[isLoading, setIsLoading] = useState(true);
    const [preReleases, setPreReleases] = useState([]);

    //If page loading then fetch data
    if(isLoading){
    getFetch("http://localhost:8080/movie/all/active/prerelease")
    .then(data => {
        setIsLoading(false);
        setPreReleases(data);
    });
}
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