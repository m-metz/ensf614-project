package com.ensf614project.movietheatre.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.entities.Ticket;
import com.ensf614project.movietheatre.services.TicketService;

@RestController
@RequestMapping(path = "/ticket")
@CrossOrigin
public class TicketController {

    private final TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    @GetMapping("{ticketId}")
    public Ticket getTicketById(@PathVariable Long ticketId) {
        return ticketService.getTicketById(ticketId);
    }

    @GetMapping("/email/{email}")
    public List<Ticket> getTicketById(@PathVariable String email) {
        return ticketService.getTicketsForUser(email);
    }
}
