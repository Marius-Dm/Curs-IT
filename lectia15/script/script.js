`use strict`

// const arr = [1, 3, 6, 3, 21, 4, 18, 11, 23 , 7, 19];

// const oddNmbr = arr.map(items =>{
//     if (items % 2 === 0) {
//         return items;
//     }
// })

// console.log(oddNmbr);

// const evenNmbr2 = arr.filter(items => items % 2 ===0)

// console.log(evenNmbr2);


// const oddNmbr2 = arr.filter(items => items % 2 === 1)

// console.log(oddNmbr2);

// const persoane = [{
//     nume: "Ionel",
//     gen: "Masculin",
//     casatorit: true,
//     varsta : 18,
//     salariu : 21000
// },
// {
//     nume: "Maria",
//     gen: "Feminin",
//     casatorit: true,
//     varsta : 21,
//     salariu : 26300
// },{
//     nume: "Virgil",
//     gen: "Feminin",
//     casatorit: false,
//     varsta : 17,
//     salariu : 17000
// },
// {
//     nume: "Vladimir",
//     gen: "Masculin",
//     casatorit: true,
//     varsta : 31,
//     salariu : 32000
// },
// {
//     nume: "Anton",
//     gen: "Masculin",
//     casatorit: true,
//     varsta : 19,
//     salariu : 22000
// },
// {
//     nume: "Nicoleta",
//     gen: "Feminin",
//     casatorit: false,
//     varsta : 27,
//     salariu : 41000
// },
// {
//     nume: "Andreea",
//     gen: "Feminin",
//     casatorit: false,
//     varsta : 25,
//     salariu : 20500
// },
// {
//     nume: "Cristi",
//     gen: "Masculin",
//     casatorit: true,
//     varsta : 16,
//     salariu : 8000
// }

// ]

// let feminin = [];
//     for (let i = 0; i < persoane.length; i++) {
//         if(persoane[i].gen === "Feminin"){
//             feminin.push(persoane[i]);
//         }       
//     }

// console.log(feminin);


// const masculin = persoane.filter(item => item.gen === "Masculin")
// console.log(masculin);

// const casator = persoane.filter(item => item.casatorit).map(item => item.nume)
// console.log(casator);

// const filterPerson = persoane.filter(item => item.varsta > 25 && item.salariu > 21000)

// console.log(filterPerson);     
 

// arr2 = [22, 21, 10, 7, 17, 18, 32, 52, 33, 4, 15]

// const evenNmbr3 = arr2.find(item => item % 2 === 0);

// console.log(evenNmbr3);

// const firstWoman = persoane.find(item => item.gen === "Feminin");

// console.log(firstWoman);



//Destructurizarea

const arr3 = [undefined, 21, 17];

const arr00 = arr3[0];
const arr01 = arr3[1];
const arr02 = arr3[2];
// console.log(arr01);
// console.log(arr00);

const[a = 100,...b] = arr3;
// console.log(a);
// console.log(b);

const calcValue = (a,b) =>{
    return [
        undefined,
        a - b,
        a * b,
        a / b
    ]
}

let [sum = 10, subs, ...rest] = calcValue( 3 , 2 );

// console.log(sum);
// console.log(subs);
// console.log(rest);


const persons = 
    {
        nume: "Marius",
        varsta: 21,
        address: {
            tara: "Moldova",
            oras: {
                city: "Chisinau",
                street: "Cuza-Voda",
                bloc: 43
            }
        }
    }


// const persName = persons.nume;
// const persVarst = persons.varsta;
// const persTara = persons.address.tara;
// const persOras = persons.address.oras;
// console.log(persName);
// console.log(persVarst);
// console.log(persTara);
// console.log(persOras);

const nume = "Maria"


const {nume:firstName , varsta, address:{tara, oras:{city,street, bloc}}} = persons;


console.log(firstName);
console.log(varsta);
console.log(tara);
console.log(city);
console.log(street);
console.log(bloc);

const datePers = ({nume, varsta}) =>{
    return `Persoana are numele ${nume} si varsta ${varsta}`
}

console.log(datePers(persons));
