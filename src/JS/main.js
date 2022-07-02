const bar = document.querySelector('.bars');
const menuList = document.querySelector('.menu-2');
const clothes = document.querySelector('#clothes');
const deco = document.querySelector('#deco');
const other = document.querySelector('#other');
const button = document.querySelector('button')
const goCategory = document.querySelectorAll('.btn');
const btnUser = document.querySelector('.btn-user');
const logoutBtn = document.querySelector('.btn-logout');
const topLink = document.querySelector('.top-link-btn');
const userBox = document.querySelector('.user-box'); 
const dropdown = document.querySelector('.dropdown');

goCategory.forEach(i => { 
    i.addEventListener('click', () => {
        window.location.href = "http://localhost:3000/category"
    })
})

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
    mainClothes();
    mainDeco();
    mainOther();
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

function mainClothes() { 
    fetch("http://localhost:3000/api/product")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Clothes') {
                    mainPage += `
                    <section>
                        <div class="content-pic">
                            <div class="special">${i.P_Sales}</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="price">$${i.P_Price}</div>
                        </div>
                        <div class="content-text">
                            <div class="content-description">${i.P_Title}</div>
                            <div class="content-name">${i.P_Name}</div>
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
            const sale = document.querySelectorAll('.special');
            for (let i = 0; i < price.length; i++) { 
                changeColorSale(sale[i],price[i]);
            }
        })
}

function mainDeco() {
    fetch("http://localhost:3000/api/product")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Deco') {
                    mainPage += `
                    <section>
                        <div class="content-pic">
                            <div class="special">${i.P_Sales}</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="deco-price">$${i.P_Price}</div>
                        </div>
                        <div class="content-text">
                            <div class="content-description">${i.P_Title}</div>
                            <div class="content-name">${i.P_Name}</div>
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
            const picTest = document.querySelectorAll("#deco img");

            picTest.forEach(i => {
                console.log(i.clientWidth, i.clientHeight)
            })
    })
}

function mainOther() {
    fetch("http://localhost:3000/api/product")
        .then(res => res.json())
        .then(data => {
            let mainPage = "";
            data.forEach(i => {
                if (i.P_Page == 'Main' && i.P_Category == 'Other') {
                    mainPage += `
                    <section>
                        <div class="content-pic">
                            <div class="special">${i.P_Sales}</div>
                            <img src="${i.P_Picture}" alt="">
                            <div class="price">$${i.P_Price}</div>
                        </div>
                        <div class="content-text">
                            <div class="content-description">${i.P_Title}</div>
                            <div class="content-name">${i.P_Name}</div>
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
            const price = document.querySelectorAll('#other .price');
            const sale = document.querySelectorAll('#other .special');
            for (let i = 0; i < price.length; i++) {
                changeColorSale(sale[i], price[i]);
            }
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
