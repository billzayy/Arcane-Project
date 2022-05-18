const bar = document.querySelector('.bars');
const menu = document.querySelector('.header-left-2');

bar.addEventListener('click', () => { 
    menu.classList.toggle('active-header');
})