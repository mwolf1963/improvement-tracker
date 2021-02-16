//Author: Matt Wolf
//Date: 2/16/21 (snow day)
//Desc: JS objects for form
class Department(){
	constructor(){
		let depNameSelector = document.getElementById("department_select_id");
		this.department_id = depNameSelector[depNameSelector.selectedIndex].text;
		this.name =  depNameSelector[depNameSelector.selectedIndex].text;
	}
}
class Customer(){
	constructor(){
		this.customerName = document.getElementById("customer_name_input_id").text;
	}
}
class Part(){
	constructor(){
		this.partNumber = document.getElementById("part_number_input_id");
		this.material = new Material();		
	}
}
class Material(){
	
}
class Improvement {
	constructor(){
	this.department =  new Department();
	this.customer = new Customer();
	this.part = new Part();
	}
}