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
}