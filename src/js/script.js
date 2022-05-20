import {showCase} from './models/showCaseDOM.js';
import {Cart} from './models/cartDOM.js';
import Login from "./models/login.js";
import './models/searchBar.js';

const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")

btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})

showCase.homePage()
Cart.emptyCart()
Cart.cartMobile()