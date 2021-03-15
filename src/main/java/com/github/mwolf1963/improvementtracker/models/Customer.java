package com.github.mwolf1963.improvementtracker.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name= "customers")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "images"})
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customer_id;

    private String customerName;
    
    @OneToMany
    @JoinColumn(name="part_id")
    private List<Part> parts = new ArrayList<>();
    
    public List<Part> getParts(){
    	return parts;
    }
    public void addPart(Part part) {
    	parts.add(part);
    }
    public int getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(int customer_id) {
        this.customer_id = customer_id;
    }

    public String getCustomerName() {
        return customerName;
    }
    
    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
    
    @Override
    public String toString() {
    	return "Customer ID: " + this.customer_id + "\n Customer Name : " + this.customerName + "\n";
    }
}
