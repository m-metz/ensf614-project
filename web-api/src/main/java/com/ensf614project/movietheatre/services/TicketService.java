package com.ensf614project.movietheatre.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.repositories.TicketRepository;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<?> getTakenSeats(Long showtimeId) {
        return ticketRepository.getTicketByShowtimeIdAndIsCancelledOrderByRowNumAscSeatNumAsc(showtimeId, false);
    }

    public Ticket getTicketById(Long ticketId) {
        Optional<Ticket> ticket = ticketRepository.findTicketById(ticketId);
        if (!ticket.isPresent()) {
            throw new IllegalStateException("Ticket not found");
        }
        return ticket.get();
    }

}
