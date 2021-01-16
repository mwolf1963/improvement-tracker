package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.github.mwolf1963.improvementtracker.models.Department;
import com.github.mwolf1963.improvementtracker.repositories.DepartmentRepository;

import org.springframework.http.HttpStatus;


@RestController
@RequestMapping("/api/v1/departments")

public class DepartmentController {
	@Autowired
	private DepartmentRepository departmentRepository;
    @GetMapping
    public List<Department> list(){
    	return departmentRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Department department){
    	departmentRepository.save(department);
    }
    
    @GetMapping("/{id}")
    public Department get(@PathVariable("id") long id){
        return departmentRepository.getOne(id);
    }

}
