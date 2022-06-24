const bar = document.querySelector('.bars');
const menuList = document.querySelector('.menu-2');
const clothes = document.querySelector('#clothes');
const deco = document.querySelector('#deco');
const other = document.querySelector('#other');
const button = document.querySelector('button')
bar.addEventListener('click', () => { 
    menuList.classList.toggle('active');
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
                            <div class="special">${i.P_Sales}</div>
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
            const sale = document.querySelectorAll('.special');
            for (let i = 0; i < price.length; i++) { 
                changeColorSale(sale[i],price[i]);
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