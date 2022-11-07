 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

arr.forEach((item ,index, array )=> {
    console.log(`item = ${item}, index = ${index}, array = ${array}`);
});
 
// arr.forEach((item) =>{
//     if(item % 2 === 0){
//         console.log(item * 2);
//     }else{
//         console.log(item * 3);
//     }
// });

// const students = ["Marius","Virgil","Ionela","Vasile","Nicolae","Maria","Gabriel","Alexandru","Sandu","Dumitru"];

// // students.forEach((item) => {
// //     console.log(item);
// // });

// const studenti = [
//     {
//         nume: "Dumitras",
//         prenume: "Marius",
//         varsta: 21
//     },
//     {
//         nume: "Kennedy",
//         prenume: "Leon",
//         varsta: 32
//     },
//     {
//         nume: "Gromopiotr",
//         prenume: "Johnson",
//         varsta: 18
//     }
// ]

// studenti.forEach((item) =>{
//     console.log(item.nume);
// })

// for (let i = 0; i < studenti.length; i++) {
//     console.log(`${studenti[i].nume} ${studenti[i].prenume}`);
    
// }

// const imagini =[
//     {
//         width: 30,
//         heigth: 20
//     },
//     {
//         width: 40,
//         heigth: 30
//     },
//     {
//         width: 50,
//         heigth: 40
//     },
//     {
//         width: 60,
//         heigth: 50
//     },
// ]

// const aria = [];

// imagini.forEach(item => {
//     aria.push(item.width * item.heigth)
    
// });
// console.log(aria.join(" "));

const numere = [3, 14, 410, 11, 44, 21, 9, 4];
const arrGol = [];

// for (let i = 0; i < numere.length; i++) {
//     if(numere[i] % 2 === 0){
//         arrGol.push(numere[i]*2)
//     }else{
//         arrGol.push(numere[i]*3)
//     }
// }

// console.log(arrGol.join(" "));

// const arrayModificat = numere.map(item =>{
//     if(item % 2 === 0){
//         return item *2
//     }else{
//         return item *3
//     }
// })

// console.log(arrayModificat.join(" "));

// const nrLaPatrat = numere.map(item =>{
//     return item**2;
// })

// console.log(nrLaPatrat);

// const cars = [
//     {
//         model: "Toyota",
//         pret: 24000
//     },
//     {
//         model: "Renault",
//         pret: 15000
//     },
//     {
//         model: "Volga",
//         pret: 11000
//     },
//     {
//         model: "Zapojets",
//         pret: 9000
//     },
//     {
//         model: "WolksVagen",
//         pret: 21000
//     }


// ]

// const modelCars = cars.map(item =>{
//     return item.model
// })

// console.log(modelCars.join(" "));

// const calatorii = [
//     {
//     nume: "Tokyo",
//     distanta: 800,
//     timp:6
//     },
//     {
//     nume: "Italia",
//     distanta: 420,
//     timp:1.2
//     },
//     {
//     nume: "Germania",
//     distanta: 300,
//     timp:3
//     },
//     {
//     nume: "America",
//     distanta: 330,
//     timp: 7
//     },
//     {
//     nume: "Polonia",
//     distanta: 400,
//     timp: 5
//     }
    
// ];

// const viteza = calatorii.map(items => { return items.distanta / items.timp})

// viteza.forEach(element => {
//     console.log(`${element.toFixed(2)} km/h`);    
// });

const user = [
    {
        nume: "Dumitras",
        prenume: "Marius"
    },
    {
        nume: "Stratulat",
        prenume: "Petru"
    },
    {
        nume: "Crudu",
        prenume: "Cristi"
    }
]

// const numele = users.map(item => {
//     return item.nume
// })
// console.log(numele);


const cars = [
    {
        model: "Toyota",
        tara: "Japonia"
    },
    {
        model: "Zaporojets",
        tara: "Russia"
    },
    {
        model: "Renault",
        tara: "Italia"
    }
]

// const modele = cars.map(item => {
//     return item.model;
// })
// console.log(modele);

const animal = [
    {
        tip: "Tigru",
        familia: "Felina"
    },
    {
        tip: "Crocodil",
        familia: "Reptilii"
    },
    {
        tip: "Paun",
        familia:"Zburatoare"
    }
]

// const tipuri = animal.map(item =>{
//     return item.tip;
// })

// console.log(tipuri);

const easyMap = (array, props) =>{
    return array.map(item => item[props])
}

const names = easyMap(user, "nume");
const modele = easyMap(cars, "model");
const tipuri = easyMap(animal, "tip");
console.log(names);
console.log(modele);
console.log(tipuri);
