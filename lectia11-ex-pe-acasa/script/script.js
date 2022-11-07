`use strict`;

//Exercitii String

let string = "some test string";

// 1.	Obțineți primul și ultimul caractere din string.
console.log(`Primul caracter ${string[0]}, ultimul caracter ${string[string.length - 1]}`);

// 2.	 Faceți primul și ultimul character  în majuscule.

console.log(`Primul caracter cu majuscula ${string[0].toUpperCase()}, ultimul caracter cu majuscula ${string[string.length-1].toUpperCase()}`);

// 3.	Căutați poziția cuvântului „string” în string.

console.log(string.indexOf("string"));

// 4.	Găsiți poziția celui de-al doilea spațiu.

console.log(string.lastIndexOf(" "));

// 5.	Obțineți un șir de la al cincilea caracter cu o lungime de 4 caractere

console.log(string.substr(5, 4));

// 6.	Obțineți un șir de caractere de la 5 la 9

console.log(string.substring(5, 9));

// 7.	Obțineți o nouă linie din original ștergând ultimele 6 caractere (adică șirul inițial fără ultimele 6 caractere)

console.log(string.slice(0, 9));

// 8.	Din cele două variabile a = 20 și b = 16, obțineți șirul variabilei, în care conține textul „2016”
let a = 20;
let b = 16;

console.log(a.toString() + b.toString());



//Exercitii Functii

// 1.	Creați o funcție de multiplicare care va lua orice număr de numere și va returna produsul lor: multiply(1,2,3) = 6 (1*2*3); Dacă nu există niciun argument, întoarceți zero: multiply() // 0

const multiply = (...nmbrs) =>{
    
    if( nmbrs.length !== 0){   
        let temp = 1; 
        for (let num of nmbrs){
        temp *= num;
    }
    return temp;
    }else{
        return 0;
    }
    
}

console.log( multiply(1,2,3,5) );

// 2.Creati o functie care va primi un parametru de tip string si va returna textu intors: reverseString(‘test’) // “tset”.

const reverse = (str) =>{
    if (typeof str === 'string'){
        return str.split("").reverse().join("");
    }else{
        return "its not a string";
    }
}

console.log(reverse("tsimargorp soktoic iam lec uif as O"));

// 3.Creați o funcție care un argument de tip string si va returna un
// sir de caractere  separate printr- un spațiu și înlocuit cu valoarea Unicode al caracterului:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111” 


const getCodeStringFromText = (text) => {
    let code="";
    for (let i = 0; i < text.length; i++) {
        code += `${text.charCodeAt(i)} ` ;
    }
    return code;
}
console.log(getCodeStringFromText("hello"))

// console.log(unicode("hello"));

// 4. Creați o funcție ghiciți numărul. Este nevoie de un număr de la 1-10 
// (asigurați-vă că nu este mai mare decat 10 și mai mic decat 0). Generează un număr random de 
// la 1-10 și  compară cu numărul transmis dacă se potrivesc, apoi returnează „Ați câștigat” dacă nu
//  atunci „Nu ați ghicit numărul dvs. Este  8, dar numărul 5 a fost selectat”. 

const randomGuess = () =>{
    let x = +prompt("Try to guess what number I have (1 - 10)")
    if (x > 0 && x <= 10){    
        let randomNmbr = Math.floor(Math.random() * 11) 
        if(x === randomNmbr){
            alert("Wow, you have guessed, Congrats!!")
        }else{
            alert("Sorry, you got it wrong :(")
            let again = confirm("Do you want to try again?")
            if (again === true) {
                randomGuess()
            }
        }
    }else{
        alert("The number has to be between 1 and 10"); 
        randomGuess();
    }
}
// randomGuess();

// 5. Creati o functie care primeste ca parametru un numar “n” si returneaza un ciclu 
// de 10 ori incepand cu cifra primita in argument

const givenNumber = (n) =>{
    for (let i = 0; i < 10; i++) {
        console.log(n+1);
    }
}

givenNumber(3);

// 6. Faceți o funcție care va lua 2 numere și returnați-le cel mai mic multiplu comun. 
// Cel mai mic numar  care este împărțit la unul și al doilea număr. Exemplu: numerele 12 și 15. 
// Numărul 60 este împărțit la 12 și 15 și acesta este cel mai mic număr.

const celMaiMicMultipluComun = (a, b) =>{
    let r = a % b;
    let p = a * b;
    while (r !== 0) {
        a = b;
        b = r;
        r = a % b;
    }
    return p / b;
}


console.log(celMaiMicMultipluComun(27, 45));

// 7. Creati o functie piramida, functia va scoate in consola urmatoare:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

const pyramid = () =>{
    let ret = '';
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            ret += i + ' '
        }
        console.log(ret);
        ret = '';
    }
}
pyramid();

// 8. Creati o functie zodiac care are ca parametru zodiac si iti returneaza lunile din care face parte

const zodiac = (zodie) =>{
    zodie = zodie.toLowerCase();
    switch (zodie) {
        case "berbec":
            return "March 21 - April 19"
            break;
        case "taur":
            return "April 20 - May 20"
            break;
        case "gemeni":
            return "May 21 - June 21"
            break;
        case "rac":
            return "June 22 - July 22"
            break;
        case "leu":
            return "July 23 - August 23"
            break;
        case "fecioara":
            return "August 23 - September 23"
            break;
        case "balanta":
            return "September 23 - October 23"
            break;
        case "scorpion":
            return "October 24 - November 21"
            break;
        case "sagetator":
            return "November 22 - December 21"
            break;
        case "capricorn":
            return "December 22 - January 19"
            break;
        case "varsator":
            return "January 20 - February 18"
            break;
        case "peste":
            return "February 19 - March 20"
        default:
            return "Nu exista asa zodie"
            break;
    }
}

console.log(zodiac("balanta"));

// 9. Creati o functie calculareAni care va avea un parametru  an care va returna cati ani are persoana

const calculareAni = (birthYear) =>{
    let currentYear = new Date().getFullYear();
    let personAge = currentYear - birthYear;
    return personAge;
}

console.log(calculareAni(1997));

// 10. Dacă variabila a este mai mare decât zero, atunci în variabila test scriem o funcție 
// care scoate in consola un “!”, Altfel scriem o funcție care scoate două “!!”

let m = 10;

if (m < 0) {
    const excl = () =>{console.log("!");}
    excl();
}else{
    const doubleExcl = () =>{console.log("!!");}
    doubleExcl();
}

// 11. Creati o functie cu trei parametri(text, litera, inlocuire), ia va gasi in textul dat de voi in 
// parametrul text litera care va fi introdusa de voi in parametrul litera si inlocuita cu parametru inlocuire

const lastFunction = (text, litera, inlocuire) =>{
    let changedText = text.replaceAll(litera,inlocuire)  
    
    
    return changedText;
}

console.log(lastFunction("Hello World", "l","r"));