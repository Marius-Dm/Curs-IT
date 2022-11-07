`use strict`

console.log(document);

console.log(document.head);
console.log(document.body);

console.log(document.title);

console.log(document.links);

// const paragrafe = document.getElementsByTagName("p");

// console.log(paragrafe);

const paragraf = document.querySelectorAll("p")
console.log(paragraf);

paragraf.forEach(element => {
    element.style.color = 'red';
});

const links = document.querySelectorAll("a")

links.forEach(element => {
    element.style.textDecoration = "none"
    element.style.fontFamily = "Impact,Charcoal,sans-serif"
    element.style.fontSize = "larger"  
    element.style.color = "violet"

})


const albastruCul = document.querySelector(".albastru")

albastruCul.style.color = "blue"

const yellowCul = document.querySelector(".yellow")

yellowCul.style.fontSize = "20px"
yellowCul.classList.toggle("yellowColor")

yellowCul.setAttribute("align","center")

const green = document.querySelectorAll("li.green");

green.forEach(element => {
    element.style.color = "green"
    
})

const firstLi = document.querySelector("li");

firstLi.textContent = "Marius"

const titlu = document.querySelector("h1");

// console.log(titlu.innerHTML);

// titlu.innerHTML = "Just Do it"

// console.log(titlu.innerHTML);
console.log( titlu.outerHTML);

titlu.outerHTML = '<h3> Welcome </h3> '

const titluH2 = document.querySelector("h2");

console.log(titluH2.className);

titluH2.id = 'first'

titluH2.className = "RGB";

const imagine = document.querySelector("img");

imagine.width = "700"

imagine.classList.add("firstClass", "secondClass")

console.log(imagine.classList.contains("secondClass2"));

imagine.classList.toggle("secondClass", true )

links.forEach(element => {
    element.setAttribute("href","https://999.md/ru/") ;
    console.log(element.getAttribute("href"));
})
