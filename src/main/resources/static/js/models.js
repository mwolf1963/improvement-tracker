//Author: Matt Wolf
//Date: 2/16/21 (snow day)
//Desc: JS objects for form
class Department{
	constructor(){
		let depNameSelector = document.getElementById("department_select_id");
		this.department_id = depNameSelector[depNameSelector.selectedIndex].value;
		this.name =  depNameSelector[depNameSelector.selectedIndex].text;
		
	}
}
class Customer{
	constructor(){
		this.customerName = document.getElementById("customer_name_input_id").value;
	}
}
class Part{
	constructor(){
		this.partNumber = document.getElementById("part_number_input_id").value;
		this.material = new Material();		
	}
}
class Material{
	constructor(){
		let matTypeSelector = document.getElementById("material_type_select_id");
		this.id = matTypeSelector[matTypeSelector.selectedIndex].value;
		this.materialType =  matTypeSelector[matTypeSelector.selectedIndex].text;
	}
}
class ImprovementType{
	constructor(){
		let improvementTypeSelector = document.getElementById("improvement_type_select_id");
		this.improvement_id = improvementTypeSelector[improvementTypeSelector.selectedIndex].value;
		this.improvementType =  improvementTypeSelector[improvementTypeSelector.selectedIndex].text;
	}
}
class Improvement {
	constructor(){
	this.department =  new Department();
	this.customer = new Customer();
	this.part = new Part();
	this.improvementType = new ImprovementType();
	this.description = document.getElementById("problem_textarea_id").value;
	this.solution = document.getElementById("solution_textarea_id").value;
	this.result = document.getElementById("conclusion_textarea_id").value;
	}
}