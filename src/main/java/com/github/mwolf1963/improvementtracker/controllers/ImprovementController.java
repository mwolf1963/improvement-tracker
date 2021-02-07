package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;
import java.util.Optional;


import com.github.mwolf1963.improvementtracker.repositories.CustomerRepository;
import com.github.mwolf1963.improvementtracker.repositories.MaterialRepository;
import com.github.mwolf1963.improvementtracker.repositories.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;

@RestController
@RequestMapping("/api/v1/improvements")
public class ImprovementController {
	@Autowired
	private ImprovementRepository improvementRepository;
	@Autowired
    CustomerRepository customerRepository;
	@Autowired
    PartRepository partRepository;
    @GetMapping
    public List<Improvement> list(){
    	System.out.println("in the getimprovements API");
    	return improvementRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Improvement improvement){
        customerRepository.save(improvement.getCustomer());
        partRepository.save(improvement.getPart());
    	improvementRepository.save(improvement);
    }
    
    @GetMapping("/{id}")
    public Optional<Improvement> get(@PathVariable("id") int id){
        return improvementRepository.findById(id);
    }
}
