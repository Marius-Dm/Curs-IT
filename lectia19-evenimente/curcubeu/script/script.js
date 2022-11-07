const button = document.querySelector(".adauga");
const container = document.querySelector(".container")




button.addEventListener('click', () =>{
    
    const div = document.createElement('div')
    div.style.width = '200'
    div.style.height = '200'
    div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    div.classList.add('box')
    div.style.marginTop = '2'
    div.style.border = '1px solid'

    div.addEventListener('mouseenter', (ev) =>{
        div.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    })


    container.append(div);
    
})



