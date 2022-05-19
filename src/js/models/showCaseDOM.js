import { ApiRequest } from "../controller/apiRequest.js";

class showCase {

    static data = ApiRequest.requisition()

    static async homePage(){   
        let productArray = await this.data

        productArray.forEach(element => {
            let productCard = document.createElement("article")
                productCard.classList="product"
                productCard.id=element.id
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
                document.querySelector(".showCase").appendChild(productCard)
        });
    }
}
export {showCase}