// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement("div");
document.body.appendChild(div);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let p = document.createElement("p");
let divP = document.createElement("div");

divP.appendChild(p);
document.body.appendChild(divP);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
let divSixP = document.createElement("div");
for(let i = 0; i<6; i++){
    let p = document.createElement("p");
    divSixP.appendChild(p);
}
document.body.appendChild(divSixP);
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
let textP = document.createElement("p");
let text = document.createTextNode("Soy dinámico!");
textP.appendChild(text);

document.body.appendChild(textP);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2 = document.querySelector("h2[class = 'fn-insert-here']");
let textH2 = document.createTextNode("Wubba Lubba dub dub");

h2.appendChild(textH2);
// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let ul = document.createElement("ul");
for(let i = 0; i<apps.length; i++){
    let li = document.createElement("li");
    let textLi = document.createTextNode(apps[i]);
    li.appendChild(textLi);
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let removeNodes = document.querySelectorAll("[class='fn-remove-me']");

let arrFromNodes = Array.from(removeNodes);
console.log(arrFromNodes);
for(let i = 0; i<arrFromNodes.length; i++){
    document.body.removeChild(arrFromNodes[i]);
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let pMid = document.createElement("p");
let textMid = document.createTextNode("Voy en medio!");
pMid.appendChild(textMid);

let allDivs = document.querySelectorAll("div");
let arrDivs = Array.from(allDivs);

let secondDiv = arrDivs[1];

document.body.insertBefore(pMid, secondDiv);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here



let allDivsClass = document.querySelectorAll("div[class='fn-insert-here']");
let arrFromDivsClass = Array.from(allDivsClass);

for(let i = 0; i<arrFromDivsClass.length; i++){
    let pInside = document.createElement("p");
    let insideText = document.createTextNode("Voy dentro!");
    pInside.appendChild(insideText);

    arrFromDivsClass[i].appendChild(pInside);
}
