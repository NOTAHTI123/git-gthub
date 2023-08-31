const nav_bar = document.querySelector('.navigation-bar');
let nav_button = document.querySelector('.navigation-buttons');
let hamburger = document.querySelector('#menu-icon');
window.addEventListener('scroll', ()=>{
    nav_bar.classList.toggle('scroll-active', window.scrollY > 0)});

hamburger.onclick = () => {
    hamburger.classList.toggle('bx-x');
    nav_button.classList.toggle('mobile-view');
}