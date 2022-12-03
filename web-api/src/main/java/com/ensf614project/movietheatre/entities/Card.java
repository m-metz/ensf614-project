package com.ensf614project.movietheatre.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    private String number;

    private int cvv;

    @NonNull
    private String nameOfHolder;

    @NonNull
    private LocalDate expiryDate;

    @NonNull
    private String billingPostal;

    @NonNull
    private String type;

    @Nullable
    @ManyToOne
    @JsonBackReference
    private RegisteredUser registeredUser;

    public Card() {
    }

    public Card(String number, int cvv, String nameOfHolder, LocalDate expiryDate, String billingPostal, String type,
            RegisteredUser registeredUser) {
        this.number = number;
        this.cvv = cvv;
        this.nameOfHolder = nameOfHolder;
        this.expiryDate = expiryDate;
        this.billingPostal = billingPostal;
        this.type = type;
        this.registeredUser = registeredUser;
    }

    public String getLastFourDigits() {
        if (number.length() > 4) {
            return number.substring(number.length() - 4);
        } else {
            return number;
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public String getNameOfHolder() {
        return nameOfHolder;
    }

    public void setNameOfHolder(String nameOfHolder) {
        this.nameOfHolder = nameOfHolder;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getBillingPostal() {
        return billingPostal;
    }

    public void setBillingPostal(String billingPostal) {
        this.billingPostal = billingPostal;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public RegisteredUser getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(RegisteredUser registeredUser) {
        this.registeredUser = registeredUser;
    }

}
