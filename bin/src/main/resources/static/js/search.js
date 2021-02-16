/*Author: Matt Wolf
 * Date: 10/13/20
 * Desc: This will search the ContinuousImprovement.Web.Api for things 
 */

"use strict";

var searchBtn = document.getElementById("searchBtn");


function ajaxSearch() {
	let materialType = document.getElementById("MaterialType").value;
	let customerName = document.getElementById("CustomerName").value;
	let department = document.getElementById("Department").value;

	var ajaxRequest; // The variable that makes the AJAX magic possible!
	try {
		// REAL BROWSERS
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder Browsers
		try {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// something went wrong
				alert("Oops! Your browser cannot handle AJAX.");
				return false;
			}
		}
	}
	console.log("Value of Customer: " + customerName + " . Value of materialType: " + materialType + ". The department is: " + department);

	ajaxRequest.onreadystatechange = function () {
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {
			var searchResult = document.getElementById("searchResult");
			searchResult.innerHTML = ajaxRequest.responeText;
		}
	}

	var queryString = "?customerName=" + customerName + "&materialType=" + materialType + "&department=" + department;
	console.log("Query String: " + queryString);
	
	ajaxRequest.open("GET", "SearchApi\\" + queryString, true);
	ajaxRequest.send(null);
}

function init() {
	if (window.addEventListener) {
		searchBtn.addEventListener("click", ajaxSearch, false);
	} else if (window.attachEvent) {
		searchBtn.attachEvent("click", ajaxSearch);
	}
}
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}
 