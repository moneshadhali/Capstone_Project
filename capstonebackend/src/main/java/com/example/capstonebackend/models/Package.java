package com.example.capstonebackend.models;

import jakarta.persistence.*;

@Entity
@Table(name="packages")
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @Column
    private String productName;
    @Column
    private int weight;
    @Column
    private float volume;

    @ManyToOne
    @JoinColumn(name = "orderId", nullable = false)
    private Order order;

    public Package(String productName, int weight, float volume) {
        this.productName = productName;
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

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
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
