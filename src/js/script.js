import {showCase} from './models/showCaseDOM.js';
import {Products} from './models/dashboard.js'
import {Cart} from './models/cartDOM.js';
import {FilterHomePage } from "./models/filters.js";

// import {FilterDashboard} from "./models/FilterHomePage.js";
import Login from "./models/login.js";

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


filterTodosHomePage.addEventListener("click", () => {
    FilterHomePage.showAll()
})

btnLogar.addEventListener("click", () => {
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})

filterPanificadoraHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterPanificadora()
})

filterFrutasHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterFrutas()
})

filterBebidasHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterBebidas()
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
