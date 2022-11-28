package com.ensf614project.movietheatre.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ensf614project.movietheatre.entities.Theatre;
import com.ensf614project.movietheatre.services.TheatreService;

@RestController
@RequestMapping(path = "/theatre")
public class TheatreController {
    private final TheatreService theatreService;

    @Autowired
    public TheatreController(TheatreService theatreService) {
        this.theatreService = theatreService;
    }

    @GetMapping(path = "/all")
    public List<Theatre> getAllTheatres() {
        return theatreService.getAllTheatres();
    }
}
