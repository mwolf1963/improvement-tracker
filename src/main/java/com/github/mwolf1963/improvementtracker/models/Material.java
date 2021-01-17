package com.github.mwolf1963.improvementtracker.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="materials")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "parts"})
public class Material {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long material_id;
	
	@OneToMany(mappedBy="material")
    private List<Part> parts = new ArrayList<>();
	
	private String materialType;
	
	public Material() {}
	
	
	public Long getId() {
		return material_id;
	}
	public void setId(Long id) {
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
