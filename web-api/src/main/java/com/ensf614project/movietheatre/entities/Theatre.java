package com.ensf614project.movietheatre.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Theatre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    private String name;

    @NonNull
    private String address;

    @JsonIgnore
    @OneToMany(mappedBy = "theatre", fetch = FetchType.LAZY)
    private Set<Screen> screens;

    public Theatre() {
    }

    public Theatre(String name, String address) {
        this.name = name;
        this.address = address;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Set<Screen> getScreens() {
        return screens;
    }

    public void setScreens(Set<Screen> screens) {
        this.screens = screens;
    }

}
