`use strict`

//new

// const a = new Array("salut", 33, "a")
// console.log(a[0]);

const arr22 = [2, 33, 4, "Tuzik", "Sarik"]
// arr22[1] = 100;
// arr22[5] = "Marius"
// arr22[100] = "Vasile" 
// console.log(arr22.length);

//Metoda push

arr22.push(11, 345, "Andrei");
arr22.pop(); //Fara parametri

arr22.unshift(99, true, 98, 97);

arr22.shift();



for (const obj in arr22) {
    console.log(arr22[obj]);    
    }

const arr33 = [22, 33, 44, 55, 66, 77, 88, 99]
const ultimul = arr33.length-1;

console.log(ultimul);

const arr3 = [111, 222, 777]

const ar1 = [1, 2, 3, 4, 5 ,2, 11]
ar1.fill("Dumitru", 1, 3)

const ar2 = [4, 5, 6, 7]

const ar4 = [...ar1, ...ar2, ...arr3, 99, 80]

// console.log(ar4);

// console.log((ar1.includes(4)));

// console.log(ar1.join(" "));

// console.log(ar1.indexOf(4));

const students = ["Abigail", "Huan", "Nicoleta", "Marius", "George"]
console.log(students.indexOf("Huan"));
console.log(students.reverse());
console.log(ar1.sort());

console.log(ar1.splice(1, 2, "Andrei"));
console.log(ar1);

ar1.slice(1, 4)
console.log(ar1);

const zverii = ["Marius", "Ionela", "Vasile", "Nicolai", "Maria"];
const utm = ["Virgil", "Andrei", "Gabriel", "Dumitru", "Sandu"];
const grupa = ["Viorel", ...zverii, ...utm]

// grupa.push("Alexandru");

// grupa.unshift("Sergio");

// grupa.pop();

// grupa.shift()

// console.log(grupa);
// console.log(grupa.reverse());

// console.log(grupa.join(" "));

// console.log(grupa);

// grupa.splice(4, 0, "Alexandru")
// console.log(grupa);

console.log(grupa.slice(1,6));