const boy = document.getElementById('boy');
const pos = { x:0 }
let rotateDg = 0;


window.addEventListener('keydown', (ev) =>{
    if (ev.code === 'Space' || ev.code === 'ArrowUp'){
        boy.classList.add('jump')
    }
    


    if (ev.code === 'ArrowRight'){
        if (rotateDg === 180) {
            rotateDg = 0;
        }
        pos.x += 20;
        

    }else if(ev.code === 'ArrowLeft'){
        if (rotateDg === 0) {
            rotateDg = 180
        }
        pos.x -= 20;
    }
    
    boy.style.transform = `translateX(${pos.x}px) rotateY(${rotateDg}deg)`
    
})

const stopAnimation = () =>{
    boy.classList.remove('jump')
    boy.classList.remove('flow')
}

boy.addEventListener('animationend', stopAnimation);