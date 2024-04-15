package com.example.capstonebackend.controllers;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.models.OrderDTO;
import com.example.capstonebackend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    OrderService orderService;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/not-accepted")
    public ResponseEntity<List<Order>> getNonAcceptedOrders() {
        List<Order> orders = orderService.getNonAcceptedOrders();
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        Optional<Order> foundOrder = orderService.getOrderById(id);
        if (foundOrder.isPresent()){
            return new ResponseEntity<>(foundOrder.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestBody OrderDTO orderDTO){
        Optional <Order> order = orderService.getOrderById(id);
        if(order.isPresent()){
            Order orderToUpdate = orderService.updateDeliveryStatus(id, orderDTO);
            return new ResponseEntity<>(orderToUpdate, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_MODIFIED);
    }
}
