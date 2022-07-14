const btnUser = document.querySelector('.btn-user');
const userBox = document.querySelector('.user-box');
const dropdown = document.querySelector('.dropdown');
const topLink = document.querySelector('.top-link-btn');
const logoutBtn = document.querySelector('.btn-logout');

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

export {
    changeColorSale,
    setUser,
    logoutAct, 
    scrollPage
}