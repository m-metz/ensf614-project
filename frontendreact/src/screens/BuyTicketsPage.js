import { Button } from "@mui/material";
import Paymentinfo from "../components/Paymentinfo";
export default function BuyTicketsPage() {
  const email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== "null";
  const cvv = isLoggedIn ? sessionStorage.getItem("") : 2;
  function SubmitHander() {
    // {isLoggedIn ? (a =0): ( a = 4)}
    //Is the user logged in? If so, query their info
    //If not, get all their info from form

    let paymentform = document.getElementById("Paymentinfo");
    let cvv = paymentform.csv.value;
    let cardName = paymentform.cardname.value;
    let expiryDate = paymentform.cardexpiry.value;
    let postal = paymentform.postal.value;
    let type = paymentform.cardtype.value;
    let cardnum = paymentform.cardnum.value;
    let ticketObject = []
    let tickets = JSON.parse(sessionStorage.getItem("selectedSeats"));
    let currentShowtimeId = sessionStorage.getItem("currentShowtimeId")
    tickets.forEach((element) => {
      ticketObject.push({"currentShowtimeId": currentShowtimeId , "seatNum": element})
    });

    let SubmitObject = {
      userEmail: document.getElementById("emailForm").email.value,
      Tickets: ticketObject,
      paymentCards: [
        {
          cvv: cvv,
          nameOfHolder: cardName,
          expiryDate: expiryDate,
          billingPostal: postal,
          type: type,
          number: cardnum,
        },
      ],
      voucher: document.getElementById("voucherForm").voucher.value,
    };
    console.log(SubmitObject);
  }
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
            id="emailForm"
            class="card"
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        id="voucherForm"
        class="card"
      >
        <label>Enter voucher info (optional):</label>
        <input
          type="text"
          id="voucher"
          name="voucher"
        ></input>
      </form>
      <Button
        variant="contained"
        onClick={SubmitHander}
      >
        Buy Tickets
      </Button>
    </div>
    //put in grand total
  );
}
