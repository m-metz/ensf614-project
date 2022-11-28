package com.ensf614project.movietheatre.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
    List<Movie> findMovieByIsActiveAndIsPublic(boolean isActive, boolean isPublic);

    List<Movie> findMovieByIsActive(boolean isActive);
}
