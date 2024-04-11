package com.example.capstonebackend.models;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String postcode;
    @Column
    private String address;
    @Column
    private Boolean isAccepted;
    @Column
    private Boolean isDelivered;
    @Column
    private String  customerName;
    @Column
    private float volume;

    @OneToMany(mappedBy = "order")
    private List <Package> packageList;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    public Order(Long id, String postcode, String address, Boolean isAccepted, Boolean isDelivered, String customerName, float volume) {
        this.id = id;
        this.postcode = postcode;
        this.address = address;
        this.isAccepted = isAccepted;
        this.isDelivered = isDelivered;
        this.customerName = customerName;
        this.volume = volume;
    }

    public Order() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPostcode() {
        return postcode;
    }

    public void setPostcode(String postcode) {
        this.postcode = postcode;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Boolean getAccepted() {
        return isAccepted;
    }

    public void setAccepted(Boolean accepted) {
        isAccepted = accepted;
    }

    public Boolean getDelivered() {
        return isDelivered;
    }

    public void setDelivered(Boolean delivered) {
        isDelivered = delivered;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public float getVolume() {
        return volume;
    }

    public void setVolume(float volume) {
        this.volume = volume;
    }
}
