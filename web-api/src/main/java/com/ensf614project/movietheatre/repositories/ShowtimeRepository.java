package com.ensf614project.movietheatre.repositories;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Showtime;

@Repository
public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {
    public interface ShowtimeBrief {
        Long getId();

        LocalDate getDate();

        LocalTime getTime();

        int getScreenNum();
    }

    @Query(value = "Select showtime.id, showtime.date, showtime.time, screen.screen_num as screenNum from showtime, screen where showtime.movie_id = ?1 and showtime.screen_id=screen.id Order by showtime.date, showtime.time", nativeQuery = true)
    List<ShowtimeBrief> findShowtimeByMovieId(Long movie);

    @Query(value = "Select showtime.id, showtime.date, showtime.time, screen.screen_num as screenNum from showtime, screen, movie, theatre where movie.id = ?1 and theatre.id = ?2 and showtime.date >= ?3 and showtime.movie_id=movie.id and showtime.screen_id=screen.id and screen.theatre_id=theatre.id Order by showtime.date, showtime.time", nativeQuery = true)
    List<ShowtimeBrief> getShowtimesForMovieAndTheaterUpcoming(Long movie, Long theatre, LocalDate date);

}
