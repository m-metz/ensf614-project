package com.ensf614project.movietheatre.entities;

import java.util.List;

public class BuyTicketData {
    private String email;
    private long showtimeId;
    private List<Seat> seats;
    private Card paymentCard;
    private String cancellationCreditCode;

    public BuyTicketData() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getShowtimeId() {
        return showtimeId;
    }

    public void setShowtimeId(long showtimeId) {
        this.showtimeId = showtimeId;
    }

    public List<Seat> getSeats() {
        return seats;
    }

    public void setSeats(List<Seat> seats) {
        this.seats = seats;
    }

    public Card getPaymentCard() {
        return paymentCard;
    }

    public void setPaymentCard(Card paymentCard) {
        this.paymentCard = paymentCard;
    }

    public String getCancellationCreditCode() {
        return cancellationCreditCode;
    }

    public void setCancellationCreditCode(String cancellationCreditCode) {
        this.cancellationCreditCode = cancellationCreditCode;
    }

}
