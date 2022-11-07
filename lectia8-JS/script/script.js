const numeSt = "Virgil";
console.log(numeSt.length);

//Metode
console.log(numeSt.toUpperCase());
console.log(numeSt.charAt(2));
console.log(numeSt.charCodeAt(2));
console.log(Math.floor(5.6))
console.log(Math.ceil(5.1))
console.log(Math.round(5.6))
//Concatenare
const numeNepot = "Ionel",
    numeBunica = "Ana",
    numeBunel = "Nicolae"; 
//Ionel s-a dus la tara la buneii lui Ana si Nicolae ca sa manance cirese
    console.log(numeNepot+` s-a dus la tara la buneii lui `+numeBunica+` si ` + numeBunel +` ca sa manance cirese`)

//Interpolare
console.log(`${numeNepot} s-a dus la tara la buneii lui ${numeBunica} si ${numeBunel} ca sa manance cirese`)

const fruct1 = "Mar";
const fruct2 = "Banana";
const fruct3 = "Struguri";
const fruct4 = "Mango";
const fruct5 = "Capsuna";
const fruct6 = "Zmeura";
const fruct7 = "Qiwi";

const html = `
<ol>
<li>${fruct1}</li>
<li>${fruct2}</li>
<li>${fruct3}</li>
<li>${fruct4}</li>
<li>${fruct5}</li>
<li>${fruct6}</li>
<li>${fruct7}</li>
</ol>`

document.write(html);
const x = 6; ;
const y = +"6";
console.log( typeof y );
console.log( typeof x );
//console.log(x+ Number(y));
// console.log( x + parseInt(y));
console.log( x + String(y));
const intrebare = confirm("Doresti sa intri pe 1xbet");
console.log(intrebare);
// const notNume = prompt("Noteaza Numele")
// console.log(notNume)

// const num1 = +prompt("Noteaza primul numar");
// const num2 = +prompt("Noteaza al doilea numar");
// console.log(num1 + num2)

// const anPrezent = +prompt("Anul prezent");
// const anPrezent = new Date().getFullYear();
// const anNascut = +prompt("Cand esti nascut");
// console.log(anPrezent - anNascut)

let nr1 = 10;
console.log(nr1);
nr1 = nr1 + 5;
console.log(nr1);
nr1 += 5;

let nr2 = 6;
nr2 += 1;
nr2++;

console.log(10 % 3)
