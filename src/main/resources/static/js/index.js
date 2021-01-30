//Author: Matt Wolf
//Date: 1-26-21
//Desc: This script loads the improvement table on the home page of the site.

function init(){
	console.log("in init");

	getIndexImprovements();

    console.log("after calling getIndexImprovements");
}

function getAjaxFunctionAllImporvements(path){
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
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200){

			   let display = document.getElementById("ajax_content");
				display.innerHTML = ajaxRequest.responseText;
				console.log(ajaxRequest.responseText.length);

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
	var ajaxDisplay =getAjaxFunctionAllImporvements("/api/v1/improvements" );
	console.log("after getIndexImprovements");
	return ajaxDisplay;
}


if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}