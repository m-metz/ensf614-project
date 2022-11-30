package com.ensf614project.movietheatre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Card;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

}
