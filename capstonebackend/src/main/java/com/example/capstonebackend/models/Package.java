package com.example.capstonebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity(name="packages")
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String product_name;
    @Column
    private int weight;
    @Column
    private float volume;

    @ManyToOne
    @JoinColumn(name = "order_id")
//    @JsonIgnoreProperties({"order"})
    private Order order;

    public Package(Order order, String productName, int weight, float volume) {
        this.order = order;
        this.product_name = productName;
        this.weight = weight;
        this.volume = volume;
    }

    public Package() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public float getVolume() {
        return volume;
    }

    public void setVolume(float volume) {
        this.volume = volume;
    }
}
