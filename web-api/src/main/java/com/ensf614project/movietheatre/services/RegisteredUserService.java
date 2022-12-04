package com.ensf614project.movietheatre.services;

import java.time.LocalDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.ensf614project.movietheatre.entities.Card;
import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.repositories.RegisteredUserRepository;

@Service
public class RegisteredUserService {
    private final double MEMBERSHIP_COST = 20.0;
    private final BillingService billingService;
    private final RegisteredUserRepository registeredUserRepository;

    @Autowired
    public RegisteredUserService(RegisteredUserRepository registeredUserRepository) {
        this.registeredUserRepository = registeredUserRepository;
        this.billingService = new MockBillingService();
    }

    public RegisteredUser login(String email, String password) {
        RegisteredUser registeredUser =
            registeredUserRepository.findRegisteredUserByEmailAndPassword(email, password);
        if (registeredUser == null) {
            throw new IllegalStateException("Invalid credentials.");
        }
        return registeredUser;
    }

    public RegisteredUser getRegisteredUserByEmail(String email) {
        RegisteredUser RegisteredUser = registeredUserRepository.findRegisteredUserByEmail(email);

        return RegisteredUser;
    }

    public RegisteredUser add(RegisteredUser registeredUser) {
        /*
         * The DB checks this too, but we want a nicer error message.
         */
        RegisteredUser registeredUserExists =
            registeredUserRepository.findRegisteredUserByEmail(registeredUser.getEmail());
        if (registeredUserExists != null) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                "A user with that e-mail already exists.");
        }

        /*
         * Even though the API and DB supports multiple cards, the UI might not, so let's not allow
         * it.
         */
        if (registeredUser.getPaymentCards().size() > 1) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
                "More than one credit card is not supported.");
        }

        chargeForMembership(registeredUser);

        return registeredUserRepository.save(registeredUser);
    }

    public void renewMembership(String email) {
        RegisteredUser registeredUser = getRegisteredUserByEmail(email);
        chargeForMembership(registeredUser);
    }

    private void chargeForMembership(RegisteredUser registeredUser) {
        Card card = null;
        if (registeredUser.getPaymentCards().size() > 0) {
            card = registeredUser.getPaymentCards().get(0);
        }
        if (card == null) {
            throw new IllegalStateException("User does not have a credit or debit card.");
        }

        billingService.chargeMembership(card, MEMBERSHIP_COST, registeredUser.getEmail());

        /*
         * If we get here, no exceptions occured during billing, so the membership is valid.
         */

        /*
         * Membership term counts from today, so subtract a day from one year.
         * 
         * If membershipExpiry is expired, or doesn't exist.
         */
        if (registeredUser.getMembershipExpiry() == null
            || LocalDate.now().compareTo(registeredUser.getMembershipExpiry()) > 0) {
            registeredUser.setMembershipExpiry(LocalDate.now().plusYears(1).minusDays(1));
        }
        /*
         * else, add year to membership.
         */
        else {
            registeredUser.setMembershipExpiry(
                registeredUser.getMembershipExpiry().plusYears(1).minusDays(1));
        }
    }
}
