package com.ensf614project.movietheatre.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.repositories.TicketRepository;
import com.ensf614project.movietheatre.repositories.TicketRepository.TakenSeat;

@Service
public class TicketService {
    private final TicketRepository ticketRepository;

    @Autowired
    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }

    public List<?> getTakenSeats(Long showtimeId) {
        // get all taken seats
        List<TakenSeat> takenSeats = ticketRepository.getTicketByShowtimeIdAndIsCancelledOrderByRowNumAscSeatNumAsc(
                showtimeId,
                false);

        // make list with all available seats
        List<Seat> allSeats = new ArrayList<Seat>(100);
        for (int rowNum = 1; rowNum <= 10; rowNum++) {
            for (int seatNum = 1; seatNum <= 10; seatNum++) {
                allSeats.add(new Seat(rowNum, seatNum, true));
            }
        }

        // mark taken seats as not available
        int index;
        for (int i = 0; i < takenSeats.size(); i++) {
            index = (takenSeats.get(i).getRowNum() - 1) * 10 +
                    takenSeats.get(i).getSeatNum() - 1;
            allSeats.get(index).available = false;
        }

        return allSeats;
    }

    public Ticket getTicketById(Long ticketId) {
        Optional<Ticket> ticket = ticketRepository.findTicketById(ticketId);
        if (!ticket.isPresent()) {
            throw new IllegalStateException("Ticket not found");
        }
        return ticket.get();
    }

    public List<Ticket> getTicketsForUser(String email) {
        return ticketRepository.getTicketsByTransactionEmail(email);
    }

    private class Seat {
        private int rowNum;

        private int seatNum;

        private boolean available;

        public Seat() {
        }

        public Seat(int rowNum, int seatNum, boolean available) {
            this.rowNum = rowNum;
            this.seatNum = seatNum;
            this.available = available;
        }

        public int getRowNum() {
            return rowNum;
        }

        public void setRowNum(int rowNum) {
            this.rowNum = rowNum;
        }

        public int getSeatNum() {
            return seatNum;
        }

        public void setSeatNum(int seatNum) {
            this.seatNum = seatNum;
        }

        public boolean isAvailable() {
            return available;
        }

        public void setAvailable(boolean available) {
            this.available = available;
        }

    }

}
