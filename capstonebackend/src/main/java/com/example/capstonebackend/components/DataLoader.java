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

    public DataLoader() {
    }

    @Override

    public void run(ApplicationArguments args) throws Exception {

        //warehouses
        Warehouse warehouse1 = new Warehouse("London", "E8", 3000);
        warehouseRepository.save(warehouse1);

        //Users
        User user1 = new User(warehouse1, "Tommy", "London", 300);
        userRepository.save(user1);

        User user2 = new User(warehouse1, "Sahil", "Manchester", 300);
        userRepository.save(user2);

        User user3 = new User(warehouse1, "Marvellous", "Luton", 300);
        userRepository.save(user3);

        //Orders
        Order order1 = new Order(user1, "KT1 3PB", "32 Kingston Road", true, false, "Henry", 40 );
        orderRepository.save(order1);

        Order order2 = new Order(user2,"SE16 5AA", "18 Rotherhilthe Street", true, false, "Lisa", 20 );
        orderRepository.save(order2);

        Order order3 = new Order("NW3 3AX", "25 Primrose Hill Road", false, false, "Jeffrey", 50 );
        orderRepository.save(order3);

        Order order4 = new Order(user1, "NW1 2RT", "171 Euston Road", true, true, "Jenny", 60 );
        orderRepository.save(order4);

        Order order5 = new Order("SW11 51J", "44 Lavender Hill", false, false, "Martin", 20 );
        orderRepository.save(order5);

        Order order6 = new Order("N4 2LF", "201 Alexandra Grove", false, false, "Johnny", 50 );
        orderRepository.save(order6);

        Order order7 = new Order( "E1 7EZ", "80 Middlesex Street", false, false, "Sam", 60 );
        orderRepository.save(order7);

        //Packages
        Package package1 = new Package(order1, "Headphones", 1, 300);
        packageRepository.save(package1);

        Package package2 = new Package(order1, "iPhone", 2, 500);
        packageRepository.save(package2);

        Package package3 = new Package(order2, "iPhone", 2, 500);
        packageRepository.save(package3);

        Package package4 = new Package(order3, "iPad", 1, 100);
        packageRepository.save(package4);

        Package package5 = new Package(order1, "TV", 5, 1200);
        packageRepository.save(package5);

        Package package6 = new Package(order4, "Barbie", 1, 100);
        packageRepository.save(package6);

        Package package7 = new Package(order4, "Ken", 5, 1200);
        packageRepository.save(package7);

        Package package8 = new Package(order5, "Cat", 1, 100);
        packageRepository.save(package8);

        Package package9 = new Package(order6, "Dog", 5, 1200);
        packageRepository.save(package9);

        Package package10 = new Package(order7, "Mouse", 1, 100);
        packageRepository.save(package10);

        Package package11 = new Package(order7, "Squirrel", 5, 1050);
        packageRepository.save(package11);
    }
}