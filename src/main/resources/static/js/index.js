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

	let customerDiv = inputComponent("Customer Name", "one-twenty", "","form-div-left");
	let partNumberDiv = inputComponent("Part Number", "one-twenty", "","form-div-left");
	let improvementTypeDiv = dropDownComponent("Improvement Type", "one-sixty", "", "form-div-right", ["test imp 1", "test imp 2", "test imp 3"]);
	let materialTypeDiv = dropDownComponent("Material Type", "one-twenty","","form-div-right ", ["test material 1", "test material 2", "test material 3"]);
	let departmentDiv = dropDownComponent("Department", "one-twenty","","form-div-right ", ["test department 1", "test department 2", "test department 3"]);
	let problemDiv = textAreaComponent("Problem Description", "one-sixty","form-textarea","text-area-div");
	let solutionDiv = textAreaComponent("Solution", "one-sixty","form-textarea","", "text-area-div");
	let conclusionDiv = textAreaComponent("Conclusion", "one-sixty","form-textarea","", "text-area-div");
	let button = document.createElement("button")
	button.innerText = "Submit";
	button.id = "submit-button";
	button.style.paddingTop = "25px";
	button.click(function (){
		$.post("demo_test_post.asp",
			{
			//need to add department to the improvement page
			//need to connect the form to this method to handle post to put the results in the db
			//add trigger to db
			/*department: {

            name: document.getElementById();
        },
        "customer": {
            "customer_id": 1,
            "customerName": "customer1"
        },
        "part": {
            "partNumber": "part1",
            "material": {
                "materialType": "material1",
                "id": 1
            },
            "id": 1
        },
        "improvementType": {
            "improvementType": "process",
            "improvement_id": 2
        },
        "description": "a problem",
        "solution": "fixed the problem",
        "result": "fine"
				 */
			},
			function(data, status){
				alert("Data: " + data + "\nStatus: " + status);
			});

	})
	form.append(customerDiv, partNumberDiv, improvementTypeDiv, departmentDiv, materialTypeDiv, problemDiv, solutionDiv, conclusionDiv, button);
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
let createMI = document.getElementById("create-improvement");

if (window.addEventListener) {
    window.addEventListener("load", init, false);
    createMI.addEventListener("click", createImprovementView, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
    createMI.attachEvent("onclick", createImprovementView);
}