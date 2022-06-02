const bar = document.querySelector('.bars');
const menuList = document.querySelector('.menu-2');

bar.addEventListener('click', () => { 
    menuList.classList.toggle('active');
})