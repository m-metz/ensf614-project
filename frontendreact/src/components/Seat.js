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

//TODO change color of button based on selection
function Seat(props) {
  // const [selected, setSelected] = useState(false);

  // if (!{ selected }) {
  //   console.log("buttokn selected");
  //   setSelected(true);
  // }
  const [clicked, setClicked] = useState(false);
  const [category, setCategory] = useState("false");
  const categoryChangedHandler = (e) => {
    setCategory(e);
  };
  function seatSelectHandler() {
    categoryChangedHandler(category);
    setClicked(true);
    // buttonVariant = "contained";
    console.log(props.seatNum);
    seatList.push(props.seatNum);
    sessionStorage.selectedSeats = JSON.stringify(seatList);
    console.log(sessionStorage.selectedSeats);
  }

  function determineButton() {
    // const [selected, setSelected] = useState();
    if (props.isAvailable) {
      buttonVariant = "outlined";
    } else {
      buttonVariant = "disabled";
    }
  }

  // determineButton();
  return (
    <Button
      variant={clicked ? "contained" : "outlined"}
      // variant={buttonVariant}
      onClick={seatSelectHandler}
      sx={{ width: "1em" }}
    >
      {props.seatNum}
    </Button>
  );
}
export default Seat;
