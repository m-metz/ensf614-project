import classes from '../styles/Movie.css';

function Movie(props) {
    return (
        <li className={classes.item}>
            <div className={classes.image}>
            <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <h4>{props.rating}</h4>
            </div>
            <div>
                <button className="btn">See Details</button>
            </div>

        </li>
    );
}
export default Movie;