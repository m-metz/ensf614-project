package com.ensf614project.movietheatre.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class ExampleEntity {
    @Id
    @GeneratedValue(generator = "example_seq")
    private Long id;

    private String exampleStr;

    public ExampleEntity() {}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExampleStr() {
        return exampleStr;
    }

    public void setExampleStr(String exampleStr) {
        this.exampleStr = exampleStr;
    }
}
