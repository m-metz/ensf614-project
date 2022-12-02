import { Button } from "@mui/material";
import Paymentinfo from "../components/Paymentinfo";
import VerifyVoucher from "../components/VerifyVoucher"
export default function BuyTicketsPage() {
  const email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== "null";


  return (
    <div>
      <h1> Ticket Shopping Cart </h1>
      <h2> You are buying tickets for</h2>
      <p>Movie: {[sessionStorage.getItem("currentMovieId")]}</p>
      <p>Theatre: {[sessionStorage.getItem("currentTheatreId")]}</p>
      <p>Show time: {[sessionStorage.getItem("currentShowtimeId")]}</p>
      <p>Seats: {[sessionStorage.getItem("selectedSeats")]}</p>

      {isLoggedIn ? (
        <div>We already have your payment information on file, {email}</div>
      ) : (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            id="loginForm"
          >
            <label>Enter your email: </label>
            <input
              type="text"
              id="email"
              name="email"
              required
            ></input>
            <br></br>
            <br></br>
          </form>
          <Paymentinfo />
        </>
      )}
      <VerifyVoucher/>
      <Button
        variant="contained"
        // onClick={alert("Great success!")}
      >
        Buy Tickets
      </Button>
    </div>

    //show email

    //put in field to put in voucher code
    //put in grand total
  );
}
