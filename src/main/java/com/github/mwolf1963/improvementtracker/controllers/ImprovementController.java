package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;
import java.util.Optional;


import com.github.mwolf1963.improvementtracker.models.Customer;
import com.github.mwolf1963.improvementtracker.models.Department;
import com.github.mwolf1963.improvementtracker.models.ImprovementType;
import com.github.mwolf1963.improvementtracker.models.Material;
import com.github.mwolf1963.improvementtracker.models.Part;
import com.github.mwolf1963.improvementtracker.repositories.*;
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

@RestController
@RequestMapping("/api/v1/improvements")
public class ImprovementController {
	@Autowired
	private ImprovementRepository improvementRepository;
	@Autowired
    private CustomerRepository customerRepository;
	@Autowired
    private PartRepository partRepository;
	@Autowired
	private MaterialRepository materialRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	@Autowired
	private ImprovementTypeRepository improvementTypeRepository;
    @GetMapping
    public List<Improvement> list(){
    	System.out.println("in the getimprovements API");
    	return improvementRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Improvement improvement){
    	//just to prove we are getting an improvement
    	System.out.println(improvement.getDescription());
    	System.out.println(improvement.getPart().getMaterial().getId());
    	//save anything that is new to the database
    	improvement.setDepartment(departmentRepository.saveAndFlush(improvement.getDepartment()));
    	improvement.setCustomer(customerRepository.saveAndFlush(improvement.getCustomer()));
    	improvement.setImprovementType(improvementTypeRepository.saveAndFlush(improvement.getImprovementType()));
    	Material mat =materialRepository.saveAndFlush(improvement.getPart().getMaterial());
    	System.out.println(mat.getId());
    	
    	Part part = partRepository.getOneByPartNumber(improvement.getPart().getPartNumber());
    	if(part == null) {
    		System.out.println("in part == null");
    		improvement.getPart().setMaterial(mat);
    		partRepository.saveAndFlush(improvement.getPart());
    		
    	} else {
    		System.out.println("in else");
    		improvement.setPart(part);
    	}
    	improvementRepository.saveAndFlush(improvement);
    }
    
    @GetMapping("/{id}")
    public Optional<Improvement> get(@PathVariable("id") int id){
        return improvementRepository.findById(id);
    }
    
}
