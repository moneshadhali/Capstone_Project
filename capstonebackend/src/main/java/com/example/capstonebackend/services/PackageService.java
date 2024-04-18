package com.example.capstonebackend.services;

import com.example.capstonebackend.models.Package;
import com.example.capstonebackend.repositories.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PackageService {

    @Autowired
    PackageRepository packageRepository;

    public List<Package> getAllPackages() {
        return packageRepository.findAll();
    }

    public Optional<Package> getPackageById(Long id){
        return packageRepository.findById(id);
    }

    public Package createPackage(Package newPackage){
        return packageRepository.save(newPackage);
    }

    public Package updatePackage(Long id, Package newPackage){
        if (packageRepository.existsById(id)){
            newPackage.setId(id);
            return packageRepository.save(newPackage);
        }
        return null;
    }

    public void deletePackage(Long id){
        packageRepository.deleteById(id);
    }
}