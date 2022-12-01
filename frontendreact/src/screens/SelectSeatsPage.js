import SeatView from "../components/SeatView";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

const seats = [];

function PopulateSeats() {
  let seatId = 1;
  let isAvailable = true; // set as true by default, but can be modified based on JSON output
  for (let rowNum = 1; rowNum < 11; rowNum++) {
    for (let seatNum = 1; seatNum < 11; seatNum++) {
      seats.push({ seatNum: seatId, rowNum: rowNum, isAvailable: isAvailable });
      seatId++;
    }
  }
  console.log(seats);
}

function ConfirmSelection(){
        window.location.pathway = '/buyticketspage';
        window.location.href = window.location.pathway;
}
function SelectSeatsPage() {
  PopulateSeats();
  return (
    <section>
      <h1>Please Select Seats</h1>
      <h5>
        {" "}
        You have selected the following seats: {
          sessionStorage.selectedSeats
        }{" "}
      </h5>

      <Grid
        container
        // direction="column"
        // justifyContent="center"
      >
        <Grid
          item
          xs={3}
        ></Grid>
        <Grid
          item
          xs={6}
        >
          <SeatView seats={seats} />
          <Box
            padding={"2rem"}
          >
            <Button variant="contained" onClick={ConfirmSelection}>Confirm Selection</Button>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </section>
  );
}
export default SelectSeatsPage;
