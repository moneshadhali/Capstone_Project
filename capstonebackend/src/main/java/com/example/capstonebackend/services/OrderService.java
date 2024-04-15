package com.example.capstonebackend.services;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.models.OrderDTO;
import com.example.capstonebackend.repositories.OrderRepository;
import com.example.capstonebackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    UserRepository userRepository;

    public List<Order> getAllOrders(){
        return orderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id){
        return orderRepository.findById(id);
    }

    public Order createOrder(Order order){
        return orderRepository.save(order);
    }

//    public Order updateOrder(Long id, Order order){
//        if (orderRepository.existsById(id)){
//            order.setId(id);
//            return orderRepository.save(order);
//        }
//        return null;
//    }


    public Order updateDeliveryStatus(Long id, OrderDTO orderDTO){
        Order orderToUpdate = orderRepository.findById(id).get();
        orderToUpdate.setDelivered(orderDTO.isDelivered());
        orderRepository.save(orderToUpdate);
        return orderToUpdate;
    }

    public void deleteOrder(Long id){
        orderRepository.deleteById(id);
    }

    public Optional<Order> findOrder(Long id) {
        return orderRepository.findById(id);
    }


    public List<Order> getNonAcceptedOrders() {
        return orderRepository.findOrderByIsAcceptedIsFalse();
    }
}
