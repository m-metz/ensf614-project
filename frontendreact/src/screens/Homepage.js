import Movie from '../components/Movie';

const dummyMovieData = [
    {
        id: '1',
        title: "Batman Begins",
        image: "batman.jpeg",
        description: "This is a movie about a man who is also a bat.",
        Rating: "4"
    }, 
    {
        id: '2',
        title: "21 Jump Street",
        image: "21jump.jpg",
        description: "This is a movie about police who go to school.",
        Rating: "3"
    }
]

function Homepage() {
    return (
        <section>
            <ul>
            <h1>Movies Showing </h1>
            {dummyMovieData.map((movie) => {
                return <li key={movie.id}>{movie.title}</li>
            })}
            </ul>
        </section>
    );
}
export default Homepage;