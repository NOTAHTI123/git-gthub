const nav_bar = document.querySelector('.navigation-bar');

window.addEventListener('scroll', ()=>{
    nav_bar.classList.toggle('scroll-active', window.scrollY > 0)});