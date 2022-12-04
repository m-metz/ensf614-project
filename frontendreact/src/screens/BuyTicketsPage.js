import { Button } from "@mui/material";
import Paymentinfo from "../components/Paymentinfo";
import { getFetch } from "../fetch";
let voucher = 0;
export default function BuyTicketsPage() {
  const email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== "null";
  function SubmitHander() {
    // {isLoggedIn ? (a =0): ( a = 4)}
    //Is the user logged in? If so, query their info
    //If not, get all their info from form

    let paymentform;
    let cvv;
    let cardName;
    let expiryDate;
    let postal;
    let type;
    let cardnum;

    if (isLoggedIn) {
      //Verify credentials with server
      let user = getFetch("http://localhost:8080/RegisteredUser/" + email); // password??

      if (user["error"] === "Internal Server Error") {
        alert(user.message);
        return -1;
      }
      //make a fetch request based on email
      cvv = user.paymentCards.cvv.value;
      cardName = user.paymentCards.nameOfHolder.value;
      expiryDate = user.paymentCards.expiryDate.value;
      postal = user.paymentCards.billingPostal.value;
      type = user.paymentCards.type.value;
      cardnum = user.paymentCards.lastFourDigits.value; //where can we get the full CC value?
      //calculate total amount of vouchers
    } else {
      paymentform = document.getElementById("Paymentinfo");
      cvv = paymentform.csv.value;
      cardName = paymentform.cardname.value;
      expiryDate = paymentform.cardexpiry.value;
      postal = paymentform.postal.value;
      type = paymentform.cardtype.value;
      cardnum = paymentform.cardnum.value;
    }
    let ticketObject = [];
    let tickets = JSON.parse(sessionStorage.getItem("selectedSeats"));
    let currentShowtimeId = sessionStorage.getItem("currentShowtimeId");

    console.log(tickets + "are tickx")
    tickets.forEach((element) => {
      ticketObject.push({
        currentShowtimeId: currentShowtimeId,
        seatNum: element.seatNum,
        seatRow: element.seatRow
      });
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
      <p>Movie: {[sessionStorage.getItem("currentMovie")]}</p>
      <p>Theatre: {[sessionStorage.getItem("selectedTheatre")]}</p>
      <p>Show time: {[sessionStorage.getItem("selectedShowtime")]}</p>
      <p>Seats: {[sessionStorage.getItem("selectedSeats")]}</p>
      <p>
        <b>
          Your total:{" "}
          {JSON.parse(sessionStorage.getItem("selectedSeats")).length * 9.99 -
            voucher}{" "}
        </b>
      </p>

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
        <label>Voucher info (will be subtracted from the total above): </label>
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
