export default function BuyTicketsPage() {
  return (
    <div>
      <h1> Ticket Shopping Cart </h1>
      <h2> You are buying tickets for</h2>
      <p>Movie: {[sessionStorage.getItem("currentMovieId")]}</p>
      <p>Theatre: {[sessionStorage.getItem("currentTheatreId")]}</p>
      <p>Show time: {[sessionStorage.getItem("currentShowtimeId")]}</p>
      <p>Seats: {[sessionStorage.getItem("selectedSeats")]}</p>
    </div>
  );
}
