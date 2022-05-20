import { ApiRequest } from '../controller/apiRequest.js';
import { Products } from './dashboard.js';

import { showCase } from "./showCaseDOM.js"

const homePageContent = document.querySelector(".showCase")

class FilterHomePage {
    static async showAll() {
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


class FilterDashboard {
    static async showAll() {
        Products.inputProducts()
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
    
    static showByCategory(category) {
        
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
            showCase.appendChild(productCard)
        })
    }
}

export  {FilterHomePage, FilterDashboard} 

// export {FilterDashboard}
