package com.github.mwolf1963.improvementtracker.models;

import javax.persistence.*;

@Entity
@Table(name="images")
public class Image {

    @Id
    @Column(name= "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String url;
    
    @ManyToOne
    @JoinColumn(name= "improvement_id" , nullable = false)
    private Improvement improvement;
    
	public Improvement getImprovement() {
		return improvement;
	}
	public void setImprovement(Improvement improvement) {
		this.improvement = improvement;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
    
    
}
