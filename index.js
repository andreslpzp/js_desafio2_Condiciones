const precio = 400000
let startingQuantity = 0
let startingPrice = 0

const precioProd = document.querySelector('#startingPrice')

const totalValue = document.querySelector('#totalValue')

const amount = document.querySelector('#itemAmount')

const botonSuma = document.querySelector('#add')

const botonResta = document.querySelector('#substract')

precioProd.innerHTML = precio
amount.innerHTML = startingQuantity
totalValue.innerHTML = startingPrice

add.addEventListener('click', () => {
    startingQuantity = startingQuantity + 1
    amount.innerHTML = startingQuantity
    totalValue.innerHTML = precio * startingQuantity
})

substract.addEventListener('click', () => {
    if (startingQuantity > 0) {
    startingQuantity = startingQuantity - 1
    amount.innerHTML = startingQuantity
    totalValue.innerHTML = precio * startingQuantity
    }
})



