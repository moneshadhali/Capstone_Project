package com.example.capstonebackend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PackageRepository  extends JpaRepository<Package, Long > {


}