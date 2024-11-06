

const list = document.querySelector('ul')
const cliquei = document.querySelector('.press')
const buttonMap = document.querySelector('.press-map')
const somaValue = document.querySelector('.soma-valor')
const filtrartudo = document.querySelector('.filtrar')

function formatCurrency (value){
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function aoClicar(productsArray) {

    let myLi = ''

    productsArray.forEach((product) => {

        myLi += `


         <li>

            <img src=${product.src}>
            <p> ${product.name}</p>
function formatCurrency(value){
            <p class="item-price"> R$ ${formatCurrency (product.price)} </p>

        </li>
         `
    })

    list.innerHTML = myLi

}

function aoMapear() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))

    aoClicar(newPrices)

}
function somaTudo() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
         <li>
            <p> O valor total dos itens é : R$ ${formatCurrency (totalValue)} </p>
        </li>
         `
}

function filterAll() {

    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    aoClicar(filterJustVegan)
}


buttonMap.addEventListener('click', aoMapear)
cliquei.addEventListener('click', () => aoClicar(menuOptions))
somaValue.addEventListener('click', somaTudo)
filtrartudo.addEventListener('click', filterAll) 
