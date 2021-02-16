package com.github.mwolf1963.improvementtracker.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="materials")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "parts"})
public class Material{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int material_id;
	
	@OneToMany(mappedBy="material")
    private List<Part> parts = new ArrayList<>();
	@Column(name="material_type")
	private String materialType;
	
	public Material() {}
	
	// this has not been tested since extending the super class. may or may not work
	public int getId() {
		return material_id;
	}
	public void setId(int id) {
		this.material_id = id;
	}
	public List<Part> getParts() {
		return parts;
	}
	public void addPart(Part part) {
		this.parts.add(part);
	}
	public String getMaterialType() {
		return materialType;
	}
	public void setMaterialType(String materialType) {
		this.materialType = materialType;
	}
	
	
}
