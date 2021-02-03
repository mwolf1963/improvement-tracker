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


function createForm() {
	let form = document.createElement("form");

	form.id = "displaySingle";

	let customerDiv = document.createElement("div");
	customerDiv.className = "form-div-left";
	let customerLabel = document.createElement("label");
	customerLabel.innerText = "Customer Name";
	customerLabel.className ="one-twenty";
	let customerNameField = document.createElement("input");
	customerNameField.id = "customerNameField";
	customerDiv.append(customerLabel, customerNameField);

	let partNumberDiv = document.createElement("div");
	partNumberDiv.className ="form-div-left";
	let partNumberLabel = document.createElement("label");
	partNumberLabel.innerText = "Part Number";
	partNumberLabel.className ="one-twenty";
	let partNumberField = document.createElement("input");
	partNumberField.id = "partNumberField";
	partNumberDiv.append(partNumberLabel, partNumberField);

	let improvementTypeDiv = document.createElement("div");
	improvementTypeDiv.className = "form-div-right";
	let improvementTypeLabel = document.createElement("label");
	improvementTypeLabel.innerText = "Improvement Type";
	improvementTypeLabel.className ="one-sixty";
	let improvementTypeField = document.createElement("select");
	improvementTypeField.id = "improvementTypeField";
	for(let i = 0; i < improvementsArray.length; i++){
		let opt = document.createElement("option");
		opt.id = "improvement_type_" + improvementsArray[i].id;
		opt.value = improvementsArray[i].improvementType;
		improvementTypeField.appendChild(opt);
	}
	improvementTypeDiv.append(improvementTypeLabel, improvementTypeField);

	let materialTypeDiv = document.createElement("div");
	materialTypeDiv.className = "form-div-right";
	let materialTypeLabel = document.createElement("label");
	materialTypeLabel.innerText = "Material Type";
	materialTypeLabel.className = "one-sixty";
	let materialTypeField = document.createElement("select");
	materialTypeField.id = "materialTypeField";
	for(let i = 0; i < materialArray.length; i++){
		let opt = document.createElement("option");
		opt.id = "improvement_type_" + materialArray[i].id;
		opt.value = materialArray[i].improvementType;
		improvementTypeField.appendChild(opt);
	}
	materialTypeDiv.append(materialTypeLabel, materialTypeField);


	let descriptionDiv = document.createElement("div");
	descriptionDiv.className = "form-div-textbox";
	let descriptionLabel = document.createElement("label");
	descriptionLabel.innerText = "Description of Problem";
	let descriptionTB = document.createElement("textarea");
	descriptionTB.className = "form-textarea";
	descriptionTB.id = "descriptionTB";
	descriptionDiv.append(descriptionLabel, descriptionTB);

	let solutionDiv = document.createElement("div");
	solutionDiv.className = "form-div-textbox";
	let solutionLabel = document.createElement("label");
	solutionLabel.innerText = "Description of Solution";
	let solutionTB = document.createElement("textarea");
	solutionTB.className = "form-textarea";
	solutionTB.id = "solutionTB";
	solutionDiv.append(solutionLabel, solutionTB);

	let resultDiv = document.createElement("div");
	resultDiv.className = "form-div-textbox";
	let resultLabel = document.createElement("label");
	resultLabel.innerText = "Result";
	let resultTB = document.createElement("textarea");
	resultTB.className = "form-textarea";
	resultTB.id = "resultTB";
	resultDiv.append(resultLabel, resultTB);
	let button = document.createElement("button")
	button.innerText = "Submit";
	button.id = "submit-button";

	//append the children elements
	form.append(customerDiv, improvementTypeDiv, partNumberDiv, materialTypeDiv,descriptionDiv,solutionDiv, resultDiv, button);
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
//global variables
var createMI = document.getElementById("create-improvement");
materialsArray = getAjaxFunctionAll("/api/v1/materials");
improvementsArray = getAjaxFunctionAll("/api/v1/improvementTypes");

if (window.addEventListener) {
    window.addEventListener("load", init, false);
    createMI.addEventListener("click", createImprovementView, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
    createMI.attachEvent("onclick", createImprovementView);
}