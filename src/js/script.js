import {showCase} from './models/showCaseDOM.js';
import {Cart} from './models/cartDOM.js';
import Filters from "./models/filters.js";
import Login from "./models/login.js";

const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")

const filterTodosHomePage = document.querySelector("#filter__homePage__todos")
const filterPanificadoraHomePage = document.querySelector("#filter__homePage__panificadora")
const filterFrutasHomePage = document.querySelector("#filter_homePage_frutas")
const filterBebidasHomePage = document.querySelector("#filter_homePage_bebidas")

btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})


filterTodosHomePage.addEventListener("click", () => {
    console.log('oi');
    showCase.homePage()
})

filterPanificadoraHomePage.addEventListener("click", () => {
    showCase.innerHTML = ''
    Filters.filterPanificadora()
})

filterFrutasHomePage.addEventListener("click", async () => {
    showCase.innerHTML = ''
    await Filters.filterFrutas()
})

filterBebidasHomePage.addEventListener("click", () => {
    showCase.innerHTML = ''
    Filters.filterBebidas()
})

showCase.homePage()
Cart.emptyCart()
