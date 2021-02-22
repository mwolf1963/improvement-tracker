//Author: Matt Wolf
//Date: 1-31-21
//Desc: this script controls all ajax and dom manipulation. in need of refactor.

var improvementsArray;
var materialsArray;

function init(){
	console.log("in init");
	let create = document.getElementById("create-improvement");

	getIndexImprovements();

    console.log("after calling getIndexImprovements");
}

function getSubmission(){
	
}

function createForm() {
	let materialArray = new Map();
	let impTypeArray = new Map();
	let departmentArray = new Map();
	$.ajax({
		async: false,
		type: 'GET',
		url: "/api/v1/materials",
		success: function(data, status) {
			for (let i = 0; i < data.length; i++){
				let key = data[i].id;
				let value = data[i].materialType;
				materialArray.set(key, value);
			}
		}});
	$.ajax({
		async: false,
		type: 'GET',
		url: "/api/v1/departments",
		success: function(data, status){
			for (let i = 0; i < data.length; i++){
				let key = data[i].department_id;
				let value = data[i].name;
				departmentArray.set(key, value) ;
			}

	}});
	$.ajax({
		async: false,
		type: 'GET',
		url:"/api/v1/improvementTypes",
		success: function(data, status) {
			for (let i = 0; i < data.length; i++){
				let key = data[i].improvement_id;
				let value = data[i].improvementType;
				impTypeArray.set(key, value) ;
			}
		}});

	let form = document.createElement("form");
	form.method = "POST";
	form.onsubmit = function (e){
		let formData = new Improvement();
		console.log(formData.customer.customerName);
		e.preventDefault();
		console.log("in onsubmit. the form has been prevented from submiting");
		$.ajax({
			url:"/api/v1/improvements",
			type:"POST",
			data : JSON.stringify(formData),
			contentType:"application/json; charset=utf-8",
			dataType:"json",
			success: function(data, status){
				console.log("in the success");
				console.log("data: " + data);
				console.log("status: " + status);
			}}).done(function(){

			});
		let content = document.getElementById("ajax_content");
		content.innerHTML = "";
		content.innerHTML = "<h2>Improvement added to DataBase";
		}

	form.id = "displaySingle";
	form.className= "container";
	let topRow = document.createElement("div");
	let middleRow = document.createElement("div");
	let bottomRow = document.createElement("div");
	topRow.className = "row";
	middleRow.className = "row";
	bottomRow.className = "row";

	let customerDiv = inputComponent("Customer Name", "one-twenty", "","col-6");
	let improvementTypeDiv = dropDownComponent("Improvement Type", "one-sixty", "one-sixty", "col-6", impTypeArray);
	topRow.append(customerDiv, improvementTypeDiv);
	let partNumberDiv = inputComponent("Part Number", "one-twenty", "","col-6");
	let materialTypeDiv = dropDownComponent("Material Type", "one-sixty","one-sixty","col-6", materialArray);
	middleRow.append(partNumberDiv, materialTypeDiv);
	let departmentDiv = dropDownComponent("Department", "one-sixty","one-sixty"," offset-6 col-6 ", departmentArray);
	bottomRow.append(departmentDiv);
	let problemDiv = textAreaComponent("Problem", "one-sixty","form-textarea","text-area-div");
	let solutionDiv = textAreaComponent("Solution", "one-sixty","form-textarea","", "text-area-div");
	let conclusionDiv = textAreaComponent("Conclusion", "one-sixty","form-textarea","", "text-area-div");
	let buttonDiv = document.createElement("div");
	buttonDiv.className = "row";
	let button = document.createElement("button")
	button.innerText = "Submit";
	button.type = "submit";
	button.id = "submit-button";
	button.style.marginTop = "25px";
	button.className = "offset-8";
	buttonDiv.append(button);
	form.append(topRow, middleRow, bottomRow, problemDiv, solutionDiv, conclusionDiv, buttonDiv);
	return form;
}

function createImprovementView() {
	let emptyForm = createForm();
	let display = document.getElementById("ajax_content");
	display.innerHTML = "";
	display.appendChild(emptyForm);
}

function getAjaxFunctionAnImprovement(path) {
	console.log("in getAjaxFunction");
	var ajaxRequest;	//The variable that makes all the magic possible

	try {
		//Real Browsers
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder
		try {
			ajaxRequest = new ActiveXObject("Msxm12.XMLHTTP");
		} catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Microsoft.ZMLHTTP");
			} catch (e) {
				//Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			}
		}
	}
	//Create a function that will recieve data sent from the server
	ajaxRequest.onreadystatechange = function () {
		console.log("in ready state change function");
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200) {
			console.log(ajaxRequest.responseText);
			let displayArray = JSON.parse(ajaxRequest.responseText);
			createImprovementView();

			let customerNameDisplay = document.getElementById("customerNameField");
			customerNameDisplay.value = displayArray.customer.customerName;
			customerNameDisplay.className += " style-disabled";
			customerNameDisplay.disabled = true;

			let improvementTypeDisplay = document.getElementById("improvementTypeField");
			improvementTypeDisplay.value = displayArray.improvementType.improvementType;
			improvementTypeDisplay.className += " style-disabled";
			improvementTypeDisplay.disabled = true;

			let partNumberDisplay = document.getElementById("partNumberField");
			partNumberDisplay.value = displayArray.part.partNumber;
			partNumberDisplay.className += " style-disabled";
			partNumberDisplay.disabled = true;

			let materialTypeDisplay = document.getElementById("material_type_" +  displayArray.part.material.id);
			materialTypeDisplay.selected = true;
			materialTypeDisplay.className += " style-disabled";
			materialTypeDisplay.disabled = true;

			let descDisplay = document.getElementById("descriptionTB");
			descDisplay.value = displayArray.description;
			descDisplay.className += " style-disabled";
			descDisplay.disabled = true;

			let solutionDisplay = document.getElementById("solutionTB");
			solutionDisplay.value = displayArray.solution;
			solutionDisplay.className += " style-disabled";
			solutionDisplay.disabled = true;

			let resultDisplay = document.getElementById("resultTB");
			resultDisplay.value = displayArray.result;
			resultDisplay.className += " style-disabled";
			resultDisplay.disabled = true;

			let button = document.getElementById("submit-button");
			button.hidden = true;
		}

	}
		ajaxRequest.open("GET", path, true);
		ajaxRequest.send(null);
		console.log("end of getAnImprovement");

}

function getAjaxFunctionAll(url){
	console.log("in getAjaxFunction");
	var ajaxRequest;	//The variable that makes all the magic possible

	try{
		//Real Browsers
		ajaxRequest = new XMLHttpRequest();
	} catch(e){
		// Internet Exploder
		try{
			ajaxRequest = new ActiveXObject("Msxm12.XMLHTTP");
		}catch (e){
			try{
				ajaxRequest = new ActiveXObject("Microsoft.ZMLHTTP");
			} catch(e){
				//Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			}
		}
	}
	//Create a function that will recieve data sent from the server
	ajaxRequest.onreadystatechange = function(){
		console.log("in ready state change function");
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
			let displayArray = JSON.parse(ajaxRequest.responseText);
			//starting to create and append elements
			return displayArray;
		} else{
			console.log(ajaxRequest.status.toString());
		}
	}
	ajaxRequest.open("GET", url,true);
	ajaxRequest.send(null);
	console.log("end of getIndexImprovements");
}

function getAjaxFunctionAllImprovements(path){
	console.log("in getAjaxFunction");
	var ajaxRequest;	//The variable that makes all the magic possible

	try{
		//Real Browsers
		ajaxRequest = new XMLHttpRequest();
	} catch(e){
		// Internet Exploder
		try{
			ajaxRequest = new ActiveXObject("Msxm12.XMLHTTP");
		}catch (e){
			try{
				ajaxRequest = new ActiveXObject("Microsoft.ZMLHTTP");
			} catch(e){
				//Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			}
		}
	}
	//Create a function that will recieve data sent from the server
	ajaxRequest.onreadystatechange = function(){
		console.log("in ready state change function");
		if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200){

			   let display = document.getElementById("ajax_content");
				let displayArray = JSON.parse(ajaxRequest.responseText);
				//starting to create and append elements
				let table = document.createElement("table");
				table.id = "display_table";
				let header_row = document.createElement("tr");

				let viewHead = document.createElement("th")
				viewHead.innerText = "Click to View";
				let customerName = document.createElement("th")
				customerName.innerText = "Customer Name";
				let partNumber = document.createElement("th")
				partNumber.innerText = "Part Number";
				let improvementType = document.createElement("th")
				improvementType.innerText = "Improvement Type";
				let materialType = document.createElement("th")
				materialType.innerText = "Material";

				//attach header elements
				header_row.appendChild(viewHead);
				header_row.appendChild(customerName);
				header_row.appendChild(partNumber);
				header_row.appendChild(improvementType);
				header_row.appendChild(materialType);
				table.appendChild(header_row);

				for (let x = 0; x < displayArray.length;  x++){
					let row = document.createElement("tr");
					let viewCol = document.createElement("td");
					let link = document.createElement("a");
					link.id = "view_improvement_" + x;
					link.className = "view_improvement_link";
					link.innerText="View";
					link.onclick = function (){
						let idNumber = this.id.split('_');
						getAjaxFunctionAnImprovement("/api/v1/improvements/" + idNumber[2]);
					};
					let nameDisplay = document.createElement("td");
					nameDisplay.innerText = displayArray[x].customer.customerName;
					let partDisplay = document.createElement("td");
					partDisplay.innerText = displayArray[x].part.partNumber;
					let typeDisplay = document.createElement("td");
					typeDisplay.innerText = displayArray[x].improvementType.improvementType;
					let materialDisplay = document.createElement("td");
					materialDisplay.innerText = displayArray[x].part.material.materialType;
					viewCol.appendChild(link);
					row.appendChild(viewCol);
					row.appendChild(nameDisplay);
					row.appendChild(partDisplay);
					row.appendChild(typeDisplay);
					row.appendChild(materialDisplay);
					table.appendChild(row);

				}
			display.appendChild(table);

		} else{
			console.log(ajaxRequest.status.toString());
		}
	}


	ajaxRequest.open("GET", path,true);
	ajaxRequest.send(null);
	console.log("end of getIndexImprovements");
}

function getIndexImprovements(){
	console.log("in getIndexImprovements");
	getAjaxFunctionAllImprovements("/api/v1/improvements" );

	/*var ajaxDisplay =getAjaxFunctionAllImprovements("/api/v1/improvements" );
	console.log("after getIndexImprovements");
	return ajaxDisplay;*/
}
//global vars
let createIm = document.getElementById("create-improvement");

if (window.addEventListener) {
    window.addEventListener("load", init, false);
    createIm.addEventListener("click", createImprovementView, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
    createIm.attachEvent("onclick", createImprovementView);
}