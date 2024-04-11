package com.example.capstonebackend.components;

import com.example.capstonebackend.models.Warehouse;
import com.example.capstonebackend.repositories.OrderRepository;
import com.example.capstonebackend.repositories.PackageRepository;
import com.example.capstonebackend.repositories.UserRepository;
import com.example.capstonebackend.repositories.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    OrderRepository orderRepository;

    @Autowired
    PackageRepository packageRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    WarehouseRepository warehouseRepository;
    @Override
    public void run(ApplicationArguments args) throws Exception {

        //Warehouse warehouse = new Warehouse("London", "E8", 5);

    }

    public DataLoader() {
    }
}
