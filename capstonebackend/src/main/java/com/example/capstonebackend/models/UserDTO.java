package com.example.capstonebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

public class UserDTO {


    private List<OrderDTO> orders;

    private String name;

    public UserDTO(List<OrderDTO> orders, String name) {
        this.orders = orders;
        this.name = name;
    }

    public UserDTO() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
