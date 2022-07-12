const btnUser = document.querySelector('.btn-user');
const logoutBtn = document.querySelector('.btn-logout');
const topLink = document.querySelector('.top-link-btn');
const userBox = document.querySelector('.user-box');
const dropdown = document.querySelector('.dropdown');

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

function changeColorSale(sale, price) {
    if (sale.textContent == "Sale") {
        sale.style.color = '#FF47C1'
        price.style.color = '#FF47C1';
    }
    else if (sale.textContent == 'New') {
        sale.style.color = '#63CEFC'
        price.style.color = '#63CEFC';
    }
    else if (sale.textContent == 'Top') {
        sale.style.color = '#98A0E8'
        price.style.color = '#98A0E8';
    }

    else {
        sale.style.display = "none";
        price.style.color = "#8F1933"
    }
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

function setUser() {
    if (localStorage.getItem('user') != null) {
        userBox.innerHTML = localStorage.getItem('user')
    }
    else {
        userBox.innerHTML = "Guest"
    }
}

function logoutAct() {
    if (userBox.innerHTML == "Guest") {
        btnUser.addEventListener("click", () => {
            window.location.href = "http://localhost:3000/login"
        })
    }
    else if (userBox.innerHTML == localStorage.getItem('user')) {
        btnUser.addEventListener('mouseover', () => {
            dropdown.style.display = "block";
        })
        btnUser.addEventListener('mouseout', () => {
            dropdown.style.display = "none";
        })
    }

    logoutBtn.addEventListener('click', () => {
        window.localStorage.removeItem("user");
        window.location.href = "http://localhost:3000/login"
    })
}

function scrollPage() {
    window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;

        if (scrollHeight > 500) {
            topLink.classList.add('show-link-btn')
        }
        else {
            topLink.classList.remove('show-link-btn')
        }
    })

    topLink.addEventListener('click', () => {
        window.scrollTo(
            {
                left: 0,
                top: 0,
            }
        );
    })
}

function Product() {
    const idProduct = document.querySelectorAll('.id_product');
    const sectionBtn = document.querySelectorAll('.content-1 section');
    const listBtn = document.querySelectorAll('.content-2 section img')
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', () => {
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