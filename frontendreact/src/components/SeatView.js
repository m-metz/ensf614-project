
import Seat from './Seat';
import {Grid} from '@mui/material';

function SeatView(props) {

    function movieSelectHandler() {
        window.location.pathway = '/moviepage';
        window.location.href = window.location.pathway;
    }

    return (
        <Grid container spacing={6} justifyContent="center"  rowSpacing = {2} direction="row">
            {props.seats.map(seat => <Grid item xs = {2.3}> <Seat
                                                    seatNum = {seat.seatNum}
                                                    image={"seatSquare.png"}
                                                    /> </Grid>)}

        </Grid>
    )

}

export default SeatView;