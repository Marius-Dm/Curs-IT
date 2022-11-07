'use strict'
// a = 4
// console.log(a);

//Functie Declaration

function spune() {
    console.log("Privet Andrei!!!");
}

spune();
spune();
spune();
spune();

function identitate(nume,prenume = "") {
    console.log(`Identitatea creata ese ${nume} ${prenume}`);
}

identitate("Andrei")

let x;

function suma(a ,b){
    console.log(a + b);
}

x = 7;
suma(x, 5);


function minus(x , y) {
    console.log(x - y);
}

x = 100;
let y = 90

minus(x , y)

// function buletinDeIdentitate(nume, prenume, patronimic) {
//     console.log(`Numele este ${nume} cu prenumele ${prenume} si patronimicul ${patronimic}`);
// }

// console.log(suma(4,4));

// let nume = prompt("Introdu numele")
// let prenume = prompt("Introdu prenumele")
// let patronimic = prompt("Introdu patronimicul")

// buletinDeIdentitate(nume, prenume, patronimic);

// function numere() {
   
//     return arguments;
// }

// console.log(numere(7, 100, 25));

// console.log(impartire(8,4));

//rest operator
// function numere (b,...a){
//     return `${b} ${a}`;
// }

// console.log(numere(7, 100, 25));




function suma(a ,b) {
    return a + b;
}

// const m = 10 + suma(5 , 5);
// console.log(m);


// Functie expression

const impartire = function(a, b){
    return a / b;
}

console.log(impartire(50, 10));


// Functie arrow


// const inmultire = (a, b) =>{
//     return a * b;
// }

const inmultire = (a, b) => a * b;

console.log(inmultire(4,5));

const salut = a => a

console.log(salut(4));


// Functie anonima (bomj)

(function(a){
    console.log(a);
}) ("Salut");


const operatie = (x, y, operator) =>{
    let temp;
    if (operator === "+") {
        temp = x + y;
    }else if(operator === "-"){
        temp = x - y;
    }else if(operator === "*") {
        temp = x * y;       
    }else if(operator === "/"){
        temp = x / y
    }else{
        temp = "Nu am adaugat inca asa operatii"
    }
    return temp;
}

console.log(operatie(4, 5, "/"));