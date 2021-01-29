/*Author: Matt Wolf*/
/*Date Written: 1-26-2021*/
/*Description: AJAX framework with two processes for Typing Demo*/

function getAjaxFunction(path){
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
	var ajaxDisplay =getAjaxFunction("/api/v1/improvements" );
	console.log("after getIndexImprovements");
	return ajaxDisplay;
}