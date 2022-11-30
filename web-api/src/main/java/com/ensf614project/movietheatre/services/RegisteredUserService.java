package com.ensf614project.movietheatre.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
        RegisteredUser RegisteredUser = registeredUserRepository.findRegisteredUserByEmailAndPassword(email,
                password);
        if (RegisteredUser == null) {
            throw new IllegalStateException("Invalid credentials");
        }
        return RegisteredUser;
    }

}
