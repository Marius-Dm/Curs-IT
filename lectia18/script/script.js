`use strict`

const sampleText = document.querySelector('h1');

sampleText.textContent = "Text Sample";
sampleText.style.color = 'purple';
sampleText.style.fontSize = '90px';

const vaslui = document.querySelector('h2');

vaslui.textContent = "Wake up"
vaslui.style.color = 'green';
vaslui.setAttribute('align', 'center')


const classPatrat = document.querySelector('div');
classPatrat.classList.add('patrat')

const lista = document.querySelectorAll('li');

lista.forEach(element => {
    element.textContent =" Just Do It!!!"    
    element.style.listStyleType = 'none'
});

const div = document.createElement('div');
const titlu = document.createElement('h1');

titlu.textContent = "I want to sleep!"

div.append(titlu);
document.body.append(div);

const card = document.createElement('div');
const imagine = document.createElement('img');
imagine.setAttribute('src','https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-stunning-instagram-logo-vector-download-for-new-7.png')
imagine.setAttribute('alt', 'logo')
card.classList.add('card')
imagine.width = '170';
const heading = document.createElement('h2');
heading.textContent = 'Instagram'
card.style.display = 'relative'
imagine.style.display = 'absolute'
imagine.style.top = '20'

const description = document.createElement('p');
description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nostrum unde, asperiores vero, accusantium nobis voluptatibus, dolore dolorem animi voluptatum possimus quod!'

const button1 = document.createElement('button');
button1.textContent = "Read More"


card.append(imagine);
card.append(heading);
card.append(description);
card.append(button1)
document.body.append(card)
