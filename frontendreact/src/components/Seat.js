import classes from "../styles/Movie.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import { useState } from "react";
let seatList = [];
let buttonVariant = "";

function Seat(props) {
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState("false");
  const categoryChangedHandler = (e) => {
    setCategory(e);
  };
  function seatSelectHandler() {
    categoryChangedHandler(category);
    if (!clicked) {
      
      setClicked(true);
      // buttonVariant = "contained";
      console.log(props.seatNum);
      seatList.push(props.seatNum);
      sessionStorage.selectedSeats = JSON.stringify(seatList);
      console.log(sessionStorage.selectedSeats);
    }
  }

  function determineButton() {
    // const [selected, setSelected] = useState();
    if (props.isAvailable) {
      buttonVariant = "outlined";
    } else {
      buttonVariant = "disabled";
    }
  }

  determineButton();
  return (
    <Button
      variant={clicked&&props.isAvailable ? "contained" : "outlined"}
      // variant={buttonVariant}
      onClick={seatSelectHandler}
      sx={{ width: "8em" }}
    >
       Seat: {props.seatNum} <br/>
       Row: {props.seatRow} 
    </Button>
  );
}
export default Seat;
