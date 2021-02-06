//Author: Matt Wolf
//Date: 2/4/21
//Desc: this script will clean up the messy creation of components, hopefully

//returns a div
function inputComponent(label, labelCssClass,inputClass, divCssClass){
    let div = document.createElement("div");
    div.className = divCssClass;
    let inputLabel = document.createElement("label");
    inputLabel.id = label.toLowerCase() + "_label_id";
    inputLabel.innerText = label.replace("_", " ");
    inputLabel.className = inputClass;
    let input = document.createElement("input");
    input.id = label.toLowerCase() + "_input_id";
    div.append(inputLabel, input);
    return div;
}

//returns a div
function textAreaComponent(label, labelCssClass, textAreaCssClass, divCssClass){
    let div = document.createElement("div");
    div.className = divCssClass;
    let inputLabel = document.createElement("label");
    inputLabel.id = label.toLowerCase() + "_label_id";
    inputLabel.innerText = label.replace("_", " ");
    inputLabel.className = labelCssClass;
    let input = document.createElement("textarea");
    input.id = label.toLowerCase() + "_textarea_id";
    input.className = textAreaCssClass;
    div.append(inputLabel, input);
    return div;
}

//returns a div
function dropDownComponent(label, labelCssClass, dropDownCssClass, divCssClass, list){
    let div = document.createElement("div");
    div.className = divCssClass;
    let inputLabel = document.createElement("label");
    inputLabel.id = label.toLowerCase() + "_label_id";
    inputLabel.innerText = label.replace("_", " ");
    inputLabel.className = labelCssClass;
    let select = document.createElement("select");
    select.id = label.toLowerCase() + "_selcet_id";
    select.className = dropDownCssClass;
    for(let i = 0; i < list.length; i++){
        let opt = document.createElement("option");
        opt.value = list[i];
        improvementTypeField.appendChild(opt);
    }
}