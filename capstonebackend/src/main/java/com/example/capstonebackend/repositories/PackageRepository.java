package com.example.capstonebackend.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.capstonebackend.models.Package;



@Repository
public interface PackageRepository  extends JpaRepository<Package, Long > {


}
