package com.ensf614project.movietheatre.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.repositories.RegisteredUserRepository;

@Service
public class RegisteredUserService {
    private final RegisteredUserRepository registeredUserRepository;

    @Autowired
    public RegisteredUserService(RegisteredUserRepository registeredUserRepository) {
        this.registeredUserRepository = registeredUserRepository;
    }

    public RegisteredUser getRegisteredUser(String email, String password) {
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

        return registeredUserRepository.save(registeredUser);
    }
}
