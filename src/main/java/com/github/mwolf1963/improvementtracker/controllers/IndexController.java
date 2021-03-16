package com.github.mwolf1963.improvementtracker.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.repositories.*;

@Controller
public class IndexController {

	@Autowired
	private ImprovementRepository improvementRepository;
	@GetMapping("/")
	public String index(Model model) {
		List<Improvement> improvements = improvementRepository.findAll();
		model.addAttribute("improvements", improvements);
		return "index";
	}
}
