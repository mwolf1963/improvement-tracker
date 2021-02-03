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
import com.github.mwolf1963.improvementtracker.models.Part;
import com.github.mwolf1963.improvementtracker.repositories.PartRepository;

@RestController
@RequestMapping("/api/v1/parts")
public class PartController {
	@Autowired
	private PartRepository partRepository;
    @GetMapping
    public List<Part> list(){
    	return partRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Part part){
    	partRepository.save(part);
    }
    
    @GetMapping("/{id}")
    public Part get(@PathVariable("id") int id){
        return partRepository.getOne(id);
    }

}
