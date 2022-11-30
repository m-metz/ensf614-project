import SeatView from "../components/SeatView";
import { Grid } from "@mui/material";

const seats = [];

function PopulateSeats() {
  let seatId = 1;
  let isAvailable = true; // set as true by default, but can be modified based on JSON output
  for (let rowNum = 1; rowNum < 11; rowNum++) {
    for (let seatNum = 1; seatNum < 11; seatNum++) {
      seats.push({ seatNum: seatId, rowNum: rowNum , isAvailable: isAvailable});
      seatId++;
    }
  }
  console.log(seats);
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

      <Grid container>
        <Grid
          item
          xs={3}
        ></Grid>
        <Grid
          item
          xs={6}
        >
          <SeatView seats={seats} />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </section>
  );
}
export default SelectSeatsPage;
