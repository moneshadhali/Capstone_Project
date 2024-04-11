package com.example.capstonebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String name;

    @Column
    private String region;

    @Column
    private float maxVolume;

    @ManyToOne
    @JsonIgnoreProperties({"users"})
    @JoinColumn(name = "warehouse_id")
    private Warehouse warehouse;

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user"})
    private List<Order> orders;

    public User( Warehouse warehouse, String name, String region, float maxVolume) {
        this.warehouse = warehouse;
        this.orders = new ArrayList<>();
        this.name = name;
        this.region = region;
        this.maxVolume = maxVolume;
    }

    public User() {

    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Warehouse getWarehouse() {
        return warehouse;
    }

    public void setWarehouse(Warehouse warehouse) {
        this.warehouse = warehouse;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public double getMaxVolume() {
        return maxVolume;
    }

    public void setMaxVolume(float maxVolume) {
        this.maxVolume = maxVolume;
    }

    public void addOrder(Order order){
        this.orders.add(order);
    }

    public void removeOrder(Order order){
        this.orders.add(order);
    }
}



