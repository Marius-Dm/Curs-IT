// 1.
x = +prompt("Introduceti primul numar");
y = +prompt("Introduceti al doilea numar");
z = +prompt("Introduceti al treilea numar");

if (x > y){
    if (x > z){
        console.log("Biggest number is x: "+String(x));
    }else{
        console.log("Biggest number is z: "+String(z));
    }
}else{
    if (y > z){
        console.log("Biggest number is y: "+String(y));
    }else{
        console.log("Biggest number is z: "+String(z));
    }
}

// 2.

const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
let phone = prompt("Introduceti numarul de telefon");

if(phone.match(pattern)){
    console.log("Numarul introdus este corect");
}else{
    console.log("Numarul introdus este incorect");
}

// 3.

text = prompt("Introduceti un text inafara de oaie, prost, animala, idiont");
if(text === "oaie")
{
    alert("Sunteti prosti");
}else if(text === "prost")
{
    alert("Sunteti prosti");
}else if(text === "animala")
{
    alert("Sunteti prosti");
}else if(text === "idiont"){
    alert("Sunteti prosti");
}else{
    alert("Vati aptinut de l-a injuraturi, bravo :D")
}

// 4.

const lang = prompt("Introduceti una din limbi: Ro, En sau Ru");
if(lang === "Ro"){
    console.log("Bine ati venit in limba romana");
}else if(lang === "En"){
    console.log("Welcome from english lang");
}else if(lang === "Ru"){
    console.log("Привет на русском");
}else{
    console.log("Ati introdus o limba ce nu o detinem");
}

// 5.

const time = +prompt("Introduceti un numar de la 0 la 59")
if(time >= 0 && time <= 15){
    console.log("Primul sfert de ora");
}else if (time > 15 && time <= 30) {
    console.log("Al doilea sfert de ora");
}else if (time >30 && time <= 45){
    console.log("Al treilea sfert de ora");
}else if (time > 45 && time < 59){
    console.log("Al patrulea sfert de ora");
}else{
    console.log("Ati introdus un numar gresit");
}

// 6.

const number = +prompt("Introduceti un numar")
if(number > 3 && number < 15){
    console.log("afirmatie corecta");
    if(number === 6){
        console.log("Adevarat dupa tip si culoare");
    }
}else{
    console.log("afirmatie incorecta");
}

// 7.

const bool = true;
bool ? console.log("adevarat"): console.log("fals");;

// 8.

const month = +prompt("Introduceti litera l-a o luna (1-12)");
if(month === 12 || month === 1 || month === 2){
    console.log("Iarna");
}else if(month === 3 || month === 4 || month === 5){
    console.log("Primavara");
}else if (month === 6 || month === 7 || month === 8){
    console.log("Vara");
}else if (month === 9 || month === 10 || month === 11){
    console.log("Toamna");
}else{
    console.log("Ati introdus un numar gresit");
}

// 9.

const sir = "abcde";

if(sir[0] === "a"){
    console.log("primul caracter este A");
}else{
    console.log("Primul caracter nu este A");
}

// 10.

const numar = "12345"
if(numar[0] === "1" || numar[0] === "2" || numar[0] === "3"){
    console.log("primul caracter este 1, 2 sau 3");
}else{
    console.log("Primul caracter nu este 1, 2 sau 3");
}

// 11.

let num = +prompt("11. Dati un numar");
if(num > 10){
    console.log(num += 100)
}else{
    console.log(num += 30)
}

// 12.

if(num % 2 === 0){
    console.log(num * 2);
}else{
    console.log(num * 3);
}

// 13.

if(num >= 50){
    console.log(Math.pow(num, 2));
}else if(num > 10 && num < 30){
    console.log("0");
}else{
    console.log("Error");
}

// 14.

const nr1 = +prompt("Introduceti primul numar")
const nr2 = +prompt("Introduceti al doilea numar")

if(nr1 > nr2){
    console.log(nr1);
}else{
    console.log(nr2);
}

// 15.

const anotimp = prompt("Introduceti anotimpul - iarna, vara, primavara, toamna");

if(anotimp === "iarna"){
    console.log("In acest anotimpul iarna are urmatoarele luni ianuarie, februarie si decembrie");
}else if(anotimp === "primavara" || anotimp === "Primavara"){
    console.log("In acest anotimpul iarna   are urmatoarele luni martie, aprilie si mai");
}else if(anotimp === "vara"){
    console.log("In acest anotimpul iarna are urmatoarele luni iunie, iulie si august");
}else if(anotimp === "toamna"){
    console.log("In acest anotimpul toamna are urmatoarele luni septembtie, octombrie si noiembrie");
}else{
    console.log("Nu exista asa anotimp");
}

// 16.

let txt = prompt("Introduceti abc sau altceva la dorinta")
if(txt === "abc"){
    console.log(txt = "www");
}else{
    console.log(txt = "zzz");
}

// 17.

let num1 = prompt("Introduceti o cifra");
if(isNaN(num1)){
    num1 = +num1
    console.log("variabila num este ", num1);
}else{
    console.log("Aceasta nu este cifra");
}

// 18.

sumNr = nr1 + nr2;
if(sumNr < 50){
    console.log("Suma numerelor este mai mica decat 50");
}else if(sumNr < 100){
    console.log("Suma numerelor este mai mica decat 100");
}
switch(sumNr){
    case sumNr < 50:
        console.log("Suma numerelor este mai mica decat 50");
        break;
    case sumNr < 100:
        console.log("Suma numerelor este mai mica decat 100");
        break;
    case sumNr < 200:
        console.log("Suma numerelor este mai mica decat 200");
        break;
    case sumNr < 300:
        console.log("Suma numerelor este mai mica decat 300");
        break;
    default:
        console.log("Rezultatul este foarte mare");
}

// 19.

const ageQuestion = prompt("Aveti 18 ani?");
if(ageQuestion === "da" || ageQuestion === "Da"){
    alert("Aveti varsta permisa");    
}else if(ageQuestion === "nu" || ageQuestion === "Nu"){
    alert("Sunteti prea mic");
}else{
    alert("Nu ati dat un raspuns clar");
}

// 20.
let condition = false;

while(condition === false){
    let option = prompt("Alegeti un din cele 4 intrebari (1-4)")
    switch(option){
        case option === 1:
            question1 = prompt("1.De cine a fost scrisa amintiri din copilarie");
            question1 = question1.toLowerCase();
            if(question1 === "ion creanga"){
                alert("Corect")    
                condition = true;
                break
            }
            break;
        case option === 2:
            alert("2.Cate ore are o zi?");
            condition = true;
            break;
        case option === 3:
            alert("3.Presedintele Republicii Moldova?");
            condition = true;
            break;
        case option === 4:
            alert("3.Care este raspunsul unui adevarat presedinte la intrebarea 'De ce?'");
            condition = true;
            break;
        default:
            condition = false;
    }
}


// 21.

const age = +prompt("Introduceti varsta");
if(age < 18){
    alert("Sunteti prea tanar pentru a conduce aceasta masina");
}else if(age === 18){
    alert("Felicitari pentru primul an de conducere");
}else if(age > 18){
    alert("Porniti.Bucurati-va de plimbare");
}else{
    alert("Nu ati introdus o cifra");
}
