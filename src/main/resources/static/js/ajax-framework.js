/*Author: Matt Wolf*/
/*Date Written: 1-26-2021*/
/*Description: AJAX framework with two processes for Typing Demo*/

function getAjaxFunction(path){
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
		if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
			var ajaxDisplay = document.getElementById('main_content');
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
			
		}
	}
	
	
	ajaxRequest.open("GET", path,true);
	ajaxRequest.send(null);

}
function getIndexImprovements(){
	getAjaxFunction("//api//v1//improvements" )
}