package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;


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
    @GetMapping
    public List<Improvement> list(){
    	return improvementRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Improvement improvement){
    	improvementRepository.save(improvement);
    }
    
    @GetMapping("/{id}")
    public Improvement get(@PathVariable("id") long id){
        return improvementRepository.getOne(id);
    }
}