package com.example.capstonebackend.components;

import com.example.capstonebackend.models.Order;
import com.example.capstonebackend.models.Package;
import com.example.capstonebackend.models.User;
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

        Warehouse warehouse1 = new Warehouse("London", "E8", 3000);
        warehouseRepository.save(warehouse1);

        User user1 = new User("Tommy", "London", 300);
        userRepository.save(user1);

        User user2 = new User("Sahil", "Manchester", 300);
        userRepository.save(user2);

        User user3 = new User("Marvellous", "Luton", 300);
        userRepository.save(user3);

        warehouse1.addUser(user1);
        warehouse1.addUser(user2);
        warehouse1.addUser(user3);
        warehouseRepository.save(warehouse1);

        Package package1 = new Package("Headphones", 1, 300);
        packageRepository.save(package1);

        Package package2 = new Package("iPhone", 2, 500);
        packageRepository.save(package2);

        Package package3 = new Package("iPhone", 2, 500);
        packageRepository.save(package3);

        Package package4 = new Package("iPad", 1, 100);
        packageRepository.save(package4);

        Package package5 = new Package("TV", 5, 1200);
        packageRepository.save(package5);

        Order order1 = new Order("KT1 3PB", "32 Kingston Road", false, false, "Henry", 40 );
        orderRepository.save(order1);

        Order order2 = new Order("LU8 3JS", "109 Luton Way", false, false, "Lisa", 20 );
        orderRepository.save(order2);

        Order order3 = new Order("SE1  3JS", "109 Clapham Common", false, false, "Jeffrey", 50 );
        orderRepository.save(order3);

        order1.addPackage(package1);
        order1.addPackage(package2);
        order1.addPackage(package3);
        orderRepository.save(order1);


        user1.addOrder(order1);
        user1.addOrder(order2);
        user1.addOrder(order3);
        userRepository.save(user1);
    }


    public DataLoader() {
    }
}
