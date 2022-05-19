import {showCase} from './models/showCaseDOM.js';
import Products from './models/dashboard,js'
import {Cart} from './models/cartDOM.js';
import {FilterHomePage, FilterDashboard} from "./models/FilterHomePage.js";
import Login from "./models/login.js";

const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")
const homePageContent = document.querySelector(".showCase")

const filterTodosHomePage = document.querySelector("#filter__homePage__todos")
const filterPanificadoraHomePage = document.querySelector("#filter__homePage__panificadora")
const filterFrutasHomePage = document.querySelector("#filter_homePage_frutas")
const filterBebidasHomePage = document.querySelector("#filter_homePage_bebidas")

const filterTodosDashboard = document.querySelector("#filter__dashboard__todos")
const filterPanificadoraDashboard = document.querySelector("#filter__dashboard__panificadora")
const filterFrutasDashboard = document.querySelector("#filter_dashboard_frutas")
const filterBebidasDashboard = document.querySelector("#filter_dashboard_bebidas")


btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})


filterTodosHomePage.addEventListener("click", () => {
    showCase.homePage()
    console.log('oi');
})

filterPanificadoraHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterPanificadora()
})

filterFrutasHomePage.addEventListener("click", async () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterFrutas()
})

filterBebidasHomePage.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterHomePage.filterBebidas()
})

filterTodosDashboard.addEventListener("click", () => {
    Products.inputProducts()
    console.log('oi');
})

filterPanificadoraDashboard.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterDashboard.filterPanificadora()
})

filterFrutasDashboard.addEventListener("click", async () => {
    homePageContent.innerHTML = ''
    FilterDashboard.filterFrutas()
})

filterBebidasDashboard.addEventListener("click", () => {
    homePageContent.innerHTML = ''
    FilterDashboard.filterBebidas()
})
showCase.homePage()
Cart.emptyCart()
