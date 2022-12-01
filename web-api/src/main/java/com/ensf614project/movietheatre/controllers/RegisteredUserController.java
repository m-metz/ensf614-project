package com.ensf614project.movietheatre.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.entities.RegisteredUser;
import com.ensf614project.movietheatre.services.RegisteredUserService;

@RestController
@RequestMapping(path = "/RegisteredUser")
public class RegisteredUserController {

    private final RegisteredUserService registeredUserService;

    @Autowired
    public RegisteredUserController(RegisteredUserService registeredUserService) {
        this.registeredUserService = registeredUserService;
    }

    @GetMapping("{email}/{password}")
    public RegisteredUser login(@PathVariable String email, @PathVariable String password) {
        return registeredUserService.getRegisteredUser(email, password);
    }

}
