// 1.	Pe baza array-ului [1,2,3,5,8,9,10] formează un nou array, fiecare element care va stoca informații despre numărul și daca este par sau nu:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

// const arr1 = [1,2,3,5,8,9,10];

// const isOdd = arr1.map(items =>{
//     return {digit: items, odd: items%2===0}
// });

// console.log(isOdd);

// // 2.	Verificați dacă array-ului [12, 4, 50, 1, 0, 18, 40] conține elemente egale cu zero. Dacă da, returnati true.

// arr2 = [12, 4, 50, 1, 0, 18, 40];


// const containZero = (x) =>{
//     return arr2.includes(x);
// }

// console.log(containZero(0));


// 3.	Verificați dacă array-ului ['yes', 'hello', 'no', 'easycode', 'what'] conține cel puțin un cuvânt mai lung de 3 litere. Dacă da, returnati true.

const arr3 = ['yes', 'hello', 'no', 'easycode', 'what'];

const wordLength = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 3) {
            return true;
        }
    }
        }
    


// console.log(wordLength(arr3));

// 4.	Este oferit un array-ul de obiecte, în care fiecare obiect conține informații despre literă și locul poziției sale în linie {literă: ‘a’, locul_pozitiei: 1}:


// 5.	[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Scrieți o funcție care va colecta și va returna din elementele array-ului un șir bazat pe index-ul fiecărei litere. De exemplu:

// const arr5 =[{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

// const sortArr5 = (arr) =>{
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1) ; j++) {
//             if(arr[j].index > arr[j + 1].index){
        
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = temp
//               }
//         }
        
//     }
//     return arr;
// }

// console.log(sortArr5(arr5));

// 6.	Sortează array-ul astfel încât cele mai mici elemente să fie localizate mai întâi (dimensiunea array-ului este determinată de lungimea acestuia): 
// [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

const arr6 = [  [14, 45],  [1],  ['a', 'c', 'd']  ];

const sortArr6 = (array) =>{
for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < (array.length - i - 1) ; j++) {
                if(array[j].length > array[j + 1].length){
            
                    let temp = array[j]
                    array[j] = array[j + 1]
                    array[j+1] = temp
                  }
            }
               
        }
        return array; 
    }

console.log(sortArr6(arr6));


// 7.	Este array-ul:
// [
//    {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
// Sortează-le in ordine crescatoare dupa  nuclee (cores)

let arr7 = [
    {cpu: 'intel', info: {cores:2, сache: 3}},
     {cpu: 'intel', info: {cores:4, сache: 4}},
     {cpu: 'amd', info: {cores:1, сache: 1}},
     {cpu: 'intel', info: {cores:3, сache: 2}},
     {cpu: 'amd', info: {cores:4, сache: 2}}
 ]

 const sortArr7 = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1) ; j++) {
            if(arr[j].info.cores > arr[j + 1].info.cores){
        
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
              }
        }
        
    }
    return arr;
}

console.log(sortArr7(arr7));

// 8.	Creați o funcție care va lua o serie de produse și două prețuri. Funcția ar trebui să returneze toate produsele al căror preț este în diapazonul specificat și să sorteze de la ieftin la scump:
// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

const filterCollection = (array, m, n) =>{
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].price >= m && array[i].price <= n){
        let lowest = i
        for (let j = i + 1; j < array.length; j++) {
          if (array[j].price < array[lowest].price) {
            lowest = j
          }
        }
        if (lowest !== i) {

          [array[i].price, array[lowest].price] = [array[lowest].price, array[i].price]
            }
        }
      }
      return array

}

console.log(filterCollection(products, 15, 30));