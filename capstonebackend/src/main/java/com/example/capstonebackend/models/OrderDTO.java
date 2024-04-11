package com.example.capstonebackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

import java.util.List;

public class OrderDTO {

    private long id;
    private boolean isAccepted;
    private boolean isDelivered;

    public OrderDTO(boolean isAccepted, boolean isDelivered, long id) {
        this.isAccepted = isAccepted;
        this.isDelivered = isDelivered;
        this.id = id;
    }

    public OrderDTO(){}

    public boolean isAccepted() {
        return isAccepted;
    }

    public void setAccepted(boolean accepted) {
        isAccepted = accepted;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public void setDelivered(boolean delivered) {
        isDelivered = delivered;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
