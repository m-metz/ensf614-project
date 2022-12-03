package com.ensf614project.movietheatre.entities;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;

import org.springframework.lang.Nullable;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class RegisteredUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email;

    private String name;

    private String address;

    @JsonIgnore
    private String password;

    @Nullable
    @OneToMany(mappedBy = "registeredUser")
    @JsonManagedReference
    private Set<Card> paymentCards;

    @Nullable
    @OneToMany(mappedBy = "registeredUser")
    @OrderBy("expiryDate ASC")
    private Set<CancellationCredit> cancellationCredits;

    public RegisteredUser() {
    }

    public RegisteredUser(String email, String name, String address, String password) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Card> getPaymentCards() {
        return paymentCards;
    }

    public void setPaymentCards(Set<Card> paymentCards) {
        this.paymentCards = paymentCards;
    }

    public Set<CancellationCredit> getCancellationCredits() {
        return cancellationCredits;
    }

    public void setCancellationCredits(Set<CancellationCredit> cancellationCredits) {
        this.cancellationCredits = cancellationCredits;
    }

}
