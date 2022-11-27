package com.ensf614project.movietheatre.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ensf614project.movietheatre.entities.ExampleEntity;
import com.ensf614project.movietheatre.repositories.ExampleRepository;

@Service
public class ExampleService {
    private final ExampleRepository exampleRepository;

    @Autowired
    public ExampleService(ExampleRepository exampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    public List<ExampleEntity> getAllExampleEntities() {
        return exampleRepository.findAll();
    }

    public void addExampleEntity(ExampleEntity exampleEntity) {
        if (exampleEntity.getId() != null) {
            Optional<ExampleEntity> exampleEntityById =
                exampleRepository.findById(exampleEntity.getId());
            if (exampleEntityById.isPresent()) {
                throw new IllegalStateException("ExampleEntity already exists!");
            }
        }
        exampleRepository.save(exampleEntity);
    }
}
