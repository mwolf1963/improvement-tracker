//Author: Matt Wolf
//Date: 2/4/21
//Desc: this script will clean up the messy creation of components, hopefully

//returns a div
function inputComponent(label, inputClass, divClass){
    let div = document.createElement("div");
    div.className = divClass;
    let inputLabel = document.createElement("label");
    inputLabel.id = label.toLowerCase() + "_label_id";
    inputLabel.innerText = label.replace("_", " ");
    inputLabel.className = inputClass;
    let input = document.createElement("input");
    input.id = label.toLowerCase() + "_input_id";
    div.append(inputLabel, input)
    return div;
}

//returns a div
function textAreaComponent(label, labelCssClass, textAreaCssClass, divClass){


    descriptionDiv.className = "form-div-textbox";
    let descriptionLabel = document.createElement("label");
    descriptionLabel.innerText = "Description of Problem";
    let descriptionTB = document.createElement("textarea");
    descriptionTB.className = "form-textarea";
    descriptionTB.id = "descriptionTB";
    descriptionDiv.append(descriptionLabel, descriptionTB);

}

//returns a div
function dropDownComponent(label, cssClass, list){

}