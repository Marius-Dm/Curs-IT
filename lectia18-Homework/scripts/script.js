const header = document.createElement('div');
const title = document.createElement('h1');

document.body.style.margin = '0'
document.body.style.fontFamily = 'Verdana, sans-serif'

title.textContent = "DOM example";
header.style.width = '100%';
header.style.height = '120px'
header.style.backgroundColor = 'rgb(0, 191, 255)'
header.style.display = 'table';


header.style.color = 'white';
title.style.paddingLeft = '15px'
title.style.display = 'table-cell'
title.style.verticalAlign = 'middle'

header.append(title);
document.body.append(header);

const allCards = document.createElement('div')
const card = document.createElement('div');
const cardTitle = document.createElement('h2');
const image = document.createElement('img');
const smallerCardTitle = document.createElement('p');
const description = document.createElement('p');

card.style.display = 'flex';
card.style.flexDirection = 'column'
card.style.alignItems = 'center'
card.classList.add = 'card';
card.style.width = '33%'

cardTitle.textContent = 'Article header'
cardTitle.style.fontWeight = '700'



image.setAttribute('src','images/little-cat.jpg')
image.width = '200'

smallerCardTitle.textContent = 'Caption'
smallerCardTitle.style.margin = '0'

description.textContent = 'Here is some text. Here is some text. Here is some text. Here is some text.'
description.classList.add('descriptions')

card.append(cardTitle);
card.append(image);
card.append(smallerCardTitle);
card.append(description);

const card1 = card.cloneNode(true);
const card2 = card.cloneNode(true);
const card3 = card.cloneNode(true);
const card4 = card.cloneNode(true);
const card5 = card.cloneNode(true);
const card6 = card.cloneNode(true);

allCards.style.display = 'flex';
allCards.style.flexDirection = 'row'
allCards.style.flexWrap = 'wrap'
allCards.style.flex = '0 0 33.333333%'
allCards.style.marginBottom = '20px'

allCards.append(card1);
allCards.append(card2);
allCards.append(card3);
allCards.append(card4);
allCards.append(card5);
allCards.append(card6);

document.body.append(allCards)

const footer = document.createElement('div');
const footerText = document.createElement('p')



footer.width = '100%'
footer.style.backgroundColor = 'rgb(0, 191, 255)'
footer.style.width = '100%';
footer.style.height = '120px';
footer.style.textAlign = 'center';
footer.style.display = 'table';

footerText.textContent = 'This is a footer';
footerText.style.display = 'table-cell';
footerText.style.verticalAlign = 'middle'

footer.append(footerText);
document.body.append(footer)