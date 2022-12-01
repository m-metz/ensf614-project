package com.ensf614project.movietheatre.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.lang.NonNull;

@Entity
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NonNull
    private String title;

    @NonNull
    private LocalDate releaseDate;

    private String director;

    private boolean isPublic;

    private boolean isActive;

    private String genre;

    private String image;

    public Movie() {
    }

    public Movie(String title, LocalDate releaseDate, boolean isPublic, boolean isActive) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.isPublic = isPublic;
        this.isActive = isActive;
    }

    public Movie(String title, LocalDate releaseDate, String director, boolean isPublic, boolean isActive,
            String genre, String image) {
        this.title = title;
        this.releaseDate = releaseDate;
        this.director = director;
        this.isPublic = isPublic;
        this.isActive = isActive;
        this.genre = genre;
        this.image = image;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public boolean isPublic() {
        return isPublic;
    }

    public void setPublic(boolean isPublic) {
        this.isPublic = isPublic;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

}
