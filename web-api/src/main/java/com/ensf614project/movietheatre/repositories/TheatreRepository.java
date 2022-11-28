package com.ensf614project.movietheatre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Theatre;

@Repository
public interface TheatreRepository extends JpaRepository<Theatre, Long> {

}
