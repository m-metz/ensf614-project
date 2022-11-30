package com.ensf614project.movietheatre.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.springframework.lang.NonNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private double price;

    @NonNull
    @ManyToOne
    private Showtime showtime;

    private boolean isCancelled;

    private int seatNum;

    private int rowNum;

    @NonNull
    @ManyToOne
    @JsonIgnoreProperties("tickets")
    private Transaction transaction;

    public Ticket() {
    }

    public Ticket(double price, Showtime showtime, boolean isCancelled, int seatNum, int rowNum,
            Transaction transaction) {
        this.price = price;
        this.showtime = showtime;
        this.isCancelled = isCancelled;
        this.seatNum = seatNum;
        this.rowNum = rowNum;
        this.transaction = transaction;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Showtime getShowtime() {
        return showtime;
    }

    public void setShowtime(Showtime showtime) {
        this.showtime = showtime;
    }

    public boolean isCancelled() {
        return isCancelled;
    }

    public void setCancelled(boolean isCancelled) {
        this.isCancelled = isCancelled;
    }

    public int getSeatNum() {
        return seatNum;
    }

    public void setSeatNum(int seatNum) {
        this.seatNum = seatNum;
    }

    public int getRowNum() {
        return rowNum;
    }

    public void setRowNum(int rowNum) {
        this.rowNum = rowNum;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

}
