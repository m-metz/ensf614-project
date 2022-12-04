package com.ensf614project.movietheatre.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Showtime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    @ManyToOne
    private Movie movie;

    @NonNull
    private LocalDate date;

    @NonNull
    private LocalTime time;

    @NonNull
    @ManyToOne
    private Screen screen;

    @Nullable
    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY)
    private List<Ticket> tickets;

    public Showtime() {
    }

    public Showtime(Movie movie, LocalDate date, LocalTime time, Screen screen) {
        this.movie = movie;
        this.date = date;
        this.time = time;
        this.screen = screen;
    }

    public boolean isMovieActive() {
        return movie.isActive();
    }

    public boolean isMoviePublic() {
        return movie.isPublic();
    }

    public int getScreenCapcity() {
        return screen.getCapacity();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Screen getScreen() {
        return screen;
    }

    public void setScreen(Screen screen) {
        this.screen = screen;
    }

    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

}
