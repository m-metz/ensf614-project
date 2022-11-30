package com.ensf614project.movietheatre.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ensf614project.movietheatre.entities.Ticket;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Long> {
    public interface TakenSeat {
        int getRowNum();

        int getSeatNum();

    }

    List<TakenSeat> getTicketByShowtimeIdAndIsCancelledOrderByRowNumAscSeatNumAsc(Long showtimeId, boolean isCancelled);

    Optional<Ticket> findTicketById(Long ticketId);

    @Query(value = "Select * from ticket, transaction where transaction.user_email=?1 and ticket.transaction_id=transaction.id", nativeQuery = true)
    List<Ticket> getTicketsByTransactionEmail(String email);
}
