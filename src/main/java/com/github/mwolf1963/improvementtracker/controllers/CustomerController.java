package com.github.mwolf1963.improvementtracker.controllers;

import com.github.mwolf1963.improvementtracker.models.Customer;
import com.github.mwolf1963.improvementtracker.models.Department;
import com.github.mwolf1963.improvementtracker.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {
    @Autowired
    private CustomerRepository customerRepository;
    @GetMapping
    public List<Customer> list(){
        return customerRepository.findAll();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Customer customer){
        customerRepository.save(customer);
    }

    @GetMapping("/{id}")
    public Customer get(@PathVariable("id") int id){
        return customerRepository.getOne(id);
    }
}
