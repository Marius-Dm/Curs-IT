`use strict`

const patrat = document.querySelector('.patrat');
const patrat2 = document.querySelector(".patrat2");
const patrat3 = document.querySelector('.patrat3');
const lista = document.querySelectorAll('.a>li')


const apasa = () =>{
    patrat.style.backgroundColor = 'green'
}

patrat2.onclick = () => {
    patrat.style.backgroundColor = 'violet'
}

patrat2.onmouseenter = () =>{
    patrat2.style.backgroundColor = 'brown';
}

patrat2.onmouseleave = () =>{
    patrat2.style.backgroundColor = 'pink'
}

patrat2.onclick = () => {
    // patrat.style.backgroundColor = 'violet'
    console.log(2);
}

patrat3.addEventListener('click', (ev) => {
    patrat3.style.backgroundColor = 'orange'
    ev.target.style.backgroundColor = 'grey'
    // console.log(ev.target);
})

// patrat3.addEventListener('click', () => {
//     patrat3.style.backgroundColor = 'orange'
//     console.log(2);
// })

lista.forEach(element => {
  element.addEventListener('mouseenter', (ev)=>{
    ev.target.style.backgroundColor = 'red';
  })  
  element.addEventListener('dblclick', (ev)=>{
    ev.target.style.backgroundColor = '';
  })

});


