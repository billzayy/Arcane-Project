const btnUser = document.querySelector('.btn-user');
const logoutBtn = document.querySelector('.btn-logout');
const topLink = document.querySelector('.top-link-btn');
const userBox = document.querySelector('.user-box');
const dropdown = document.querySelector('.dropdown');

const contentGrid = document.querySelector('.content-1');

window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('user') != null) {
        userBox.innerHTML = localStorage.getItem('user')
    }
    else {
        userBox.innerHTML = "Guest"
    }

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
    showProduct();
})

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

logoutBtn.addEventListener('click', () => {
    window.localStorage.removeItem("user");
    window.location.href = "http://localhost:3000/login"
})

function changeColorSale(category,sale, price) {
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
    if (category.textContent == 'Poster') {
        sale.style.display = "none";
        price.classList.toggle('price-poster');
        price.style.color = "black"
    }
}

async function showProduct() {
    let result = "";
    const res = await fetch("http://localhost:3000/api/product");
    const data = await res.json();
    data.forEach(i => {
        result += `
            <section>
                <div class="content-pic">
                    <div class="special">${i.P_Sales}</div>
                    <img src="${i.P_Picture}" alt="">
                    <div class="price">$${i.P_Price}</div>
                </div>
                <div class="content-text">
                    <div class="content-description">
                        <p class = "category">${i.P_Category}</p> for ${i.P_Gender}
                    </div>
                    <div class="content-name">${i.P_Name}</div>
                </div>
            </section>
        `
        contentGrid.innerHTML = result
    })
    const category = document.querySelectorAll('.category')
    const price = document.querySelectorAll('.price');
    const sale = document.querySelectorAll('.special');
    for (let i = 0; i < price.length; i++) {
        
        changeColorSale(category[i],sale[i], price[i]);
    }
}