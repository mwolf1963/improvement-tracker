package com.github.mwolf1963.improvementtracker.controllers;


import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.models.ImprovementType;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/improvementTypes")
public class ImprovementTypeController {
    @Autowired
    private ImprovementTypeRepository improvementTypeRepository;
    @GetMapping
    public List<ImprovementType> list(){
        System.out.println("in the getimprovements API");
        return improvementTypeRepository.findAll();
    }

}
