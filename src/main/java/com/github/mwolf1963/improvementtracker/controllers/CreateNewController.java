package com.github.mwolf1963.improvementtracker.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.github.mwolf1963.improvementtracker.repositories.CustomerRepository;
import com.github.mwolf1963.improvementtracker.repositories.DepartmentRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementTypeRepository;
import com.github.mwolf1963.improvementtracker.repositories.MaterialRepository;
import com.github.mwolf1963.improvementtracker.repositories.PartRepository;

@Controller
public class CreateNewController {
	
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

	public CreateNewController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/createnew")
	public String CreateNew() {
		
		
		return "createnew";
	}

}
