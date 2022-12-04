package com.ensf614project.movietheatre.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.services.ShowtimeService;
import com.ensf614project.movietheatre.services.TicketService;

@RestController
@RequestMapping(path = "/showtime")
@CrossOrigin
public class ShowtimeController {
    private final ShowtimeService showtimeService;
    private final TicketService ticketService;

    @Autowired
    public ShowtimeController(ShowtimeService showtimeService, TicketService ticketService) {
        this.showtimeService = showtimeService;
        this.ticketService = ticketService;
    }

    @GetMapping("{showtimeId}/seats")
    public List<?> getAllTheatres(@PathVariable Long showtimeId) {
        return ticketService.getAllSeatsForShowtime(showtimeId);
    }

    @GetMapping("movie/{movieId}")
    public List<?> getShowtimesForMovie(@PathVariable Long movieId) {
        return showtimeService.getShowtimesForMovie(movieId);
    }

    @GetMapping("movie/{movieId}/theatre/{theatreId}/upcoming")
    public List<?> getShowtimesForMovieAndTheaterUpcoming(@PathVariable Long movieId,
            @PathVariable Long theatreId) {
        return showtimeService.getShowtimesForMovieAndTheaterUpcoming(movieId, theatreId);
    }

}
