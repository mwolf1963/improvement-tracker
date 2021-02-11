package com.github.mwolf1963.improvementtracker.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="parts")
public class Part {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int part_id;
	
	private String partNumber;
	@ManyToOne
    @JoinColumn(name= "material_id" , nullable = false)
	private Material material;
	
	public Part() {}
	
	public long getId() {
		return part_id;
	}
	public void setId(int id) {
		this.part_id = id;
	}
	public String getPartNumber() {
		return partNumber;
	}
	public void setPartNumber(String partNumber) {
		this.partNumber = partNumber;
	}
	public Material getMaterial() {
		return material;
	}
	public void setMaterial(Material material) {
		this.material = material;
	}
	
	

}
