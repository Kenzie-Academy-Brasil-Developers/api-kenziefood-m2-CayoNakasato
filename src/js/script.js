import {showCase} from './models/showCaseDOM.js';
import {Products} from './models/dashboard.js'
import {Cart} from './models/cartDOM.js';

// import {FilterHomePage } from "./models/filters.js";
// import {FilterDashboard} from "./models/FilterHomePage.js";
import Login from "./models/login.js";
import './models/searchBar.js';
import { ApiRequest } from './controller/apiRequest.js';


const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")

const homePageContent = document.querySelector(".showCase")
const dashboardContent = document.querySelector('#container__products')

const filterTodosHomePage = document.querySelector("#filter__homePage__todos")
const filterPanificadoraHomePage = document.querySelector("#filter__homePage__panificadora")
const filterFrutasHomePage = document.querySelector("#filter_homePage_frutas")
const filterBebidasHomePage = document.querySelector("#filter_homePage_bebidas")

const filterTodosDashboard = document.querySelector("#filter__dashboard__todos")
const filterPanificadoraDashboard = document.querySelector("#filter__dashboard__panificadora")
const filterFrutasDashboard = document.querySelector("#filter_dashboard_frutas")
const filterBebidasDashboard = document.querySelector("#filter_dashboard_bebidas")


showCase.homePage()
Products.inputProducts()
Cart.emptyCart()
Cart.cartMobile()

class FilterHomePage {

    static async showAll() {
        console.log('oi');
        showCase.homePage()
    }

    static async filterPanificadora() {
        const data = await ApiRequest.requisition()

        const filter = await data.filter((product) => {
            return product.categoria === "Panificadora"
        })
        this.showByCategoryHomePage(filter)
    }

    static async filterFrutas() {
        const data = await ApiRequest.requisition()
        
        const filter = await data.filter((product) => {
            return product.categoria === "Frutas"
        })
        this.showByCategoryHomePage(filter)
    }
    
    static async filterBebidas() {
        const data = await ApiRequest.requisition()

        const filter = await data.filter((product) => {
            return product.categoria === "Bebidas"
        })
        this.showByCategoryHomePage(filter)
    }
    
    static async showAll() {
        const data = await ApiRequest.requisition()
        this.showByCategoryHomePage(data)
    }
    
    static showByCategoryHomePage(category) {
        
        category.forEach(element => {
            const productCard = document.createElement("article")
            productCard.classList="product"
            productCard.id= element.id
            productCard.innerHTML=`
            <picture class="img__products">
            <img src="${element.imagem} " alt="${element.nome}">
            </picture>
            <h3 class="name">${element.nome}</h3>
            <p class="description">${element.descricao}</p>
            <small class="category">${element.categoria}</small>
            <aside class="price">
            <p>R$ ${element.preco}</p>
            <div class="cart__div">
            <button class="addCart"><img class="addCart__img" src='./src/assert/addCartIcon.png' alt = 'Adicionar ao Carrinho de compras'></button>
            </div>
            </aside>
            `
            homePageContent.appendChild(productCard)
        })
    }
    
    static async showByCategoryDashboard(category) {
        category.forEach(element => {
            const productCard = document.createElement("article")
            productCard.classList="product"
            productCard.id= element.id
            productCard.innerHTML=`
            <picture class="img__products">
            <img src="${element.imagem} " alt="${element.nome}">
            </picture>
            <h3 class="name">${element.nome}</h3>
            <p class="description">${element.descricao}</p>
            <small class="category">${element.categoria}</small>
            <aside class="price">
            <p>R$ ${element.preco}</p>
            <div class="cart__div">
            <button class="addCart"><img class="addCart__img" src='./src/assert/addCartIcon.png' alt = 'Adicionar ao Carrinho de compras'></button>
            </div>
            </aside>
            `
            homePageContent.appendChild(productCard)
        })
    }
}

btnLogar.addEventListener("click", () => {
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})

filterTodosHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.showAll()
})


filterPanificadoraHomePage.addEventListener("click", async() => {
    homePageContent.innerHTML = ''
    await FilterHomePage.filterPanificadora()
})

filterFrutasHomePage.addEventListener("click", async() => {
    homePageContent.innerHTML = ''
    await FilterHomePage.filterFrutas()
})

filterBebidasHomePage.addEventListener("click", async() => {
    homePageContent.innerHTML = ''
    await FilterHomePage.filterBebidas()
})

// filterTodosDashboard.addEventListener("click", () => {
//     console.log('oi');
//     Products.inputProducts()
// })

// filterPanificadoraDashboard.addEventListener("click", () => {
//     dashboardContent.innerHTML = ''
//     FilterDashboard.filterPanificadora()
// })

// filterFrutasDashboard.addEventListener("click", () => {
//     dashboardContent.innerHTML = ''
//     FilterDashboard.filterFrutas()
// })

// filterBebidasDashboard.addEventListener("click", () => {
//     dashboardContent.innerHTML = ''
//     FilterDashboard.filterBebidas()
// })




export default FilterHomePage
