import Movielist from '../components/Movielist';

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
    return (
        <section>
           
            <h1>Exclusive Registered User Movies </h1>
            <Movielist movies={prereleaseDummy} />

        </section>
    );
}
export default Prerelease;