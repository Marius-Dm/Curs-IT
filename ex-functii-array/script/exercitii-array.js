`use strict`

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and
// assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns
// the boolean value true
// To complete Exercise #0, uncomment the following line of JS
const doingJSRightNow = true;
console.log(doingJSRightNow);

//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign
// it the boolean value of false

const onMarsRightNow = false;
console.log(onMarsRightNow);



// Exercise 2
// Create a variable named fruits and assign it an array of strings
// containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.

const fruits = ['mango','banana','guava','kiwi','strawberry'];


//  Exercise 3
//  Create a variable named vegetables and assign it an array of fruits
//  containing the following vegetable names as strings:
//  eggplant, broccoli, carrot, cauliflower, and zucchini

// const vegetables = [
//     {
//         name: 'eggplant'
//     },
//     {
//         name: 'broccoli'
//     },
//     {
//         name: 'carrot'
//     },
//     {
//         name: 'cauliflower'
//     },
//     {
//         name: 'zucchini'
//     }
// ];

const vegetables = ['eggplant','broccoli','carrot','cauliflower','zucchini'];

// Exercise 4
// Create a variable named numbers and assign it an array of
// numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to
// an array rather than recreating the array.

fruits.push('tomato');
console.log(fruits);

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.

vegetables.push('tomato');
console.log(vegetables);



// Exercise 7
// Given the array of numbers defined below, reverse the array of
// numbers that you created above.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.reverse();
console.log(numbers);



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend
// finding a way to sort the array with a built-in method

vegetables.sort();
console.log(vegetables);

// Exercise 9
// Write the code necessary to sort the fruits in reverse
// alphabetical order

fruits.sort().reverse();
console.log(fruits);


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.

const fruitsAndVeggies = fruits.concat(vegetables);
console.log(fruitsAndVeggies);


// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one

const addOne = (a) => {return a + 1};
console.log(`addOne: ${addOne(4)}`);

// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.

const isPositive = (a) => {return a > 0}
console.log(`isPositive: ${isPositive(3)}`);
// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.

const isNegative = (a) => {return a < 0}
console.log(`isNegative: ${isNegative(-3)}`);


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if
// that number is odd.

const isOdd = (a) =>{ return a % 2 !== 0  }
console.log(`idOdd: ${isOdd(5)}`);

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that
// number is even.

const isEven = (a) =>{ return a % 2 === 0  }
console.log(`idEven: ${isEven(5)}`);

// Exercise 16
// Write a function definition named identity that takes in any input and returns that input.
// Don't overthink this one!

const identity = (name) =>  name ;
console.log(`identity: ${identity('Gregory')}`);


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or
// false if the value is both greater than zero and odd

const isPositiveOdd = (a) =>{
    if (a % 2 !== 0 && a > 0) {
        return true;
    }else{
        return false;
    }
}

console.log(`isPositiveOdd: ${isPositiveOdd(5)}`);

// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value
// is both greater than zero and even

const isPositiveEven = (a) =>{
    if (a % 2 === 0 && a > 0) {
        return true;
    }else{
        return false;
    }
}

console.log(`isPositiveEven: ${isPositiveEven(5)}`);

// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is
// both less than zero and odd.

const isNegativeOdd = (a) =>{
    if (a % 2 !== 0 && a < 0) {
        return true;
    }else{
        return false;
    }
}

console.log(`isNegativeOdd: ${isNegativeOdd(-5)}`);


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value
// is both less than zero and even.


const isNegativeEven = (a) =>{
    if (a % 2 === 0 && a < 0) {
        return true;
    }else{
        return false;
    }
}

console.log(`isNegativeEven: ${isNegativeEven(-5)}`);



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.

const half = (a) => a / 2 ;

console.log(`half: ${half(3)}`);


// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.

const double = (a) => a*2;
console.log(`double: ${double(4)}`);


// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.

const triple = (a) => a*3;
console.log(`triple: ${triple(4)}`);


// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with
// the sign reversed.

const reverseSign = (a) => a * -1;
console.log(`reverseSign: ${reverseSign(-21)}`);

// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the
// provided number


const absoluteValue = (a) => Math.abs(a);
console.log(`absoluteValue: ${absoluteValue(-5)}`);

// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number
// is evenly divisible by 3.

const isMultipleOfThree = (a) => {
    if (a % 3 === 0) {
        return true
    }else{
        return false
    }
}

console.log(`isMultipleOfThree: ${isMultipleOfThree(12)}`);

// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number
// is evenly divisible by 5.

const isMultipleOfFive = (a) => {
    if (a % 5 === 0) {
        return true
    }else{
        return false
    }
}

console.log(`isMultipleOfFive: ${isMultipleOfFive(225)}`);


// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the
// number is evenly divisible by both 3 and 5.

const isMultipleOfBothThreeAndFive = (a) => {
    if (a % 3 === 0 && a % 5 === 0) {
        return true;
    }else{
        return false;
    }
}

console.log(`isMultipleOfBothThreeAndFive: ${isMultipleOfBothThreeAndFive(12)}`);

// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.

const square = (a) => Math.pow(a, 2);
console.log(`square: ${square(25)}`);

// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.

const add = (a, b) => a + b;
console.log(`add: ${add(3, 4)}`);

// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.


const cube = (a) => a**3;
console.log(`cube: ${cube(4)}`);



// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number

const squareRoot = (a) => Math.sqrt(a);
console.log(`squareRoot: ${squareRoot(25)}`);


// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.

const substract = (a, b) => a - b;
console.log(`substract: ${substract(12, 4)}`);


// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.

const multiply = (a, b) => Math.pow(a, b)
console.log(`multiply: ${multiply(2 ,4)}`);

// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.

const divide = (a, b) => a / b;
console.log(`divide: ${divide(6, 3)}`);

// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.

const quotient = (a, b) => Math.floor(a / b) ;
console.log(`quotient: ${quotient(10,3)}`);


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.

const remainder = (a ,b) => a % b;
console.log(`remainder: ${remainder(10, 4)}`);

// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers,
// squares each number, then returns the sum of both squares.

const sumOfSquares = (a, b) =>{
    return square(a) + square(b);
}
console.log(`sumOfSquares: ${sumOfSquares(3 , 4)}`);


// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number,
// multiplies it by two, adds 3 and returns the result.

const timesTwoPlusThree = (a) => a*2+3;
console.log(`timesTwoPlusThree: ${timesTwoPlusThree(3)}`);

// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and
// returns the product.

const areaOfRectangle = (a, b) => a*b;
console.log(`areaOfRectangle: ${areaOfRectangle(3,7)}`);

// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a
// circle's radius and returns the area of the circle

const areaOfCircle = (a) => 3.14*square(a);
console.log(`areaOfCircle: ${areaOfCircle(11)}`);

// Exercise 42
// Write a function definition named circumference that takes in a number
// representing a circle's radius and returns the circumference.

const circumference = (a) => 2*a*3.14;
console.log(`circumference: ${circumference(4)}`);


// Exercise 43
// Write a function definition named isVowel that takes in value and
// returns true if the value is a, e, i, o, u in upper or lower case.

const isVowel = (text) =>{
    const pattern = /[a,e,i,o,u,A,E,I,O,U]/gi;
    if(text.match(pattern)){
        return true;
    }else{
        return false;
    }
}

console.log(`isVowel: ${isVowel('H')}`);

// Exercise 44
// Write a function definition named hasVowels that takes in
// value and returns true if the string contains any vowels.

const hasVowel = (text) =>{
    const pattern = /[a,e,i,o,u,A,E,I,O,U]/gi;
    if(text.match(pattern)){
        return true;
    }else{
        return false;
    }
}

console.log(`isVowel: ${hasVowel('Hakuna Matata')}`);

// Exercise 45
// Write a function definition named countVowels that
// takes in value and returns the count of the nubmer of vowels in a sequence.

const countVowels = (text) =>{
    const pattern = /[a,e,i,o,u,A,E,I,O,U]/gi;
    const SpliText = text.split('');
    let count = 0;
    // console.log(SpliText);
    SpliText.forEach(element => {
        if(element.match(pattern)){
            count = count + 1;
        }
    });
    return count;
}

console.log(`countVowels: ${countVowels('Hakuna Matata')}`);




// Exercise 46
// Write a function definition named removeVowels that takes in string and
// returns the string without any vowels


const removeVowels = (text) =>{
    const pattern = /[a,e,i,o,u,A,E,I,O,U]/gi;
    return text.replace(pattern, '');
}

console.log(`removeVowels: ${removeVowels("Hakuna Matata")}`);



// Exercise 47
// Write a function definition named startsWithVowel that takes in string and
// true if the string starts with a vowel


const startsWithVowel = (text) =>{
    if (text[0].match(/[a,e,i,o,u,A,E,I,O,U]/gi)) {
        return true;
    }else{
        return false;
    }
}

console.log(`startsWithVowel: ${startsWithVowel("Amsterdam")}`);


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel

const endsWithVowel = (text) =>{
    if (text[text.length - 1].match(/[a,e,i,o,u,A,E,I,O,U]/gi)) {
        return true;
    }else{
        return false;
    }
}

console.log(`endsWithVowel: ${endsWithVowel("ECMA")}`);

// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel

const startsWithAndEndsWithVowel = (text) =>{
    const pattern = /[a,e,i,o,u,A,E,I,O,U]/gi
    if (text[0].match(pattern) && text[text.length - 1].match(pattern)){
        return true;
    }else{
        return false;
    }
}

console.log(`startsWithAndEndsWithVowel: ${startsWithAndEndsWithVowel('Abracadabra')}`);

// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.

const sequence = [1, 2, 3, 4, 'a', 'b', 'c', 8];

const first = (array) =>{
    return array[0];
}

console.log(`first: ${first(sequence)}`);


// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.

const second = (array) =>{
    return array[1];
}

console.log(`second: ${second(sequence)}`);

// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.

const third = (array) =>{
    return array[2];
}

console.log(`third: ${third(sequence)}`);
// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.

const forth = (array) =>{
    return array[3];
}

console.log(`forth: ${forth(sequence)}`);

// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.

const last = (array) =>{
    return array[array.length - 1];
}

console.log(`last: ${last(sequence)}`);
// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.

const secondToLast = (array) =>{
    temp = [];
    for (let i = 1; i < array.length; i++) {
        temp.push(array[i])     
    }
    return temp;

}

console.log(`secondToLast: ${secondToLast(sequence)}`);

// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.

const thirdToLast = (array) =>{
    temp = [];
    for (let i = 2; i < array.length; i++) {
        temp.push(array[i])     
    }
    return temp;
}

console.log(`thirdToLast: ${thirdToLast(sequence)}`);

// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array

const firstAndSecond = (array) =>{
    temp = [];
    for (let i = 0; i <= 1; i++) {
        temp.push(array[i])     
    }
    return temp;
}

console.log(`firstAndSecond: ${firstAndSecond(sequence)}`);

// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array

const firstAndLast = (array) =>{
    temp = [];
    temp.push(array[0]);
    temp.push(array[array.length - 1]);
    return temp;
}

console.log(`firstAndSecond: ${firstAndLast(sequence)}`);

// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.

const firstToLast = (array) =>{
   array.push(array.shift());
   return array 
}

console.log(`firstToLast: ${firstToLast(sequence)}`);

// Exercise 60
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.

const numArr = [-1, 3, -2, 6, 40, -9, 11, -12, 15]

const sumAll = (array) => {
let temp = 0;
array.forEach(element => {
    temp = temp + element;
})
    return temp;
}

console.log(`sumAll: ${sumAll(numArr)}`);
//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value



const mean = (array) =>{
    return sumAll(array) / array.length;
}

console.log(`mean: ${mean(numArr)}`);


// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value

//Had to look this one up... difficult.


// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.

const maxMinusMin = (array) =>{
    let max = Math.max(...array);
    let min = Math.min(...array);
    return max - min;
}

console.log(`maxMinusMin: ${maxMinusMin(numArr)}`);

// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together

const productOfAll = (array) =>{
    return array.reduce((a, b) => a * b);
}

console.log(`productOfAll: ${productOfAll(numArr)}`);

// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.

const getHighestNumber = (array) => Math.max(...array);

console.log(`getHighestNumber: ${getHighestNumber(numArr)}`);

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.

const getSmallestNumber = array => Math.min(...array);

console.log(`getSmallestNumber: ${getSmallestNumber(numArr)}`);

// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.

const onlyOddNumbers = array =>  array.filter(item => item % 2 !== 0);

console.log(`onlyOddNumbers: ${onlyOddNumbers(numArr)}`);

// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.

const onlyEvenNumbers = array =>  array.filter(item => item % 2 === 0);

console.log(`onlyEvenNumbers: ${onlyEvenNumbers(numArr)}`);

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.

const onlyPositiveNumbers = array => array.filter(item => item > 0)

console.log(`onlyPositiveNumbers: ${onlyPositiveNumbers(numArr)}`);

// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.

const onlyNegativeNumbers = array => array.filter(item => item < 0)

console.log(`onlyNegativeNumbers: ${onlyNegativeNumbers(numArr)}`);


// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence

const hasEvens = array => array.some(item => item % 2 === 0 )

console.log(`hasEvens: ${hasEvens(numArr)}`);
// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers

const countEvens = array => {
    let count = 0;
    array.forEach(element => {
        if (element % 2 === 0) {
            count++;
        }
    });
    return count;
}

console.log(`countEvens: ${countEvens(numArr)}`);

// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence

const hasOdds = array => array.some(item => item % 2 !== 0 )

console.log(`hasOdds: ${hasOdds(numArr)}`);


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence

const countOdds = array => {
    let count = 0;
    array.forEach(element => {
        if (element % 2 !== 0) {
            count++;
        }
    });
    return count;
}

console.log(`countOdds: ${countOdds(numArr)}`);

// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers

const countNegatives = array => {
    let count = 0;
    array.forEach(element => {
        if (element < 0) {
            count++;
        }
    });
    return count;
}

console.log(`countNegatives: ${countNegatives(numArr)}`);

// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers

const countPositives = array => {
    let count = 0;
    array.forEach(element => {
        if (element > 0) {
            count++;
        }
    });
    return count;
}

console.log(`countPositives: ${countPositives(numArr)}`);


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence


const onlyPositiveEvens = array => array.filter(item => item > 0 && item % 2 === 0)

console.log(`onlyPositiveEvens: ${onlyPositiveEvens(numArr)}`);



// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence

const onlyPositiveOdds = array => array.filter(item => item > 0 && item % 2 !== 0)

console.log(`onlyPositiveOdds: ${onlyPositiveOdds(numArr)}`);




// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence


const onlyNegativeEvens = array => array.filter(item => item < 0 && item % 2 === 0)

console.log(`onlyNegativeEvens: ${onlyNegativeEvens(numArr)}`);




// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence


const onlyNegativeOdds = array => array.filter(item => item < 0 && item % 2 !== 0)

console.log(`onlyNegativeOdds: ${onlyNegativeOdds(numArr)}`);



// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.

const names = ['Marius', 'Virgil', 'Maria', 'Vasile', 'Andrei', 'Sandu', 'Dumitru', 'Ionela', 'Viorel', 'Nicolae'];

const shortestString = (array) =>{
    let shortest = array[0];
    array.forEach(element => {
        if (element.length < shortest.length) {
            shortest = element;
        }
    });
    return shortest;
}

console.log(`shortestString: ${shortestString(names)}`);



// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.

const longestString = (array) =>{
    let longest = array[0];
    array.forEach(element => {
        if (element.length > longest.length) {
            longest = element;
        }
    });
    return longest;
}

console.log(`longestString: ${longestString(names)}`);




// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.








// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.


const elementsTimesTwo = numArr.map((item) => item * 2);

console.log(`elementsTimeTwo: ${elementsTimesTwo}`);

// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.

const arrOfArrays = [ [2, 5, 6], [3, 5, 7], ['Samantha', 'Alice', 'July'] ]

const flatten = (array) =>{
    let flatArray = [].concat(...array);
    return flatArray
} 

console.log(`flatten: ${flatten(arrOfArrays)}`);


// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array

const addOneToArray = numArr.map((item) => item + 1)

console.log(`addOneToArray: ${addOneToArray}`);

// Working with JS Objects

// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}


// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property

const getPaperTitle = (object) =>{
    return object.title;
}

console.log(`getPaperTitle: ${getPaperTitle(thomasPaper)}`);



// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.


const getYearPublished = (object) =>{
    return object.year_published;
}

console.log(`getYearPublished: ${getYearPublished(tukeyPaper)}`);


// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}


// Exercise 89
// Write a function named getPrice that takes in a object and returns the price

const getPrice = (object) =>{
    return object.price;
}

console.log(`getPrice: ${getPrice(book)}`);


// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name

const getBookAuthor = (object) =>{
    return object.author;
}

console.log(`getBookAuthor: ${getBookAuthor(book)}`);
// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.

const getNumberOfBooks = (object) =>{
    let count = 0;
    object.forEach(element => {
        count++;
    });
    return count;
}

console.log(`getNumberOfBooks: ${getNumberOfBooks(books)}`);

// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together


const totalOfBookPrices = (object) =>{
    let totalPrice = 0;
    object.forEach(element => {
        totalPrice += element.price;        
    });
    return totalPrice;
}

console.log(`totalOfBookPrices: ${totalOfBookPrices(books)}`);




// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.


const getAverageBookPrice = (object) =>{
    return totalOfBookPrices(books) / object.length;
}

console.log(`getAverageBookPrice: ${getAverageBookPrice(books)}`);



// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array

const highestPriceBook = (object) =>{
    let bookPrice = object[0].price;
    object.forEach(element => {
        if (element.price > bookPrice ) {
            bookPrice = element.price;
        }
    });
    return bookPrice;
}


console.log(`highestPriceBook: ${highestPriceBook(books)}`);




// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array


const lowestPriceBook = (object) =>{
    let bookPrice = object[0].price;
    object.forEach(element => {
        if (element.price < bookPrice ) {
            bookPrice = element.price;
        }
    });
    return bookPrice;
}


console.log(`lowestPriceBook: ${lowestPriceBook(books)}`);



// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.


const getTaxRate = (object) =>{
    return totalOfBookPrices(books) * (15 / 100);
}

console.log(`getTaxRate: ${getTaxRate(books)}`);


// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.


const numberOfItemTypes = (object) =>{
    return new Set(object.title).size;
    }

    console.log(`numberOfItemTypes: ${numberOfItemTypes(books)}`);


// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type


const totalNumberOfItems = () =>{

}


// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\







// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity



// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"

// Exercise 102
var topFoods = ['Panang Curry', 'Pad Thai', 'Swimming Rama', 'Tom Kah'];

// The array holds a list of the top selling foods at your Thai restaurant.
// You have two new additions. Your new top seller is "Pad Kee Mow" and there
// is a new dish in last place "Masamun Curry".

// You must add "Pad Kee Mow" to the first position in the array and add
// "Masamun Curry" to the last position. Use the built-in Array functions
// to achieve this.

topFoods.push('Masamun Curry');
topFoods.unshift('Pad Kee Mow')
console.log(topFoods.join(' , '));

// Exercise 103
var lateComers = ["Felicia", "Charles", "Terry"];
var earlyBirds = ["Ellen", "Jerry", "Jasmine"];

// You have two arrays above of people who arrived late to your party and
// people who arrived early. Please create a new array that holds all of
// the party attendees and make sure they appear in the order of arrival,
// meaning no late comer should appear in the array before an early bird.

// Solve this using one of the built-in Array functions first. Then, rewrite
// it using the newer Array spread operator.

console.log(earlyBirds.concat(lateComers));

// Exercise 104
var colors = ["red", "orange", "yellow", "green", "pink", "black", "gray", "blue", "violet"];

// The array above contains all the colors in the visible light spectrum but has some
// that don't belong. In case you've forgotten, the colors in the spectrum are:
//  red, orange, yellow, green, blue, violet

// Write a script that removes the incorrect colors from the Array using built-in
// Array functions.

const rainbow = colors.filter(element => {
    if ( element === 'red' || element === 'orange' || element === 'yellow' || element === 'green' || element === 'blue' || element === 'violet') {
        return element;
    }
})

console.log(rainbow);




