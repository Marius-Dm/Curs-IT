if (7 < 4) {
    console.log("7 e mai mare ca 4");
}else{
    console.log("error");
}

7 > 4 ? console.log("7 e mai mare ca 4"):console.log("Error");

const b = 50;
if (b < 50) {
    console.log("a este mai mic ca 50");
}else if(b > 50){
    console.log("a este mai mare ca 50");
}else{
    console.log("a este egal cu 50");
}

b < 50 ? console.log("a este mai mic ca 50"): b > 50 ? console.log("a este mai mare ca 50") : console.log("a este egal cu 50");

const student = "Virgil";

switch (student){
    case "Virgil":
        console.log("Virgil este studentul nostru");
        break;
    case "Ciprian":
        console.log("Who is Ciprian?");
        break
    default:
        console.log("Nu avem asa student");
}

let iterator = 0;
while (iterator <= 10){
    console.log("Iteratia ",iterator);
    iterator++;
}

let a = 5;
a++;
console.log(++a);

// for (let i = 0; i < 10; i++) {
    
// }

for (let i = 55; i < 106; i++){
    if(i%2 ===  0){
        console.log(i);
    }
}

let count = 0; 
let numeStudent = "Vasile";
for (let i = 0; i < numeStudent.length; i++) {
    if (numeStudent[i].toLowerCase().charCodeAt() === 97 ||
        numeStudent[i].toLowerCase().charCodeAt() === 101 ||
        numeStudent[i].toLowerCase().charCodeAt() === 105 ||
        numeStudent[i].toLowerCase().charCodeAt() === 111 ||
        numeStudent[i].toLowerCase().charCodeAt() === 117 ||
        numeStudent[i].toLowerCase().charCodeAt() === 121 ) 
        {
        console.log(numeStudent[i]);
        count++;
    }
    
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`); 
    }
    console.log("");
}
