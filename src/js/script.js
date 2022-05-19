import { ApiRequest } from "./controller/apiRequest.js";
import {showCase} from './models/showCaseDOM.js';
import {Cart} from './models/cartDOM.js';
import Filters from "./models/filters.js";
import Login from "./models/login.js";
import Register from "./models/register.js";

const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")

const filterTodosHomePage = document.querySelector("#filter__homePage__todos")
const filterPanificadoraHomePage = document.querySelector("#filter__homePage__panificadora")
const filterFrutasHomePage = document.querySelector("#filter_homePage_frutas")
const filterBevidasHomePage = document.querySelector("#filter_homePage_bebidas")

btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})


filterTodosHomePage.addEventListener("click", () => {
    showCase.homePage()
})

filterFrutasHomePage.addEventListener("click", () => {
    
})

showCase.homePage()
Cart.emptyCart()



