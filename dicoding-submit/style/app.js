// For hamburger slider

//! Menu Toggle 
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul'); 

menuToggle.addEventListener('click', function ()  {
     nav.classList.toggle('slide');
});   

// For slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');  


let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}


let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);
}


dots.forEach((li, key) => {
     li.addEventListener('click', function() {
          active = key;
          reloadSlider();

     })
})

Window.onresize = function(event) {
     reloadSlider
}

