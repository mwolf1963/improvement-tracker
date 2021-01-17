package com.github.mwolf1963.improvementtracker.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "improvements")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "images"})

public class Improvement {
    @Id
    @Column(name="improvement_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int improvement_id;
    @ManyToOne
    @JoinColumn(name= "department_id" , nullable = false)
    private Department department;
    @OneToMany
    @JoinColumn(name="image_id")
    private List<Image> images = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name="id", nullable = false)
    private Part part;
    private String description;
    private String solution;
    private String result;

    public Improvement() {
    }
    
    public Part getPart() {
		return part;
	}

	public void setPart(Part part) {
		this.part = part;
	}

	public int getImprovement_id() {
        return improvement_id;
    }

    public void setImprovement_id(int improvement_id) {
        this.improvement_id = improvement_id;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public String getDescription() {
        return description;
    }

    public List<Image> getImages() {
        return images;
    }

    public void addImages(Image images) {
        this.images.add(images);
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSolution() {
        return solution;
    }

    public void setSolution(String solution) {
        this.solution = solution;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }
}

