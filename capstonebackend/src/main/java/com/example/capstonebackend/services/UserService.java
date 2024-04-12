package com.example.capstonebackend.services;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.models.User;
import com.example.capstonebackend.models.UserDTO;
import com.example.capstonebackend.repositories.OrderRepository;
import com.example.capstonebackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    public User editUser(Long id, UserDTO userDTO) {
        User userToUpdate = userRepository.findById(id).get();
        String userName = userDTO.getName();
        userToUpdate.setName(userName);
        return userRepository.save(userToUpdate);
    }

    public List<Order> getUserOrders(long id) {
        User user = userRepository.findById(id).get();
        return user.getOrders();
    }

    public List<Order> getUserNotDeliveredOrders(long id) {
        List<Order> tempOrders = getUserOrders(id);
        List<Order> result = new ArrayList<>();
        for (Order order : tempOrders){
            if(!order.isDelivered()){
                result.add(order);
            }
        }
        return result;
    }

    public List<Order> getUserDeliveredOrders(Long id) {
        List<Order> tempOrders = getUserOrders(id);
        List<Order> result = new ArrayList<>();
        for (Order order : tempOrders){
            if(order.isDelivered()){
                result.add(order);
            }
        }
        return result;
    }


    public User assignOrderToUser(Long userId, Long orderId) {
        User assignedUser = userRepository.findById(userId).get();
        Order unassignedOrder = orderRepository.findById(orderId).get();
        unassignedOrder.setAccepted(true);
        unassignedOrder.setUser(assignedUser);

        orderRepository.save(unassignedOrder);
        userRepository.save(assignedUser);
        return assignedUser;
    }
}
