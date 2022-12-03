package com.ensf614project.movietheatre.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.entities.Movie;
import com.ensf614project.movietheatre.services.MovieService;

@RestController
@RequestMapping(path = "/movie")
@CrossOrigin
public class MovieController {
    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping(path = "/all")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping(path = "/all/active/public")
    public List<Movie> getAllActivePublicMovies() {
        return movieService.getAllActivePublicMovies();
    }

    @GetMapping(path = "/all/active")
    public List<Movie> getAllActiveMovies() {
        return movieService.getAllActiveMovies();
    }

    @GetMapping(path = "/all/active/prerelease")
    public List<Movie> getAllActivePrereleaseMovies() {
        return movieService.getAllActivePrereleaseMovies();
    }
}
