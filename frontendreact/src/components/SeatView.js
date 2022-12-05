import Seat from "./Seat";
import { Grid } from "@mui/material";
import { getFetch } from "../fetch";
import { useState } from "react";

/**
 * Seat grid to graphically view all seats and grab seats/status from server
 */

function SeatView() {
  const [isLoading, setIsLoading] = useState(true);
  const [seatObjects, setSeatObjects] = useState([]);
  if (isLoading === true) {
    getFetch(
      "http://localhost:8080/showtime/" +
        sessionStorage.getItem("currentShowtimeId") +
        "/seats"
    ).then((data) => {
      setIsLoading(false);
      setSeatObjects(data);
    });
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  //Apply seat data from fetch to grid
  let seatArray = seatObjects.map((seat) => {
    return (
      <Grid
        item
        xs={1.2}
      >
        <Seat
          seatNum={seat.seatNum}
          seatRow={seat.rowNum}
          isAvailable={seat.available}
        />
      </Grid>
    );
  });
  console.log(seatArray)

  return (
    <Grid
      container
      spacing={1}
      justifyContent="center"
      direction="row"
    >
      {seatArray}
    </Grid>
  );
}

export default SeatView;
