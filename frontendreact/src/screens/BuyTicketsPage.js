import { Button } from "@mui/material";
import Paymentinfo from "../components/Paymentinfo";
export default function BuyTicketsPage() {
  const email = sessionStorage.getItem("currentEmail");
  const isLoggedIn = email !== null && email !== 'null';
  return (
    <div>

      <h1> Ticket Shopping Cart </h1>
      <h2> You are buying tickets for</h2>
      <p>Movie: {[sessionStorage.getItem("currentMovieId")]}</p>
      <p>Theatre: {[sessionStorage.getItem("currentTheatreId")]}</p>
      <p>Show time: {[sessionStorage.getItem("currentShowtimeId")]}</p>
      <p>Seats: {[sessionStorage.getItem("selectedSeats")]}</p>

       {isLoggedIn ? (<div>{email}</div>): (<Paymentinfo/>)} 
      
      <Button variant = "contained">Buy Tickets</Button>
    </div>

    //show email
  );
}
