package com.github.mwolf1963.improvementtracker.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name= "improvementTypes")
@JsonIgnoreProperties({"hibernateLayInitializer", "handler", "images"})
public class ImprovementType {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int improvementType_id ;
    private String improvementType;

    public int getImprovement_id() {
        return improvementType_id;
    }

    public void setImprovement_id(int improvementType_id) {
        this.improvementType_id = improvementType_id;
    }

    public String getImprovementType() {
        return improvementType;
    }

    public void setImprovementType(String improvementType) {
        this.improvementType = improvementType;
    }
}
