const images = document.querySelectorAll('.imgs> img');
const choosenImage = document.createElement('current');

const mainImage = document.querySelector('.main-img>img')

images.forEach(element => {
    element.addEventListener('click', () =>{
        images.forEach(element => {
            element.style.opacity = '1';
        });
        
        element.style.opacity = '0.3'
        
        mainImage.src = element.src
        
    })     

    })