package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.mwolf1963.improvementtracker.models.Department;
import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.models.ImprovementType;
import com.github.mwolf1963.improvementtracker.models.Material;
import com.github.mwolf1963.improvementtracker.repositories.CustomerRepository;
import com.github.mwolf1963.improvementtracker.repositories.DepartmentRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementTypeRepository;
import com.github.mwolf1963.improvementtracker.repositories.MaterialRepository;
import com.github.mwolf1963.improvementtracker.repositories.PartRepository;

@Controller
public class CreateNewController {
	
	
	@Autowired
	private MaterialRepository materialRepository;
	@Autowired
	private DepartmentRepository departmentRepository;
	@Autowired
	private ImprovementTypeRepository improvementTypeRepository;
	@Autowired
	private ImprovementRepository improvementRepository;

	public CreateNewController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/createnew")
	public String CreateNew(Model model) {	
		List<Material> materials = materialRepository.findAll();
		List<ImprovementType> improvementTypes = improvementTypeRepository.findAll();
		List<Department> departments = departmentRepository.findAll();
		model.addAttribute("materials", materials);
		model.addAttribute("improvementTypes", improvementTypes);
		model.addAttribute("departments", departments);
		return "createnew";
	}
	
	//this needs fixed
	@PostMapping(path="/createnewimprovement")
	public String CreateNewImprovement( @RequestParam Map<String, String> newImprovement, Model model) {
		Improvement improvement = new Improvement();
		//get the data out of the Map and save it 
		
		improvementRepository.saveAndFlush(improvement);
		return "improvementcreated";
	}

}
