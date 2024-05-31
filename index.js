const price = 400000
let startingQuantity = 0
let startingPrice = 0

prodPrice = document.querySelector('#startingPrice')
totalValue = document.querySelector('#totalValue')
amount = document.querySelector('#itemAmount')
addBtn = document.querySelector('#add')
substractBtn = document.querySelector('#substract')

prodPrice.innerHTML = price
amount.innerHTML = startingQuantity
totalValue.innerHTML = startingPrice

add.addEventListener('click', () => {
    startingQuantity = startingQuantity + 1
    amount.innerHTML = startingQuantity
    totalValue.innerHTML = price * startingQuantity
})

substract.addEventListener('click', () => {
    if (startingQuantity > 0) {
    startingQuantity = startingQuantity - 1
    amount.innerHTML = startingQuantity
    totalValue.innerHTML = price * startingQuantity
    }
    else {
        alert("no se pueden ingresar cantidades menores a 0")
    }
})



