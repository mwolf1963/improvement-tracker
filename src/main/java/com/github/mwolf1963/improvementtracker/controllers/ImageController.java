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
import com.github.mwolf1963.improvementtracker.models.Image;
import com.github.mwolf1963.improvementtracker.repositories.ImageRepository;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {
	@Autowired
	private ImageRepository imageRepository;
    @GetMapping
    public List<Image> list(){
    	return imageRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public  void  create(@RequestBody Image image){
    	imageRepository.save(image);
    }
    
    @GetMapping("/{id}")
    public Image get(@PathVariable("id") long id){
        return imageRepository.getOne(id);
    }
}
