const menuList = document.querySelector('.menu-2');
const button = document.querySelector('button')
const goCategory = document.querySelectorAll('.btn');
const btnUser = document.querySelector('.btn-user');
const logoutBtn = document.querySelector('.btn-logout');
const topLink = document.querySelector('.top-link-btn');
const userBox = document.querySelector('.user-box');
const dropdown = document.querySelector('.dropdown');
const contentMain = document.querySelector('#main');

window.addEventListener("DOMContentLoaded", () => {
    setUser();
    logoutAct();
    scrollPage();
    Product();
})

async function Product() {
    let result = "";
    const url = localStorage.getItem('api');
    const res = await fetch(url);
    const data = res.json();
    data.then((data) => {
        data.forEach((item) => {
           result += `
            <div class="main-pic">
                <img src=".${item.P_Picture}" alt="">
            </div>
            <div class="main-content">
                <div class="main-name">${item.P_Name}</div>
                <div class="main-category">
                    ${item.P_Category} for 
                    <span class="content-gender">${item.P_Gender}</span>
                </div>
                <div class="content-description">
                    Description : 
                    <span>${item.P_Describe}</span>
                </div>
                <div class="content-material">Material : 
                    <span>${item.P_Material}</span>
                </div>
                <div class="content-manufacture">Manufacture : 
                    <span>${item.P_Manufacture}</span>
                </div>
                <div class="content-color">Color : 
                    <span>${item.P_Color}</span>
                </div>
                <div class="content-size">Size : <span>L</span></div>
                <div class="btn-size">
                    <input type="button" value="XXS">
                    <input type="button" value="XS">
                    <input type="button" value="S">
                    <input type="button" value="M">
                    <input type="button" value="L">
                    <input type="button" value="XL">
                    <input type="button" value="XXL">
                    <input type="button" value="XXXL">
                </div>
                <div class="price-btn">
                    <i class="fas fa-minus"></i>
                    <input type="text" name="counter" id="counter" value="0">
                    <i class="fas fa-plus"></i>
                    <div class="price-content">$${item.P_Price}</div>
                </div>
                <div class="add-cart">
                    <input type="button" value="Add to cart">
                </div>
            </div>
            `;
            contentMain.innerHTML = result
        })
    })
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
