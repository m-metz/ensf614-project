import SeatView from "../components/SeatView";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { getFetch } from "../fetch";
import { useState } from "react";
let seats = [];
function PopulateSeats() {
  // getFetch(
  //   "http://localhost:8080/showtime/" +
  //     sessionStorage.getItem("currentShowtimeId") +
  //     "/seats"
  // ).then((data) => {
  //   data.forEach((element) => {
  //     seats.push(element);
  //   });
  // });

  // console.log(seats);

  // let seatId = 1;
  // let isAvailable = false; // set as true by default, but can be modified based on JSON output
  // for (let rowNum = 1; rowNum < 11; rowNum++) {
  //   for (let seatNum = 1; seatNum < 11; seatNum++) {
  //     seats.push({ seatNum: seatId, rowNum: rowNum, isAvailable: isAvailable });
  //     seatId++;
  // }
}

function ConfirmSelection() {
  window.location.pathway = "/buyticketspage";
  window.location.href = window.location.pathway;
}
function SelectSeatsPage() {
  PopulateSeats();
  return (
    <section>
      <h1>Please Select Seats</h1>

      <Grid container>
        <Grid
          item
          xs={3}
        ></Grid>
        <Grid
          item
          xs={6}
        >
          <SeatView  />
          {/* <SeatView seats={seats} /> */}
          <Box padding={"2rem"}>
            <Button
              variant="contained"
              onClick={ConfirmSelection}
            >
              Confirm Selection
            </Button>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </section>
  );
}
export default SelectSeatsPage;
