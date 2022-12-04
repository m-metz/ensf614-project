package com.ensf614project.movietheatre.services;

import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.Transaction;

public interface BillingService {
    abstract Transaction chargeTicket(Card card, double amount, String userEmail);

    abstract void chargeMembership(Card card, double amount, String userEmail);
}
