package com.ensf614project.movietheatre.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class CancellationCredit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate expiryDate;

    private double creditValue;

    private String creditCode;

    @Nullable
    @JsonIgnore
    @ManyToOne
    private RegisteredUser registeredUser;

    public CancellationCredit() {
    }

    public CancellationCredit(LocalDate expiryDate, double creditValue, String creditCode,
            RegisteredUser registeredUser) {
        this.expiryDate = expiryDate;
        this.creditValue = creditValue;
        this.creditCode = creditCode;
        this.registeredUser = registeredUser;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public double getCreditValue() {
        return creditValue;
    }

    public void setCreditValue(double creditValue) {
        this.creditValue = creditValue;
    }

    public String getCreditCode() {
        return creditCode;
    }

    public void setCreditCode(String creditCode) {
        this.creditCode = creditCode;
    }

    public RegisteredUser getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(RegisteredUser registeredUser) {
        this.registeredUser = registeredUser;
    }

}
