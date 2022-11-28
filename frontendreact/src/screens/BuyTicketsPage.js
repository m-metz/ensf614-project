export default function BuyTicketsPage() {
    return <div>
        <h1> Ticket Shopping Cart </h1>
        <h2> you are buying tickets for 
            {["Movie: ", sessionStorage.getItem("currentMovieId"), " Theatre: ", sessionStorage.getItem("currentTheatreId"), " Showtime: ", sessionStorage.getItem("currentShowtimeId")]}
        </h2>
    </div>
}