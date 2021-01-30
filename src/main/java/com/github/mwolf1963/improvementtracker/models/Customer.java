package com.github.mwolf1963.improvementtracker.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import javax.persistence.*;

@Entity
@Table(name= "customers")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "images"})
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int customer_id;
    private String customerName;

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
}
