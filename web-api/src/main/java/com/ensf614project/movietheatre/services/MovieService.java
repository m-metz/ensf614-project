package com.ensf614project.movietheatre.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Movie;
import com.ensf614project.movietheatre.repositories.MovieRepository;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> getAllActivePublicMovies() {
        return movieRepository.findMovieByIsActiveAndIsPublic(true, true);
    }

    public List<Movie> getAllActiveMovies() {
        return movieRepository.findMovieByIsActive(true);
    }

    public List<Movie> getAllActivePrereleaseMovies() {
        return movieRepository.findMovieByIsActiveAndIsPublic(true, false);
    }
}
