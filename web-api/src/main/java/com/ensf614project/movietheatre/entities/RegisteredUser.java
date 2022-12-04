package com.ensf614project.movietheatre.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import org.hibernate.annotations.NaturalId;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(
    /*
     * Only used for naming the unique key index in the DB for the NaturalId.
     * 
     * This makes SQL error messages easier to read from the front end instead of seeing a random 
     */
    uniqueConstraints = @UniqueConstraint(
        name = "UK_email",
        columnNames = {"email"}
    )
)
public class RegisteredUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    /**
     * Instead of using JsonIgnore and JsonGetter/JsonSetter, it is recommend to
     * use @JsonProperty(access = Access.READ_ONLY) or @JsonProperty(access = Access.WRITE_ONLY) on
     * a field. The following JsonGetter/JsonSetter/JsonIgnore method is a proof of concept for the
     * older way of doing it. See {@link Card.id}
     * 
     * In order to make this attribute read-only you need to make the field *and* the setter method
     * JsonIgnore, otherwise as soon as you enable reading from JsonGetter, it starts setting the
     * field from the setter.
     * 
     * Funny enough, for making the password write-only, you don't need the JsonIgnore on the field,
     * you only need it on the getter (while also setting JsonSetter on the setter).
     * 
     * In summary, JsonIgnore is needed on fields and methods to prevent setting, but JsonIgnore is
     * only needed on the getter to prevent reading.
     */
    @JsonIgnore
    private long id;

    /*
     * 250 utf8 char * 4 bytes = 1000 bytes. This is the limit for a MyISAM table MySQL 5.x for a
     * table that has a unique key.
     */
    @Column(length = 250)
    @NaturalId(mutable = false)
    private String email;

    private String name;

    private String address;

    @NonNull
    private String password = "";

    @JsonProperty(access = Access.READ_ONLY)
    private LocalDate membershipExpiry;

    @Nullable
    /*
     * Need orphanRemoval, else the card foreign key is just set to null.
     * 
     * Also this needs a @ManyToOne notation in the card or else it will create a new relationship
     * table instead of using the foreign key column in card.
     */
    @OneToMany(mappedBy = "registeredUser", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private ArrayList<Card> paymentCards;

    @Nullable
    @OneToMany(mappedBy = "registeredUser")
    @OrderBy("expiryDate ASC")
    private Set<CancellationCredit> cancellationCredits;

    public RegisteredUser() {}

    public RegisteredUser(String email, String name, String address, @NonNull String password) {
        this.email = email;
        this.name = name;
        this.address = address;
        this.password = password;
    }

    @JsonGetter
    public long getId() {
        return id;
    }

    @JsonIgnore
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

    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonSetter
    public void setPassword(@NonNull String password) {
        this.password = password;
    }

    public ArrayList<Card> getPaymentCards() {
        return paymentCards;
    }

    public void setPaymentCards(ArrayList<Card> paymentCards) {
        this.paymentCards = paymentCards;
    }

    public Set<CancellationCredit> getCancellationCredits() {
        return cancellationCredits;
    }

    public void setCancellationCredits(Set<CancellationCredit> cancellationCredits) {
        this.cancellationCredits = cancellationCredits;
    }

    public LocalDate getMembershipExpiry() {
        return membershipExpiry;
    }

    public void setMembershipExpiry(LocalDate membershipExpiry) {
        this.membershipExpiry = membershipExpiry;
    }
}
