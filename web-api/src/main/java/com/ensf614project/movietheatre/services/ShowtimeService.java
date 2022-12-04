package com.ensf614project.movietheatre.services;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Showtime;
import com.ensf614project.movietheatre.repositories.ShowtimeRepository;

@Service
public class ShowtimeService {
    private final ShowtimeRepository showtimeRepository;

    @Autowired
    public ShowtimeService(ShowtimeRepository showtimeRepository) {
        this.showtimeRepository = showtimeRepository;
    }

    public Showtime getShowtimeById(Long showtimeId) {
        Optional<Showtime> showtime = showtimeRepository.findById(showtimeId);
        ;
        if (!showtime.isPresent()) {
            throw new IllegalStateException("Showtime not found");
        }
        return showtime.get();

    }

    public List<?> getShowtimesForMovie(Long movieId) {
        return showtimeRepository.findShowtimeByMovieId(movieId);
    }

    public List<?> getShowtimesForMovieAndTheaterUpcoming(Long movieId, Long theatreId) {
        return showtimeRepository.getShowtimesForMovieAndTheaterUpcoming(movieId, theatreId, LocalDate.now());
    }

}
