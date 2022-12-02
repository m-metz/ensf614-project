package com.ensf614project.movietheatre.services;

import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.Transaction;

public interface BillingService {
    Transaction charge(Card card, double amount, String userEmail);
}
