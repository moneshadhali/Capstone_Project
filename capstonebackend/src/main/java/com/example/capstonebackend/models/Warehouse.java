package com.example.capstonebackend.models;

public class Warehouse {
    private long id;
    private String name;
    private String location;
    private int area;

    public Warehouse(long id, String name, String location, int area) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.area = area;
    }

    public Warehouse() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }
}

