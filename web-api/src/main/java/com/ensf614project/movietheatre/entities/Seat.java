package com.ensf614project.movietheatre.entities;

public class Seat {
    private int seatNum;

    private int rowNum;

    public Seat() {
    }

    public Seat(int seatNum, int rowNum) {
        this.seatNum = seatNum;
        this.rowNum = rowNum;
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

}
