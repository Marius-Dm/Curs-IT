/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Exercitiu 1: Încălzire! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/


/*
Când efectuați aceste sarcini, vă recomandăm să
 utilizați console.log pentru a testa
 codul dvs. pentru a vă asigura că funcționează corect.*/

/*
Sarcina 1a - Vârsta votului
Urmează următoarea instrucțiune:
    1. Creați o variabilă numită voteAge și
    atribuiți-i o valoare
    2. In consola va aparea true  dacă vârsta
    este de 18 ani sau mai mare
    SUGESTIE: nu este necesară nicio funcție
*/

const voteAge = 21;

if (voteAge > 18) {
    console.log("Varsta introdusa este mai mare de 18 ani");
}else if(voteAge === 18){
    console.log("Varta introdusa este fix de 18 ani");
}else{
    console.log("Varsta introdusa este mai mica de 18 ani");
}


/*
Sarcina 1b - Valori
Urmează următoarele instrucțiuni:
    1. Declarați două variabile și
     atribuiți-le valori
    2. Folosiți o conditie pentru a modifica
    valoarea primei variabile pe baza
     valorii atribuite celei de-a doua variabila
    3. In consola va aparea  valoarea  primei variabile
    SUGESTIE: nu este necesară nicio funcție
*/

let var1 = "Marius";
let var2 = "LC";

if(var1 !== var2){
    var1 = var2;
    console.log(var1);
    console.log(var2);
}


/*
Sarcina 1c - Convert Strings to Numbers
Urmează următoarele instrucțiuni:
    1. Declarați o variabilă de tip
    string cu valoarea „1999”
    2. Convertiți valoarea stringului „1999”
    într-o valoare întreagă in 1999
    3. In consola va aparea rezultatul
    SUGESTIE: căutați metoda Number
*/

let strToNum = "1999"

console.log(Number(strToNum));
console.log(typeof Number(strToNum));

/*
Sarcina 1d - Înmulțirea

Urmează următoarele instrucțiuni:
    1. Creati funcția multiply de mai jos și transmiteți-i
    două numere
    2. Primiți numerele din parametrii: a și b
    3. Înmulțiți a și b și returnați rezultatul
*/

function multiply(a, b) {
    if (typeof a === "number" && typeof b == "number") {
        return a * b
    }else{
        console.log("Nu ati introdus numere");
    }
}

console.log(multiply(4, 5));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Vârsta în DogYears
/*
Urmează următoarele instrucțiuni:
    1. Invocați funcția dogYears de mai jos și transmiteți un
     parametru vârstă
    2. Folosiți valoarea primită pentru a calcula vârsta unui
     câine in ani (1 an uman este egal cu 7 ani la câini )
    3. Returnează vârsta  calculată
*/

function dogYears( age ) {
    return age * 2
}

console.log(dogYears(13));


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Alimentator pentru câini - În funcție de
// greutatea și vârsta lor, trebuie să știm
// câte kilograme de alimente să ne
// hrănească câinele în fiecare zi!
// / *
// Utilizați funcția hungryDog și cerințele de hrănire de mai jos pentru a face următoarele:
//   1. Creati funcția hungryDog de mai jos și dați-i un parametru a greutății în lbs(Pounds)
//   2. De asemenea, treceți la hungryDog un parametru de vârstă în ani (notă: dacă câinele este un cățeluș, vârsta va fi zecimală. De exemplu: trei luni = 3/12 sau .25)
//   3. Faceți calculele corespunzătoare și returnați numărul de kilograme de hrană crudă pentru a hrăni câinele / cățelușul într-o zi
//
//   REȚINEȚI: Acest program ar trebui să gestioneze corect vârstele și greutățile adulților ȘI cățelușilor
//
//   Cerințe de hrănire:
//   Câini adulți mai mare de un an are 5 lbs(Pounds) - 5% din greutatea lor corporală
//      6 - 10 lbs(Pounds) - 4% din greutatea lor corporală
//      11 - 15 lbs(Pounds) - 3% din greutatea lor corporală
//      > 15lbs(Pounds) - 2% din greutatea corporală
//   Puii sub 1 an
//      2 - 4 luni 10% din greutatea corporală
//      4 - 7 luni 5% din greutatea corporală
//      7 - 12 luni 4% din greutatea corporală
//
//   NOTĂ: Dacă se face corect, o greutate de 15 lbs și vârsta de 1 an ar reveni 0,44999999999999996*/

function hungryDog(lbs, dogYears) {
    if (dogYears <= 0.4) {
        return (lbs/100) * 10;
    }else if (dogYears > 0.4 && dogYears <= 0.7){
        return (lbs/100) * 5;
    }else if (dogYears > 0.7 && dogYears < 1){
        return (lbs/100) * 4;
    }else if (dogYears >= 1){
        if (lbs >= 5 && lbs < 6) {
            return (lbs/100) * 5;
        }else if(lbs >= 6 && lbs <= 10){
            return (lbs/100) * 4;
        }else if(lbs >= 11 && lbs <= 15){
            return (lbs/100) * 3;
        }else if(lbs > 15){
            return (lbs/100) * 2;
        }
    }

}

console.log(hungryDog(15, 1));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Piatra, hârtie, foarfeca - Să ne jucăm împotriva
// computerului!
// / *
// Creați o variabilă globală care generează aleatoriu
// alegerea computerului
// Utilizați Math.random pentru a determina alegerea
// computerului (Math.random dă un număr aleatoriu
// între 0 și 1)
// SUGESTIE: Deși puteți completa acest lucru doar cu
// condițiile bazate pe string, vă poate ajuta să
// comparați alegerea cu un număr atunci când utilizați
// Math.random ()
// Utilizați funcția de joc de mai jos pentru a face
// următoarele:
//    1. Primiți 2 parametri alegerea utilizatorului și
//    alegerea computerului
//    2. Returnati dacă utilizatorul a câștigat, a pierdut
//    sau a egalat pe baza acestor reguli de joc descrise
//    mai jos - String-urile returnate trebuie să se
//    potrivească exact cu șirurile de mai jos.
//     - câștiga ar trebui să întoarcă "câștigi!"
//     - pierde ar trebui să întoarcă "pierzi!"
//     - Egal ar trebui să returneze "este egalitate"
//
//    REGULI JOCULUI: foarfeca bate hârtia |
//    Hârtia bate Piatra | Piatra bate foarfeca | Sau există o egalitate
//
//    SUGESTIE: Amintiți-vă că ordinea în care trecem
//    în argumentele noastre contează atunci când vine
//    vorba de parametri*/
//


function game(user, computer) {
    if(typeof user === "string"){
        user = user.toLowerCase()
    if (computer === "piatra") {
        if(user === "piatra"){
            return "este egalitate"
        }else if(user === "hartie"){
            return "castigi"
        }else if(user === "foarfeca"){
            return "pierzi"
        }else{
            return "Ai introdus gresit"
        }
    }else if(computer ==="hartie"){
        if(user === "piatra"){
            return "pierzi"
        }else if(user === "hartie"){
            return "este egalitate"
        }else if(user === "foarfeca"){
            return "castigi"
        }else{
            return "Ai introdus gresit"
        }
    }else if(computer === "foarfeca"){
        if(user === "piatra"){
            return "castigi"
        }else if(user === "hartie"){
            return "pierzi"
        }else if(user === "foarfeca"){
            return "este egalitate"
        }else{
            return "Ai introdus gresit"
        }
    }
 }
}

const rpc = ["piatra","hartie","foarfeca"]
let aleator = Math.floor(Math.random() * rpc.length);
let user ="hartie"

console.log(`User: ${user} , Computer: ${rpc[aleator]} =>  ${game(user, rpc[aleator])}`);



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Exercitiu 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Convertor Km
// // Sarcina 5a - KM in mile
// / *
// Folosind funcția miles de mai jos, faceți următoarele:
//    1. Primeste un numar de kilometri
//    2. Convertiți numărul de kiolmetre primite în mile
//    3. Returnati numărul de mile*/

function miles(km) {
    return km * 0.621371
}

console.log(miles(2365).toFixed(2));


//Sarcina 5b - Picioare in CM
// / *
// Folosind funcția feet de mai jos faceți următoarele:
//    1. Primeste un numar de cm
//    2. Convertiți numărul de cm în picioare
//    3. Întoarceți numărul de picioare*/

function feet(cm) {
    return cm * 0.032808
}

console.log(feet(410).toFixed(2));



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Calculator de note
// / *
// Folosind funcția de grade de mai jos faceți următoarele:
//    1. Primește un scor din 100
//    2. Returnați nota corespunzătoare literei urmând
//    această scală de note:
//     90-100 ar trebui să returneze „ai un A”
//     80-89 ar trebui să returneze „ai un B”
//     70-79 ar trebui să returneze „ai un C”
//     60-69 ar trebui să returneze „ai un D”
//     mai jos ar trebui să returneze „ai un F”*/

function grade(score) {
    if (typeof score === "number" && score <= 100) {
        if (score >= 90) {
            return "ai un A";
        }else if(score >= 80 && score < 90){
            return "ai un B";
        }else if(score >= 70 && score < 80){
            return "ai un C";
        }else if(score >= 60 && score < 70){
            return "ai un E";
        }else{
            return "ai un F";
        }
    }else{
        console.log("Ati introdus gresit, introduceti un numar intre 0 si 100");
    }
}

console.log(grade(79));


/*💪💪💪💪💪💪💪💪💪💪 Puternic 💪💪💪💪💪💪💪💪💪💪*/

//Contor vocal - Câte vocale există?
// / *
// Folosind funcția VowelCounter de mai jos, faceți
// următoarele:
//    1. Primiți un string ca parametru
//    2. Numărați și returnați numărul de vocale din
//    stringul respectiv.
//    Ar trebui să se ia atât  vocale cu majuscule, cât
//    și de vocale minuscule.
//    SUGESTIE - poate fi necesar să studiați Array
//    SUGESTIE - încercați să căutați metoda .includes ()*/


function vowelCounter(string) {
    return string.match(/[aeiou]/gi).length
}

console.log(`Nr de vocale in string : ${vowelCounter("Voi fi cel mai ciotkii programist")}`);

// Nu modificați nimic din numele
// funcțiilor

const multiplyByTen = (num) => {
    // returnează num după ce îl înmulțești
    // cu zece
    return num * 10;

};

console.log(`multiplyByTen: ${multiplyByTen(3)}`);

const subtractFive = (num) => {
    // returnează num după scăderea cu cinci
    return num - 5;
};

console.log(`substractFive: ${subtractFive(17)}`);

const areSameLength = (str1, str2) => {
    // returnează true dacă cele două
    // string-uri au aceeași lungime
    // altfel returnează false
    if (str1.length === str2.length) {
        return true;
    }else{
        return false;
    }

};
console.log(`areSameLength: ${areSameLength("hello" , "hello" )}`)


const areEqual = (x, y) => {
    // returnează adevărat dacă x și y
    // sunt egale
    // altfel returnează false
    if (x === y) {
        return true;
    }else{
        return false;
    }

};

console.log(`areEqual: ${areEqual( 1 , 1 )}`);

const lessThanNinety = (num) => {
    // returnează adevărat dacă num este
    // mai mic de nouăzeci
    // altfel returnează false
    if (num < 90) {
        return true
    }else{
        return false
    }
};

console.log(`lessThanNinety: ${lessThanNinety(100)}`);

const greaterThanFifty = (num) => {
    // returnează true dacă num este mai
    // mare de cincizeci
    // altfel returnează false
    if (num > 50) {
        return true
    }else{
        return false
    }
};

console.log(`greaterThanFifty: ${greaterThanFifty(49)}`);

const add = (x, y) => {
    // adăugați x și y împreună și
    // returnați valoarea
    if (typeof x ==="number" && typeof y ==="number") {
        return x + y
    }else{
        return "Nu ati introdus un numar"
    }

};
console.log(`add: ${add(5, 10)}`)

const subtract = (x, y) => {
    // scade y din x și returnează valoarea
    if (typeof x ==="number" && typeof y ==="number") {
        return y - x;
    }else{
        return "Nu ati introdus un numar"
    }
};

console.log(`substract: ${subtract(3, 7)}`);

const divide = (x, y) => {
    // împarte x cu y și returnează valoarea
    return x / y;
};

console.log(`divide: ${divide(15, 5)}`);

const multiplier = (x, y) => {
    // înmulțiți x cu y și returnați valoarea
    return x * y;

};
console.log(`multiplier: ${multiplier(15, 5)}`);

const getRemainder = (x, y) => {
    // returnează restul de la
    // împărțirea x la y
    return x % y;
};

console.log(`getRemainder: ${getRemainder(15,4)}`);


const isEven = (num) => {
    // returnează true dacă num este par
    // altfel returnează false
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }

};
console.log(`isEven: ${isEven(8)}`);


const isOdd = (num) => {
    // return true if num is odd
    // otherwise return false
    if(num % 2 !== 0){
        return true;
    }else{
        return false;
    }
}

console.log(`isOdd: ${isOdd(8)}`);


const square = (num) => {
    // num la pătrat și returnează
    // noua valoare
    return num**2

};
console.log(`square: ${square(8)}`);

const cube = (num) => {
    // num la cub și returnează noua valoare
    return num**3

};
console.log(`cube: ${cube(5)}`);


const raiseToPower = (num, exponent) => {
    // ridicați numărul la orice putere este trecută ca exponent
    return num ** exponent;
};

console.log(`raiseToPower: ${raiseToPower(5,2)}`);

const roundNumber = (num) => {
    // rotunjește num și returnează-l
    return Math.round(num);

};
console.log(`roundNumber: ${roundNumber(4.9)}`);

const roundUp = (num) => {
    // rotunjește numărul in sus și returnează-l
    return Math.ceil(num);
};

console.log(`roundUp: ${roundUp(6.1)}`);

const addExclamationPoint = (str) => {
    // adaugă un semn de exclamare la sfârșitul str și returnează noul string
    // 'hello world' -> 'hello world!'
    return str + "!";
};

console.log(`addExclamationPoint: ${addExclamationPoint("radu")}`);

const combineNames = (firstName, lastName) => {
// returnează firstName și lastName combinate ca un
// șir și separate printr-un spațiu.
// 'Scoala', 'LearnIt' -> 'Scoala LearnIt'
    return `${firstName} ${lastName}`

};
console.log(`combineName: ${combineNames("radu", "botez")}`);

const getGreeting = (name) => {
    // Luați string-ul  name și concatenați
    // alte string-uri pe el, astfel încât să ia
    // următoarea formă:
    // 'Sam' -> 'Salut Sam!'
    // cod aici
    return "Salut " + name + "!"
};
console.log(`getGreeting: ${getGreeting("Radu")}`);


const getRectangleArea = (length, width) => {
    // returnează aria dreptunghiului
    // folosind length si width
    return length * width

};
console.log(`getRectangleArea: ${getRectangleArea(2,2)}`);

const getTriangleArea = (base, height) => {
    // returnează aria triunghiului
    // folosind base și base
    return (base * height)/2

};
console.log(`getTriangleArea: ${getTriangleArea(5,6)}`);

const getCircleArea = (radius) => {
    // returnează zona rotunjită a cercului
    // dată de radius
    return 3.14*(radius**2);
};


console.log(`getCircleArea: ${getCircleArea(1)}`);

const getRectangularPrismVolume = (length, width, height) => {
    // returnează volumul prismei dreptunghiului
    // 3D, având în vedere length, width și height
    return length * width * height
};

console.log(`getRectangularPrismVolume: ${getRectangularPrismVolume(4,2,2)}`)

// Nu modificați  numele funcțiilor

const getBiggest = (x, y) => {
    // x și y sunt numere întregi.
    // Returnează numărul întreg mai mare
    // dacă sunt aceleași returnează fie unul
    if (x > y) {
        return x
    }else if(x < y){
        return y
    }else{
        return 1
    }
};
console.log(`getBiggest: ${getBiggest(5,4)}`);


const greeting = (language) => {
// returnează o felicitare pentru trei limbi diferite:    // language: 'German' -> 'Guten Tag!'
    // limba: 'Spanish' -> 'Hola!'
    // limba: 'Chinese' -> 'Ni Hao!'
    // dacă limba este nedefinită, return 'Hello!'
    switch (language) {
        case "German":
            return "Guten Tag!";
        case "Spanish":
            return "Hola!";    
        case "Chinese":
            return "Ni Hao!";    
        default:
            return "Hello";
    }

};
console.log(`greeting: ${greeting("Chinese")}`);

const isTenOrFive = (num) => {
    // returnează true dacă num este 10 sau 5
    // altfel returnează false
    if(num === 10 || num === 5){
        return true;
    }else{
        return false;
    }
};

console.log(`isTenOrFive: ${isTenOrFive(7)}`);

const isInRange = (num) => num > 20 && num < 50 
//     // returnează adevărat dacă num este
//     // mai mic de 50 și mai mare de 20

//     if () {
//          return true;
//     }else{
//         return false;
//     }
    
// };
console.log(`isInRange: ${isInRange(75)}`);

const isInteger = (num) => {
    // returnează adevărat dacă num este
    // un număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest lucru folosind Math.floor


};
console.log(isInteger(-10));

const fizzBuzz = (num) => {
    // returnează adevărat dacă num este un
    // număr întreg
    // 0,8 -> fals
    // 1 -> adevărat
    // -10 -> adevărat
    // altfel returnează false
    // sugestie: puteți rezolva acest
    // lucru folosind Math.floor
};

const isPrime = (num) => {
    // returnează adevărat dacă num
    // este prim.
    // altfel returnează false
    // sugestie: un număr prim este doar
    // divizibil în mod egal prin el însuși
    // și 1
    // sugestie2: puteți rezolva acest
    // lucru folosind un ciclu for
    // notă: 0 și 1 NU sunt considerate
    // numere prime

};
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(4));


const returnFirst = (arr) => {
    // returnează primul element din array
};

const returnLast = (arr) => {
    // returnează ultimul element din array
};

const getArrayLength = (arr) => {
    // returnează lungimea din array
};

const incrementByOne = (arr) => {
    // arr este un array de numere întregi
    // măriți fiecare număr întreg cu unu
    // returnează array-ul
};

const addItemToArray = (arr, item) => {
    // adăugați elementul la sfârșitul array-ului
    // returnează matricea
};

const addItemToFront = (arr, item) => {
    // adăugați elementul în partea din față a array-ului
    // returnează array-ului
    // sugestie: utilizați metoda array .unshift
};

const wordsToSentence = (words) => {
    // words este un array de string-uri
    // returnează un string care conține toate cuvintele concatenate împreună
    // spațiile trebuie să fie între fiecare cuvânt
    // exemplu: ['Hello', 'world!'] -> 'Hello world!'
};

const contains1 = (arr, item) => {
    // verificați dacă item se află în interiorul arr
    // returnează true dacă este,
    // în caz contrar returnează false
};

const addNumbers = (numbers) => {
    // numbers este un array de numere
    // întregi.
    // aduna toate numerele întregi și
    // returnează valoarea
};

const averageTestScore = (testScores) => {
    // testScores este un array.
    // mergi prin  testScores și
    // calculează media.
    // returnează media
};

const largestNumber = (numbers) => {
    // numbers este un array de numere
    // întregi
    // returnează cel mai mare număr întreg
};

// Do not change any of the function names

const makeCat = (name, age) => {
    // create a new object with a name property with the value set to the name argument
    // add an age property to the object with the value set to the age argument
    // add a method called meow that returns the string 'Meow!'
    // return the object
};

const addProperty = (object, property) => {
    // add the property to the object with a value of null
    // return the object
    // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
};

const invokeMethod = (object, method) => {
    // method is a string that contains the name of a method on the object
    // invoke this method
    // nothing needs to be returned
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
    // mysteryNumberObject has a property called mysteryNumber
    // multiply the mysteryNumber property by 5 and return the product
};

const deleteProperty = (object, property) => {
    // remove the property from the object
    // return the object
};

const newUser = (name, email, password) => {
    // create a new object with properties matching the arguments passed in.
    // return the new object
};

const hasEmail = (user) => {
    // return true if the user has a value for the property 'email'
    // otherwise return false
};

const hasProperty = (object, property) => {
    // return true if the object has the value of the property argument
    // property is a string
    // otherwise return false
};

const verifyPassword = (user, password) => {
    // check to see if the provided password matches the password property on the user object
    // return true if they match
    // otherwise return false
};

const updatePassword = (user, newPassword) => {
    // replace the existing password on the user object with the value of newPassword
    // return the object
};

const addFriend = (user, newFriend) => {
    // user has a property called friends that is an array
    // add newFriend to the end of the friends array
    // return the user object
};

const setUsersToPremium = (users) => {
    // users is an array of user objects.
    // each user object has the property 'isPremium'
    // set each user's isPremium property to true
    // return the users array
};

const sumUserPostLikes = (user) => {
    // user has an array property called 'posts'
    // posts is an array of post objects
    // each post object has an integer property called 'likes'
    // sum together the likes from all the post objects
    // return the sum
};

const addCalculateDiscountPriceMethod = (storeItem) => {
    // Add a method to the storeItem object called 'calculateDiscountPrice'
    // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
    // The method then subtracts the discount from the price and returns the discounted price
    // example:
    // price -> 20
    // discountPercentage -> .2
    // discountPrice = 20 - (20 * .2)
    // Make sure you return storeItem after adding the method to it
    // hint: arrow functions don't bind a this
};
const getFirstItem = (collection, cb) => {
    // invoke the callback function and pass the first item from the collection in as an argument
};

const getLength = (collection, cb) => {
    // Write a function called getLength that passes the length of the array into the callback
};

const getLastItem = (collection, cb) => {
    // Write a function called getLastItem which passes the getLastItem item of the array into the callback
};

const sumNums = (x, y, cb) => {
    // Write a function called sumNums that adds two numbers and passes the result to the callback
};

const multiplyNums = (x, y, cb) => {
    // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
};

const contains = (collection, item, cb) => {
    // Write a function called contains that checks if an item is present inside of the given array.
    // Pass true to the callback if it is, otherwise pass false
};

const removeDuplicates = (collection, cb) => {
    // Write a function called removeDuplicates that removes all duplicate values from the given array.
    // Pass the array to the callback function.  Do not mutate the original array.
};

/* Creați o funcție numită „sumare” care
 acceptă un parametru și utilizează un
 contor pentru a returna însumarea acelui
 număr. De exemplu, „sumare (4)” ar trebui să
 returneze 10 deoarece 1 + 2 + 3 + 4 este 10. * /
 */

// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task: Variabile
/* Creați variabile ( principala, rata dobânzii
și ani cu valorile 200000, 0,05 și respectiv 30).
 Creați o altă variabila numită nume și dați-i valoarea propriului nume.*/





// 🏡 Task :  Math
/* Pentru a crea un calculator al ratei ipotecii lunare
 , trebuie să cunoaștem numărul de ani în luni și rata lunară a
 dobânzii.
(1) Creați o variabilă numită „interestInterestRate”
și dați-i valoarea ratei dobânzii împărțită la 12.
(2) Creați o altă variabilă numită „perioade”
și dați-i valoarea de (ani * 12).
*/




// 🏡 Task :  Math
/* Creați-vă calculatorul! Utilizați formula din
ReadMe(de asemenea, mai jos) pentru a rula
 calcule  dvs. Salvați valoarea finală într-o
  variabilă numită monthRate.
M = P [I (1 + I) ^ N] / [(1 + I) ^ N - 1]
Sugestie: deși aceste calcule pot fi făcute într-o
 singură linie, ar putea fi util să creați
 variabile separate pentru a păstra părți ale
  ecuației. Ar putea arăta astfel:
(1) Creați o variabilă numită n1 și setați-o egală
 cu (1 + MonthInterestRate) ^ N
(2) Creați o variabilă numită numerator și setați-o
 egală cu p * n1 * monthInterestRate
(3) Creați o variabilă numită numitor și setați-o
 egală cu n1 - 1
(4) Creați o variabilă numită monthRate și setați-o
 egală cu numărător / numitor
Sugestie # 2: va trebui să utilizați obiectul
 `math` pentru a impărți din acest calcul!
Când matematica este corectă, rata lunară va fi
egală cu 1073,64*/




// 🏡 Task: Function
/* Creați o funcție numită `mortgageCalculator` care combină toți
pașii de la sarcina 1 și 2 și returnează o propoziție„
{Name}, rata dvs. lunară este $ {monthRate} ”
Dacă numele tău este `Oscar` hypothCalculator () ar trebui să
 returneze„ Oscar, rata ta lunară este de 1073,64 ”*/





// 🏡 Task : Argumente and Parametri
/* Înlocuiți variabilele din funcțiile dvs.
 cu parametri, astfel încât să puteți înlocui
 „P“, „I” și „N” când apelați funcția.
De exemplu,
mortgageCalculator (200000, 0,05, 30); <-
ar trebui să returneze 1.073,64*/





// 🏡 Task : Conditionals
/* Adăugați un alt parametru la funcția dvs. numit scor de credit.
 Acest parametru va fi un număr între 0 și 800 (un scor de credit).
Apoi, adăugați fluxul de control în cadrul funcției dvs. astfel
 încât daca creditScore este peste 740, rata dobânzii scade
 cu 0,5%, dacă scorul de credit este sub 660, rata dobânzii
  crește cu 0,5% și dacă scorul de credit este între 660 și 740
   rata dobânzii nu se schimbă.
Sugestie: pentru a scădea o rată a dobânzii cu 5%,
 puteți lua o rată lunară și o puteți multiplica cu 0,95.
  În mod similar, pentru a crește rata dobânzii cu 5%, ați face o
   rată lunară * 1,05.*/




// 🏡 Task : Loops
/* Scrieți o nouă funcție numită variableInterestRate.
Această funcție ar trebui să fie aceeași ca mortgageCalculator,
 cu excepția cazului în care ar trebui să scoata in console.log
  plata lunară pentru 10 rate ale dobânzii diferite la 0,5%,
  plus sau minus 2% din rata dobânzii introduse.
  Completați aceste calcule folosind un ciclu for.
De exemplu, variableInterestRate (200000, 0,04, 30) ar trebui să
scoata in consola:
„{Name}, cu o rată a dobânzii de 0,02, rata lunară este de 739 USD”
„{Name}, cu o rată a dobânzii de 0,025, rata lunară este de 790 USD”
„{Name}, cu o rată a dobânzii de 0,03, rata lunară este de 843 USD”
„{Name}, cu o rată a dobânzii de 0,035, rata lunară este de 898 USD”
„{Name}, cu o rată a dobânzii de 0,04, rata lunară este de 955 USD”
„{Name}, cu o rată a dobânzii de 0,045, rata lunară este de 1013 USD”
„{Name}, cu o rată a dobânzii de 0,05, rata lunară este de 1074 USD”
„{Name}, cu o rată a dobânzii de 0,055, rata lunară este de 1136 USD”
„{Name}, cu o rată a dobânzii de 0,06, rata lunară este de 1199 USD”*/


// ⭐️ Start ⭐️

/**
 * ###  `addNumbers`
 *
 * @instructions
 * Funcția  ar trebui să poată lua
 * două numere ca argumente și
 * să returneze rezultatul adunarii lor.
 *
 *
 *
 *
 */
// function addNumbers(num1, num2) {

// }

// addNumbers(1, 2);

// ⭐️ Sfarsit ⭐️


/**
 * ###  `sayGoodbye`
 *
 * @instructions
 * Această funcție ar trebui să ia un
 * nume ca argument și să returneze un string
 * care spune „La revedere, {nume}. O zi bună.'
 *
 *
 */
function sayGoodbye(name) {

}

sayGoodbye('Viorel')

/**
 * ###  `temperatureCtoF`
 *
 * @instructions
 * Această funcție ar trebui să ia o
 * temperatură în grade Celsius ca argument și să returneze temperatura în fahrenheit,
 * rotunjită la cel mai apropiat număr întreg.
 *
 * De exemplu, dacă scriem `temperatureCtoF`
 * trecând 24 ca argument,
 * valoarea returnată trebuie să fie: 75
 *
 * Sugestie 1: Formula pentru conversia celsius
 * în fahrenheit este t * 9/5 + 32 unde
 * t este temperatura în celsius.
 * Sugestie 2: Există un mod foarte simplu de
 * a rotunji numerele în JS. Efectuați o
 * căutare pe Google pentru a afla cum. */
function temperatureCtoF(t) {


}

console.log(temperatureCtoF(24))

/**
 * ###  `temperatureInF`
 *
 * @instructions
 * Această funcție ar trebui să ia o
 * temperatură și o unitate (fie „F”, fie „C”)
 * ca argumente și să returneze temperatura în fahrenheit,
 * rotunjită la cel mai apropiat număr întreg.
 *
 * De exemplu, dacă apelam `temperatureInF`
 * trecând 88, „F” ca argumente,
 * valoarea returnată trebuie să fie: „88F”
 *
 * Dacă apelam `temperatureInF`
 * trecând 24, „C” ca argumente,
 * valoarea returnată trebuie să fie: „75F”
 *
 Sugestie: Puteți apela funcția dvs. `temperatureCtoF` din interiorul` temperatureInF`. */
function temperatureInF(t1, u) {


}

console.log(temperatureInF(24, "F"));
;// rezultatul trebuie sa fie urmatorul 24F
console.log(temperatureInF(24, 'C'));// 24F





