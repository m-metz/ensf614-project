package com.ensf614project.movietheatre.services;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.CancellationCredit;
import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.repositories.CancellationCreditRepository;

@Service
public class CancellationService {
    private final CancellationCreditRepository cancellationCreditRepository;
    private final TicketService ticketService;
    private final RegisteredUserService registeredUserService;

    @Autowired
    public CancellationService(CancellationCreditRepository cancellationCreditRepository, TicketService ticketService,
            RegisteredUserService registeredUserService) {
        this.cancellationCreditRepository = cancellationCreditRepository;
        this.ticketService = ticketService;
        this.registeredUserService = registeredUserService;
    }

    public CancellationCredit cancellationCreditByCreditCode(String code) {
        return cancellationCreditRepository.findCancellationCreditByCreditCode(code);
    }

    public double chargeCancellationCredit(String code, double maxAmount) {
        CancellationCredit credit = cancellationCreditRepository.findCancellationCreditByCreditCode(code);

        // validate code exists, is not expired, and has credit remaining
        if (credit == null) {
            throw new IllegalStateException("Cancellation credit not found.");
        } else if (credit.getExpiryDate().isBefore(LocalDate.now())) {
            throw new IllegalStateException("Cancellation credit is expired.");
        } else if (credit.getCreditValue() == 0) {
            throw new IllegalStateException("Cancellation credit has no credit remaining.");
        }

        // charge the cancellation credit up to the maxAmount
        double amountCharged;
        if (credit.getCreditValue() > maxAmount) {
            credit.setCreditValue(credit.getCreditValue() - maxAmount);
            amountCharged = maxAmount;
        } else {
            amountCharged = credit.getCreditValue();
            credit.setCreditValue(0);
        }

        // save credit in database
        cancellationCreditRepository.save(credit);

        // return amount charged
        return amountCharged;
    }

    public ResponseEntity<?> cancelTicket(Long ticketId, String email) {
        // get ticket, will raise error if there is an error
        Ticket ticket = ticketService.getTicketById(ticketId);

        // validate ticket isn't cancelled
        if (ticket.isCancelled()) {
            throw new IllegalStateException("Ticket is already cancelled");
        }

        // validate within cancellation window
        // can only cancel ticket up tp 72 hours prior to showtime
        if (LocalDateTime.now().compareTo(ticket.getShowtimeDateTime().minusDays(3L)) > 0) {
            throw new IllegalStateException("Ticket not within cancellation window");
        }

        // validate user is registered and active
        // to do: validate user paid membership within last 12 months
        RegisteredUser user = registeredUserService.getRegisteredUserByEmail(ticket.getUserEmail());
        boolean userRegisteredAndActive = true;
        if (user == null) {
            userRegisteredAndActive = false;
        }

        // determine credit amount
        double creditValue;
        if (userRegisteredAndActive) {
            // full ticket price
            creditValue = ticket.getPrice();
        } else {
            // remove 15% admin fee, round to cents
            creditValue = BigDecimal.valueOf(ticket.getPrice() * 0.85).setScale(2, RoundingMode.HALF_DOWN)
                    .doubleValue();
        }

        // cancel ticket
        ticketService.cancelTicket(ticket);

        // create CancellationCredit
        CancellationCredit cancellationCredit = new CancellationCredit(LocalDate.now().plusYears(1L),
                creditValue, generateUniqueRandomCode(), user);

        // save CancellationCredit
        cancellationCreditRepository.save(cancellationCredit);

        // todo: send email with cancellationCredit to provided email and/or ticket
        // registered user

        return ResponseEntity.ok(cancellationCredit);

    }

    private String generateUniqueRandomCode() {
        String code = generatedRandomCode();

        // loop until generated random code is unique
        while (cancellationCreditRepository.findCancellationCreditByCreditCode(code) != null) {
            code = generatedRandomCode();
        }

        return code;
    }

    private String generatedRandomCode() {
        // pulled from https://www.baeldung.com/java-random-string
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10; // length
        Random random = new Random();

        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}
