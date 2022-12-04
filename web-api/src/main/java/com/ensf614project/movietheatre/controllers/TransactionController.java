package com.ensf614project.movietheatre.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.entities.BuyTicketData;
import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.services.TransactionService;

@RestController
@RequestMapping(path = "/transaction")
@CrossOrigin
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @PostMapping("/tickets")
    public List<Ticket> buyTickets(@RequestBody BuyTicketData body) {

        return transactionService.buyTickets(body.getEmail(), body.getShowtimeId(), body.getSeats(),
                body.getPaymentCard(),
                body.getCancellationCreditCode(), 9.99);
    }

}
