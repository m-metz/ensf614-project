package com.ensf614project.movietheatre.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.CancellationCredit;

@Repository
public interface CancellationCreditRepository extends JpaRepository<CancellationCredit, Long> {
    CancellationCredit findCancellationCreditByCreditCode(String code);
}
