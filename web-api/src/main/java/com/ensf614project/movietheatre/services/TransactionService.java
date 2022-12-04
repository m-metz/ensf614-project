package com.ensf614project.movietheatre.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.entities.Seat;
import com.ensf614project.movietheatre.entities.Showtime;
import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.entities.Transaction;
import com.ensf614project.movietheatre.repositories.TicketRepository.TakenSeat;
import com.ensf614project.movietheatre.repositories.TransactionRepository;

@Service
public class TransactionService {
    private final TransactionRepository TransactionRepository;
    private final TicketService ticketService;
    private final ShowtimeService showtimeService;
    private final RegisteredUserService registeredUserService;
    private final CancellationService cancellationService;
    private final BillingService billingService;

    @Autowired
    public TransactionService(com.ensf614project.movietheatre.repositories.TransactionRepository transactionRepository,
            TicketService ticketService, ShowtimeService showtimeService, RegisteredUserService registeredUserService,
            CancellationService cancellationService) {
        TransactionRepository = transactionRepository;
        this.ticketService = ticketService;
        this.showtimeService = showtimeService;
        this.registeredUserService = registeredUserService;
        this.cancellationService = cancellationService;
        // using singleton to access shared billing service
        this.billingService = BillingServiceSingleton.getOnlyBillingService();
    }

    public List<Ticket> buyTickets(String email, long showtimeId, List<Seat> seats, Card paymentCard,
            String creditCode, double ticketPrice) {

        // validate at least one seat was selected
        if (seats == null || seats.size() == 0) {
            throw new IllegalStateException("No seats selected.");
        }

        // check if email belongs to registered user
        RegisteredUser user = registeredUserService.getRegisteredUserByEmail(email);

        // validate user is registered and user paid membership within last 12 months
        boolean isRegisteredUser = true;
        if (user == null) {
            isRegisteredUser = false;
        } else if (user.getMembershipExpiry().isBefore(LocalDate.now())) {
            isRegisteredUser = false;
        }

        // validate showtime exists and is active
        Showtime showtime = showtimeService.getShowtimeById(showtimeId);

        if (!showtime.isMovieActive()) {
            throw new IllegalStateException("Can't purchace tickets to showtime at this time.");
        }

        // get all taken seats for the showtime
        List<TakenSeat> takenSeats = ticketService.getTakenSeats(showtimeId);

        // if showtime is not public
        // validate user is registered
        if (!showtime.isMoviePublic()) {
            if (!isRegisteredUser) {
                throw new IllegalStateException("Only registered users can purchace tickets to showtime at this time.");
            }

            // enforce only 10% of tickets can be sold
            if ((takenSeats.size() + seats.size()) > (showtime.getScreenCapcity() * 0.1)) {
                throw new IllegalStateException("Only 10% of seats can be sold before public release.");
            }
        }

        // validate all seats are available in the showtime
        Seat desiredSeat;
        for (int i = 0; i < seats.size(); i++) {
            desiredSeat = seats.get(i);
            for (int j = 0; j < takenSeats.size(); j++) {
                if (takenSeats.get(j).getSeatNum() == desiredSeat.getSeatNum()
                        && takenSeats.get(j).getRowNum() == desiredSeat.getRowNum()) {
                    throw new IllegalStateException("Seat in row " + desiredSeat.getRowNum() + ", number "
                            + desiredSeat.getSeatNum() + " is already taken.");
                }
            }
        }

        // validate there are no duplicate desired seats and each seat is valid
        for (int i = 0; i < seats.size(); i++) {
            desiredSeat = seats.get(i);
            if (desiredSeat.getSeatNum() > 10 || desiredSeat.getSeatNum() < 1 || desiredSeat.getRowNum() > 10
                    || desiredSeat.getRowNum() < 1) {
                throw new IllegalStateException("Seat in row " + desiredSeat.getRowNum() + ", number "
                        + desiredSeat.getSeatNum() + " is invalid.");
            }

            for (int j = i + 1; j < seats.size(); j++) {
                if (seats.get(j).getSeatNum() == desiredSeat.getSeatNum()
                        && seats.get(j).getRowNum() == desiredSeat.getRowNum()) {
                    throw new IllegalStateException("Seat in row " + desiredSeat.getRowNum() + ", number "
                            + desiredSeat.getSeatNum() + " was selected multiple times.");
                }
            }
        }

        // calculate total cost
        // can add GST here
        double totalPrice = ticketPrice * seats.size();

        // charge cancellation credit if it was provided
        double cancellationCreditUsed = 0;
        if (creditCode != null && creditCode != "") {
            cancellationCreditUsed = cancellationService.chargeCancellationCredit(creditCode, totalPrice);
        }

        // charge paymentcard if amount to charge greater than 0
        // billing service will raise error if there was a problem charging the card
        double amountToChargeCard = totalPrice - cancellationCreditUsed;
        Transaction transaction;

        if (amountToChargeCard > 0) {
            // create and save transaction
            transaction = billingService.chargeTicket(paymentCard, amountToChargeCard, email);
            TransactionRepository.save(transaction);
        } else {
            transaction = new Transaction(LocalDateTime.now(), email, 0);
            TransactionRepository.save(transaction);
        }

        // create and save tickets
        List<Ticket> tickets = new ArrayList<Ticket>();
        for (int i = 0; i < seats.size(); i++) {
            Ticket ticket = new Ticket(ticketPrice, showtime, false, seats.get(i).getSeatNum(),
                    seats.get(i).getRowNum(), transaction);
            ticketService.saveTicket(ticket);
            tickets.add(ticket);
        }

        // return created tickets
        return tickets;
    }

}
