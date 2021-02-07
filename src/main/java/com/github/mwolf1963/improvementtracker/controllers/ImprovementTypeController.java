package com.github.mwolf1963.improvementtracker.controllers;


import com.github.mwolf1963.improvementtracker.models.Improvement;
import com.github.mwolf1963.improvementtracker.models.ImprovementType;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementRepository;
import com.github.mwolf1963.improvementtracker.repositories.ImprovementTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody ImprovementType improvementType) {
        System.out.println(improvementType.toString());
        improvementTypeRepository.save(improvementType);
    }

}
