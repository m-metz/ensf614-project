package com.ensf614project.movietheatre.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ensf614project.movietheatre.entities.Theatre;
import com.ensf614project.movietheatre.repositories.TheatreRepository;

@Service
public class TheatreService {
    private final TheatreRepository theatreRepository;

    @Autowired
    public TheatreService(TheatreRepository theatreRepository) {
        this.theatreRepository = theatreRepository;
    }

    public List<Theatre> getAllTheatres() {
        return theatreRepository.findAll();
    }

}
