package com.ensf614project.movietheatre.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    public interface Seat {
        int getSeatNum();

        int getRowNum();
    }

    List<Seat> getTicketByShowtimeIdAndIsCancelledOrderByRowNumAscSeatNumAsc(Long showtimeId, boolean isCancelled);

    Optional<Ticket> findTicketById(Long ticketId);
}
