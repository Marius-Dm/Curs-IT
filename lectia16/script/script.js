`use strict`

const threeNum = [10, 20, 30]
let sum = 0;

// for (let i = 0; i < threeNum.length; i++) {
    
//     sum += threeNum[i];
// }

// console.log(sum);


// METODA REDUCE
// const sumArray =  threeNum.reduce((precedent, curent)=> {
//     console.log(`Previous = ${precedent}`);
//     console.log(`Curent = ${curent}`);
//     return precedent+curent;
// } , 10)

// console.log(sumArray);

// const culori = [
//     {
//         color: "Rosu"
//     },
//     {
//         color: "Green"
//     },
//     {
//         color: "Black"
//     },
//     {
//         color: "Orange"
//     },
//     {
//         color: "Pink"
//     }
// ]

// let colorArr = culori.reduce((prev, current) =>{
//     prev.push(current.color);
//     return prev;
// }, [])

// console.log(colorArr);

// const str = "(((())))"

// const balance = (string) =>{
//     return !string.split("").reduce((prev, current)=>{
//         if (prev < 0) {
//             console.log(`prev1 = ${prev}`);
//             console.log(`current1 = ${current}`);
//             return prev;
//         }
//         if (current === "("){
//             console.log(`prev2 = ${prev}`);
//             console.log(`current2 = ${current}`);
//             return ++prev;
//         }
//         if (current === ")") {
//             console.log(`prev3 = ${prev}`);
//             console.log(`current = ${current}`);
//             return --prev;
//         }
        
//         return prev;
//     }, 0)
// }

// console.log(balance(str));

const arrPrenume = ["Marius","Virgil","Maria","Gabriel","Ionela","Andrei","Sandu","Dumitru","Vasile","Nicolae"];
const prenumeSortate = arrPrenume.sort();

console.log(prenumeSortate);

const arrNumere = [33, 12, 13, 4, 7, 21, 75, 22, 31, 9, 17];

const numereSortate = arrNumere.sort((a, b) => {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    return a-b});

console.log(numereSortate);
