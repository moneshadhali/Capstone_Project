package com.example.capstonebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="orders")
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

    @OneToMany(mappedBy = "orders")
    @JsonIgnoreProperties({"orders"})
    private List <Package> packages;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    public Order(String postcode, String address, Boolean isAccepted, Boolean isDelivered, String customerName, float volume) {
        this.postcode = postcode;
        this.address = address;
        this.isAccepted = isAccepted;
        this.isDelivered = isDelivered;
        this.customerName = customerName;
        this.volume = volume;
        this.packages = new ArrayList<>();
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

    public void addPackage(Package newPackage){
        this.packages.add(newPackage);
    }

    public void removePackage(Package newPackage){
        this.packages.remove(newPackage);
    }
}
