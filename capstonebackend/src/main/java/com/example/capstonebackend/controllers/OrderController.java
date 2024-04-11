package com.example.capstonebackend.controllers;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.services.OrderService;
import org.apache.coyote.Response;
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

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id){
        Optional<Order> foundOrder = orderService.getOrderById(id);
        if (foundOrder.isPresent()){
            return new ResponseEntity<>(null, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

//    @PostMapping("/{id}")
//    public ResponseEntity<Order> updateOrder(@RequestBody Order order, @PathVariable Long id){
//        Order newOrder = orderService.updateOrder(order, id);
//        return new ResponseEntity<>(order, HttpStatus.CREATED);
//    }
//
//    @PutMapping (value = "/{id}")
//    public ResponseEntity<Order> updateChocolate(@RequestBody Order order, @PathVariable Long id){
//        Order order = orderService.updateOrder(order, id);
//        return new ResponseEntity<>(order, HttpStatus.OK);
//    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

}
