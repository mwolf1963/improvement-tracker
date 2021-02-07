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
    inputLabel.className = labelCssClass;
    let input = document.createElement("input");
    input.id = label.toLowerCase().replace(" ", "_") + "_input_id";
    div.append(inputLabel, input);
    return div;
}

//returns a div
function textAreaComponent(label, labelCssClass, textAreaCssClass, divCssClass){
    let div = document.createElement("div");
    div.className = divCssClass;
    let inputLabel = document.createElement("label");
    inputLabel.id = label.toLowerCase().replace(" ", "_") + "_label_id";
    inputLabel.innerText = label.replace("_", " ");
    inputLabel.className = labelCssClass;
    let input = document.createElement("textarea");
    input.id = label.toLowerCase().replace(" ", "_") + "_textarea_id";
    input.className = textAreaCssClass;
    div.append(inputLabel, input);
    return div;
}

//returns a div
function dropDownComponent(label, labelCssClass, dropDownCssClass, divCssClass, map){
    let div = document.createElement("div");
    div.className = divCssClass;
    let selectLabel = document.createElement("label");
    selectLabel.id = label.toLowerCase() + "_label_id";
    selectLabel.innerText = label.replace("_", " ");
    selectLabel.className = labelCssClass;
    let select = document.createElement("select");
    select.id = label.toLowerCase().replace(" ", "_") + "_select_id";
    select.className = dropDownCssClass;
    for(let [key, value] of map){
        console.log("Key: " + key + " and Value: " + value);
        let opt = document.createElement("option");
        opt.value = key;
        opt.text = value.replace("_", " ");
        select.appendChild(opt);
    }
    div.append(selectLabel, select);
    return div;
}