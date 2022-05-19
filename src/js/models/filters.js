import ApiRequest from "../controller/apiRequest.js"
import { showCase } from "./showCaseDOM.js"


class Filters {
    static data = ApiRequest.requisition()

    static showCase = document.querySelector(".showCase")
    
    static async filterPanificadora() {
        showCase.innerHTML = ''
        const filter = await data.filter((product) => {
            return product.categoria === "Panificadora"
        })
        console.log(filter);
        this.showByCategory(filter)
    }

    static async filterFrutas() {
        showCase.innerHTML = ''
        const filter = await data.filter((product) => {
            return product.categoria === "Frutas"
        })
        this.showByCategory(filter)
    }

    static async filterBebidas() {
        showCase.innerHTML = ''
        const filter = await data.filter((product) => {
            return product.categoria === "Bebidas"
        })
        this.showByCategory(filter)
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

export default Filters

// categoria: "Frutas"
// createdAt: "2022-05-19T16:30:37.808Z"
// descricao: "Limão saboroso"
// id: "275d35bc-97cb-4db0-9bb3-45761e663c52"
// imagem: "https://farmaciaindiana.vteximg.com.br/arquivos/ids/194552/7894321711478_0.jpg"
// nome: "Limão"
// preco: 30
// updatedAt: "2022-05-19T17:31:31.580Z"