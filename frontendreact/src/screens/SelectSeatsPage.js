import SeatView from "../components/SeatView";
import { Grid } from "@mui/material";

// const seats = [
//   { seatNum: "1", rowNum: "1" },
//   { seatNum: "2", rowNum: "1" },
//   { seatNum: "3", rowNum: "1" },
//   { seatNum: "4", rowNum: "1" },
//   { seatNum: "5", rowNum: "1" },
//   { seatNum: "1", rowNum: "2" },
//   { seatNum: "2", rowNum: "2" },
//   { seatNum: "3", rowNum: "2" },
//   { seatNum: "4", rowNum: "2" },
//   { seatNum: "5", rowNum: "2" },
//   { seatNum: "1", rowNum: "3" },
//   { seatNum: "2", rowNum: "3" },
//   { seatNum: "3", rowNum: "3" },
//   { seatNum: "4", rowNum: "3" },
//   { seatNum: "5", rowNum: "3" },
//   { seatNum: "1", rowNum: "4" },
//   { seatNum: "2", rowNum: "4" },
//   { seatNum: "3", rowNum: "4" },
//   { seatNum: "4", rowNum: "4" },
//   { seatNum: "5", rowNum: "4" },
//   { seatNum: "1", rowNum: "5" },
//   { seatNum: "2", rowNum: "5" },
//   { seatNum: "3", rowNum: "5" },
//   { seatNum: "4", rowNum: "5" },
//   { seatNum: "5", rowNum: "5" },
// ];
const seats = [];

function PopulateSeats() {
  console.log("runs inside");
  let seatId = 1;
  for (let rowNum = 1; rowNum < 11; rowNum++) {
    for (let seatNum = 1; seatNum < 11; seatNum++) {
      // const element = array[seatNum];
      seats.push({ seatNum: seatId, rowNum: rowNum });
      seatId++;
    }
  }

  console.log("finished populating")
}
function SelectSeatsPage() {
  PopulateSeats();
  console.log(seats);
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
