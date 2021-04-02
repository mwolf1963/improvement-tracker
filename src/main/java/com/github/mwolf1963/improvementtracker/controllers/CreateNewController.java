package com.github.mwolf1963.improvementtracker.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CreateNewController {

	public CreateNewController() {
		// TODO Auto-generated constructor stub
	}
	
	@GetMapping("/createnew")
	public String CreateNew() {
		
		
		return "createnew";
	}

}
