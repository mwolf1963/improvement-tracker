package com.github.mwolf1963.improvementtracker.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.repositories.*;

@Controller
public class ViewImprovementController {
	@Autowired
	private ImprovementRepository improvementRepository;
	@GetMapping("/view_improvement")
	public String viewImprovement(@RequestParam(name="id", required=false, defaultValue="0") String name, Model model) {
		
		System.out.println(name);
		Optional<Improvement> imp = improvementRepository.findById(Integer.parseInt(name));
		if (imp != null) {
			Improvement improvement = imp.get();
			System.out.println(improvement.getImprovement_id());
			model.addAttribute("improvement_id", name);
			model.addAttribute("improvement", improvement);
			model.addAttribute("customer_name", improvement.getCustomer().getCustomerName());
			model.addAttribute("imp_type", improvement.getImprovementType().getImprovementType());
			model.addAttribute("material_type", improvement.getPart().getMaterial().getMaterialType());
			model.addAttribute("department_name", improvement.getDepartment().getName());
			System.out.println(improvement.getPart().getPartNumber());
			model.addAttribute("part_number", improvement.getPart().getPartNumber());
			model.addAttribute("problem", improvement.getDescription());
			model.addAttribute("solution", improvement.getSolution());
			model.addAttribute("conclusion", improvement.getResult());
		}
		return "viewimprovement";
	}
}
