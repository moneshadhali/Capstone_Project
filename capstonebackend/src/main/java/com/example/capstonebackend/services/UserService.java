package com.example.capstonebackend.services;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.models.User;
import com.example.capstonebackend.models.UserDTO;
import com.example.capstonebackend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

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
}
