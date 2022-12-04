import SeatView from "../components/SeatView";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { getFetch } from "../fetch";
import { useState } from "react";
import { Container } from "react-bootstrap";

function ConfirmSelection() {
  window.location.pathway = "/buyticketspage";
  window.location.href = window.location.pathway;
}
  function cancelHandler() {
    window.location.pathway = "/";
    window.location.href = window.location.pathway;
  }
function SelectSeatsPage() {
  return (
    <section>
      <h1>Please Select Seats</h1>

      <Grid container>
        <Grid
          item
          xs={2}
        ></Grid>
        <Grid
          // item
          xs={8}
        >
          <Box
            bgcolor="black"
            color="white"
            textAlign="center"
            padding={"1rem"}
            marginBottom={"1rem"}
            borderRadius={"10px"}
          >
            SCREEN
          </Box>
          <SeatView />
          <Box padding={"1rem"}>
            <Button
              variant="contained"
              class="btn"
              onClick={ConfirmSelection}
            >
              Confirm Selection
            </Button>
      <button
        className="btn btn--alt"
        onClick={cancelHandler}
      >Cancel</button>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </section>
  );
}
export default SelectSeatsPage;
