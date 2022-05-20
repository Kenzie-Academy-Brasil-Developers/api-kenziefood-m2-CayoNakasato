import {showCase} from './models/showCaseDOM.js';
import {Products} from './models/dashboard.js'
import {Cart} from './models/cartDOM.js';

import {FilterHomePage, FilterDashboard } from "./models/filters.js";
// import {FilterDashboard} from "./models/FilterHomePage.js";
import Login from "./models/login.js";
import './models/searchBar.js';


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


btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})


showCase.homePage()
Products.inputProducts()
Cart.emptyCart()
Cart.cartMobile()


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

filterTodosDashboard.addEventListener("click", async() => {
    homePageContent.innerHTML = ''
    await FilterDashboard.showAll()
})

filterPanificadoraDashboard.addEventListener("click", async() => {
    dashboardContent.innerHTML = ''
    await FilterDashboard.filterPanificadora()
})

filterFrutasDashboard.addEventListener("click", async() => {
    dashboardContent.innerHTML = ''
    await FilterDashboard.filterFrutas()
})

filterBebidasDashboard.addEventListener("click", async() => {
    dashboardContent.innerHTML = ''
    await FilterDashboard.filterBebidas()
})


const logoutBtn = document.querySelector(".header__btn__logout")
const buttonTrash = document.querySelectorAll('.classtrash__button__event > img')
const btnHomePage = document.querySelector("#header__button__menu")
const avatarImg = document.querySelector(".avatar__hover")


//LISTENERS DA PÁGINA DASHBOARD

btnHomePage.addEventListener("click", ()=>{
        window.location = "../../index.html"
    })
    
avatarImg.addEventListener('click', ()=>{
    if(infoLogoutButton.style.display = "none"){
            infoLogoutButton.style.display = "block"
        }
    })
    
    logoutBtn.addEventListener("click", ()=>{
            window.location.href = "/index.html"
            localStorage.clear()
        })
        
        buttonNav.addEventListener('click', showModalRegister)
        trashRegModal.addEventListener('click', closeModal)
        registerButton.addEventListener('click', createProduct)
        
        buttonTrash.forEach(elem => {
                elem.addEventListener('click', ()=> {
                        ApiDash.deletePost(elem.name)
                    })
                })
