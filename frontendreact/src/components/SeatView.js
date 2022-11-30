
import Seat from './Seat';
import {Grid} from '@mui/material';

function SeatView(props) {

    function movieSelectHandler() {
        window.location.pathway = '/moviepage';
        window.location.href = window.location.pathway;
    }

    return (
        <Grid container spacing={1} justifyContent="center"  rowSpacing = {1} direction="row">
            {props.seats.map(seat => <Grid item xs = {1.2}> <Seat
                                                    seatNum = {seat.seatNum}
                                                    seatRow = {seat.seatRow}
                                                    isAvailable = {seat.isAvailable}
                                                    /> </Grid>)}

        </Grid>
    )

}

export default SeatView;