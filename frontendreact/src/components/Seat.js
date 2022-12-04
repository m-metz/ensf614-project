import classes from "../styles/Movie.css";
import * as React from "react";
import { Button, } from "@mui/material";
import { useState } from "react";
let seatList = [];
function Seat(props) {
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState("outlined");
  function seatSelectHandler() {
    if (!clicked) {
      setClicked(true);
      setCategory("contained")
      seatList.push([props.seatNum,props.seatRow]);
      sessionStorage.selectedSeats = JSON.stringify(seatList);
      console.log(sessionStorage.selectedSeats);
    }
  }

  return (
    <Button
    onClick={seatSelectHandler}
      variant={props.isAvailable ? category : "disabled"}
      sx={{ width: "8em" }}
    >
       Seat: {props.seatNum} <br/>
       Row: {props.seatRow} 
    </Button>
  );
}
export default Seat;
