const slider = document.querySelector('.Slider');
const images = document.querySelectorAll('.Slider img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= images.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out"
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;    
    slider.style.transition = "transform 0.4s ease-in-out"
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'lastClone'){
        slider.style.transition = "none";
        counter = images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'firstClone'){
        slider.style.transition = "none";
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});