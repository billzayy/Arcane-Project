import * as alias from './func.mjs'

const goBack = document.querySelector('.go-back');
const section = document.querySelectorAll('section');
const itemBox = document.querySelector('.order-items span');
const cartNum = document.querySelector('.btn-cart span')
window.addEventListener("DOMContentLoaded", () => {
    alias.setUser();
    alias.logoutAct();
    alias.scrollPage();
    alias.moveCart();
    // btnPrice();
})

goBack.addEventListener('click', () => {
    window.location.href = "http://localhost:3000/category"
})

function btnPrice() {
    const btnPlus = document.querySelectorAll('.price-btn .fa-plus');
    const btnMinus = document.querySelectorAll('.price-btn .fa-minus');
    const numBox = document.querySelectorAll('#counter')
    const price = document.querySelectorAll('.cart-price span');
    const priceBox = document.querySelector('.order-total span')

    let sum = []; 
    for (let i = 0; i < section.length; i++) {
        sum[i] = parseInt(price[i].textContent)
        btnPlus[i].addEventListener('click', () => {
            numBox[i].value++;
            sum[i] = definePrice(i,price, numBox)
            priceBox.innerHTML = `$${addPrice(sum)}`
        })

        btnMinus[i].addEventListener('click', () => {
            if (numBox[i].value != 1) {
                numBox[i].value--;
                sum[i] = definePrice(i, price, numBox)
                priceBox.innerHTML = `$${Math.abs(minusPrice(sum))}`
            }
            else {
                numBox[i].value = 1;
            }
        })
    }
    priceBox.innerHTML = `$${addPrice(sum)}`
}

function definePrice(i,price,numBox) {
    let result = parseInt(price[i].textContent) * parseInt(numBox[i].value);
    return result
}

function addPrice(arr) {
    let result = 0
    arr.forEach(i => {
        result = result + i
    })
    return result
}

function minusPrice(arr) {
    let result = 0
    arr.forEach(i => {
        result = result - i
    })
    return result
}
