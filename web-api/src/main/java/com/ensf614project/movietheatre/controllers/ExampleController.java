package com.ensf614project.movietheatre.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ensf614project.movietheatre.entities.ExampleEntity;
import com.ensf614project.movietheatre.services.ExampleService;

@RestController
@RequestMapping(path = "api/v1/example-entity")
public class ExampleController {

    private final ExampleService exampleService;

    @Autowired
    public ExampleController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }

    @GetMapping
    public List<ExampleEntity> getExampleEntities() {
        return exampleService.getAllExampleEntities();
    }

    @PostMapping
    public void addExampleEntity(@RequestBody ExampleEntity exampleEntity) {
        exampleService.addExampleEntity(exampleEntity);
    }
}

