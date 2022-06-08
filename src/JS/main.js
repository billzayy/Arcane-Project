const bar = document.querySelector('.bars');
const menuList = document.querySelector('.menu-2');
const clothes = document.querySelector('#clothes');
const deco = document.querySelector('#deco');
const other = document.querySelector('#other');
const button = document.querySelector('button')
bar.addEventListener('click', () => { 
    menuList.classList.toggle('active');
})

button.addEventListener('click', () => {
    window.location.href = './api'
})

window.addEventListener("DOMContentLoaded", () => { 
    mainClothes();
    // mainDeco();
    // mainOther();
})

function mainClothes() { 
    fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Clothes') {
                    mainPage += `
                    <section>
                        <div class="clothes-pic">
                            <div class="special">Sale</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="price">$${i.P_Price}</div>
                        </div>
                        <div class="clothes-text">
                            <div class="clothes-description">${i.P_Title}</div>
                            <div class="clothes-name">${i.P_Name}</div>
                        </div>
                    </section>
                `
                }
            })
            return mainPage;
        })
        .then(result => {
            clothes.innerHTML = result
        })
        .then(() => {
            const price = document.querySelectorAll('.price');

            price.forEach(i => {
                if (i.textContent.split('$')[1] >= 100) {
                    i.style.right = '2.2rem';
                }
            })
        })
}
function mainDeco() { 
    fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Deco') {
                    mainPage += `
                    <section>
                        <div class="clothes-pic">
                            <div class="special">Sale</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="price">$${i.P_Price}</div>
                        </div>
                        <div class="clothes-text">
                            <div class="clothes-description">${i.P_Title}</div>
                            <div class="clothes-name">${i.P_Name}</div>
                        </div>
                    </section>
                `
                }
            })
            return mainPage;
        })
        .then(result => {
            deco.innerHTML = result
        })
        .then(() => {
            const price = document.querySelectorAll('.price');

            price.forEach(i => {
                if (i.textContent.split('$')[1] >= 100) {
                    i.style.right = '2.2rem';
                }
            })
        })
}
function mainOther() { 
    fetch("http://localhost:3000/api")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Other') {
                    mainPage += `
                    <section>
                        <div class="clothes-pic">
                            <div class="special">Sale</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="price">$${i.P_Price}</div>
                        </div>
                        <div class="clothes-text">
                            <div class="clothes-description">${i.P_Title}</div>
                            <div class="clothes-name">${i.P_Name}</div>
                        </div>
                    </section>
                `
                }
            })
            return mainPage;
        })
        .then(result => {
            other.innerHTML = result
        })
        .then(() => {
            const price = document.querySelectorAll('.price');

            price.forEach(i => {
                if (i.textContent.split('$')[1] >= 100) {
                    i.style.right = '2.2rem';
                }
            })
        })
}