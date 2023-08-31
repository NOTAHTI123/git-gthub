const nav_bar = document.querySelector('.navigation-bar');
const nav_button = document.querySelector('.navigation-buttons');
const hamburger = document.querySelector('#menu-icon');
window.addEventListener('scroll', ()=>{
    nav_bar.classList.toggle('scroll-active', window.scrollY > 0)});

hamburger.onclick = () => {
    nav_button.classList.toggle('mobile-view');
}