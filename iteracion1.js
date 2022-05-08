// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let boton = document.querySelector('button[class="showme"]');
console.log(boton);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let h1 = document.querySelector('h1[id="pillado"]');
console.log(h1);
// 1.3 Usa querySelector para mostrar por consola todos los p
let p = document.querySelectorAll('p');
console.log(p);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
let pokemon = document.querySelectorAll('[class="pokemon"]');
console.log(pokemon);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
let data = document.querySelectorAll('[data-function="testMe"]');
console.log(data);
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
let dataArr = Array.from(data);
console.log(dataArr[2]);
