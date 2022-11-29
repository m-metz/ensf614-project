import classes from '../styles/Movie.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

let seatList = [];
function Seat(props) {
    

    function seatSelectHandler() {
        console.log(props.seatNum);
        seatList.push(props.seatNum);
        sessionStorage.selectedSeats = JSON.stringify(seatList);
        console.log(sessionStorage.selectedSeats);
    }

    return (
        <Card sx={{width: 1/4, height: 1/4}} onClick={seatSelectHandler}>
            <CardActionArea>
                <CardContent>
                    <p>{props.seatNum}</p>
                    <p>{props.available}</p>
                </CardContent>
                <CardMedia
                    component = "img"
                    image={props.image}
                    
                    />
            </CardActionArea>
            </Card>
    );
}
export default Seat;