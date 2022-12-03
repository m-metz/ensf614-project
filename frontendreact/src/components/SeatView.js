import Seat from "./Seat";
import { Grid } from "@mui/material";
import { getFetch } from "../fetch";
let seats;
function SeatView() {
  // function SeatView(props) {

  getFetch(
    "http://localhost:8080/showtime/" +
      sessionStorage.getItem("currentShowtimeId") +
      "/seats"
  ).then((data) => {
    // data.forEach((element) => {
    //   seats.push(element);
    //   return element;
    // });
    console.log(data)
    // seats = data;
    // console.log(data[0]);
  });
// 
//   console.log(seats[0]);

    // console.log(seats);
  // function movieSelectHandler() {
  //     window.location.pathway = '/moviepage';
  //     window.location.href = window.location.pathway;
  // }

  // return (
  //     <Grid container spacing={1} justifyContent="center"  rowSpacing = {1} direction="row">
  //         {seats.map(seat => <Grid item xs = {1.2}> <Seat
  //                                                 seatNum = {seat.seatNum}
  //                                                 seatRow = {seat.rowNum}
  //                                                 isAvailable = {seat.isAvailable}
  //                                                 /> </Grid>)}

  //     </Grid>
  // )
}

export default SeatView;
