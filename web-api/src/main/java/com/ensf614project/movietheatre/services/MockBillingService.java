package com.ensf614project.movietheatre.services;

import java.time.LocalDateTime;

import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.Transaction;

public class MockBillingService implements BillingService {

    @Override
    public Transaction charge(Card card, double amount, String userEmail) {
        // validate card number provided is 16 numbers long
        if (card.getNumber().matches("[0-9]+") && card.getNumber().length() == 16) {
            throw new IllegalStateException("Invalid card number");
        }

        if (card.getCvv() < 100 || card.getCvv() > 999) {
            throw new IllegalStateException("Invalid cvv entered");
        }

        // assume transction was completed succesfully
        // mock generate a fake transaction number
        long leftLimit = 1L;
        long rightLimit = 1000000000000000L;
        long generatedLong = leftLimit + (long) (Math.random() * (rightLimit - leftLimit));

        return new Transaction(generatedLong,
                LocalDateTime.now(),
                userEmail, amount);
    }
}
