import { changeColorSale, setUser, logoutAct, scrollPage } from './func.mjs'

const iconBtn = document.querySelectorAll('.btn-icon')
const contentGrid = document.querySelector('.content-1');
const contentList = document.querySelector('.content-2');

window.addEventListener("DOMContentLoaded", () => {
    setUser();
    logoutAct();
    iconClick();
    scrollPage();
    showProduct();
    showProduct2();
})


async function showProduct() {
    let result = "";
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();
    data.forEach(i => {
        result += `
            <section>
                <div class ="id_product">${i.Id_Product}</div>
                <div class="content-pic">
                    <div class="special">${i.P_Sales}</div>
                    <img src="${i.P_Picture}" alt="">
                    <div class="price">$${i.P_Price}</div>
                </div>
                <div class="content-text">
                    <div class="content-description">
                        ${i.P_Category} for ${i.P_Gender}
                    </div>
                    <div class="content-name">${i.P_Name}</div>
                </div>
            </section>
        `
        contentGrid.innerHTML = result
    })
    const price = document.querySelectorAll('.price');
    const sale = document.querySelectorAll('.special');
    for (let i = 0; i < price.length; i++) {
        changeColorSale(sale[i], price[i]);
    }
    Product()
}

async function showProduct2() {
    let result = "";
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();
    data.forEach(i => {
        result += `
            <section>
                <div class ="id_product">${i.Id_Product}</div>  
                <div class="list-pic">
                    <img src="${i.P_Picture}" alt="">
                    <div class="list-price">$${i.P_Price}</div>
                </div>
                <div class="list-content">
                    <div class="list-content-name">${i.P_Name}</div>
                    <div class="list-content-title">
                        ${i.P_Category} for ${i.P_Gender}
                    </div>
                    <div class="list-content-text">
                        <ul>
                            <li>${i.Content_1}</li>
                            <li>${i.Content_2}</li>
                        </ul>
                    </div>
                </div>
                <div class="list-info">
                    <div class="info-title">Information</div>
                    <div class="list-info-description">
                        Description : <span>${i.P_Describe}</span>
                    </div>
                    <div class="list-info-material">
                        Material : <span>${i.P_Material}</span>
                    </div>
                    <div class="list-info-color">
                        Color : <span>${i.P_Color}</span>
                    </div>
                    <button class="info-btn">Add to cart</button>
                </div>
                <div class="sale">${i.P_Sales}</div>
            </section>
        `
        contentList.innerHTML = result
    })
    const price = document.querySelectorAll('.list-price');
    const sale = document.querySelectorAll('.sale');
    for (let i = 0; i < price.length; i++) {
        changeColorSale(sale[i], price[i]);
    }
    Product();
}

function iconClick() {
    iconBtn[0].addEventListener('click', () => {
        contentGrid.style.display = 'flex';
        contentList.style.display = 'none';
        iconBtn[0].style.opacity = 1;
        iconBtn[1].style.opacity = 0.5;
    })

    iconBtn[1].addEventListener('click', () => {
        contentGrid.style.display = 'none';
        contentList.style.display = 'flex';
        iconBtn[0].style.opacity = 0.5;
        iconBtn[1].style.opacity = 1;
    })
}

function Product() {
    const idProduct = document.querySelectorAll('.id_product');
    const gridBtn = document.querySelectorAll('.content-1 section');
    const listBtn = document.querySelectorAll('.content-2 section img')
    for (let i = 0; i < gridBtn.length; i++) {
        gridBtn[i].addEventListener('click', () => {
            localStorage.setItem('api', `http://localhost:3000/detail/api/${idProduct[i].textContent}`)
            location.href = `http://localhost:3000/detail/`
        })
    }
    for (let i = 0; i < listBtn.length; i++) {
        listBtn[i].addEventListener('click', () => {
            localStorage.setItem('api', `http://localhost:3000/detail/api/${idProduct[i].textContent}`)
            location.href = `http://localhost:3000/detail/`
        })
    }
}