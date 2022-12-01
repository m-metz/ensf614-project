package com.ensf614project.movietheatre.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.services.CancellationService;

@RestController
@RequestMapping(path = "/cancel")
public class CancellationController {

    private final CancellationService cancellationService;

    @Autowired
    public CancellationController(CancellationService cancellationService) {
        this.cancellationService = cancellationService;
    }

    @PostMapping(path = "/{ticketId}/{email}")
    public ResponseEntity<?> cancelTicket(@PathVariable Long ticketId, @PathVariable String email) {
        return cancellationService.cancelTicket(ticketId, email);
    }
}
