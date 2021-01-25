//Author: Matt Wolf
//Date: 1-26-21
//Desc: This script loads the improvement table on the home page of the site.

function init(){
   getIndexImprovements();
}


if (window.addEventListener) {
    window.addEventListener("load", init, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", init);
}