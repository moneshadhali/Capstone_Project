package com.example.capstonebackend.repositories;

import com.example.capstonebackend.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long > {

    @Query
    public List<Order> findOrderByIsAcceptedIsFalse();
}