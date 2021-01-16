package com.github.mwolf1963.improvementtracker.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "departments")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "improvements"})
public class Department {

    @Id
    @Column(name="department_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int department_id;

    @Column(name= "name")
    private String name;

    @OneToMany(mappedBy = "department")
    private List<Improvement> improvements = new ArrayList<>();

    public Department() {

    }
    public Department(String name){
        this.name = name;
    }

    public int getDepartment_id() {
        return department_id;
    }

    public void setDepartment_id(int department_id) {
        this.department_id = department_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Improvement> getImprovements() {
        return improvements;
    }

    public void setImprovements(Improvement improvement) {
        this.improvements.add(improvement);
    }
}