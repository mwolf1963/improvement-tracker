//Author: Matt Wolf
//Date: 1-26-21
//Desc: This script loads the improvement table on the home page of the site.

function init(){
	console.log("in init");
	getIndexImprovements();
   let display = document.getElementById("main_content");
   display.innerHTML = response;
   console.log("after calling getIndexImprovements");
}
/*

*/
if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}