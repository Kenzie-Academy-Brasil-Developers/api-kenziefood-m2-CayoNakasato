import { ApiRequest } from "../controller/apiRequest.js";
import { Cart } from "./cartDOM.js";
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
        let showCase = document.querySelector(".showCase")
        showCase.addEventListener("click",(event)=>{
            this.addProduct(event)
        })
    }
    static async addProduct(event){
        let target = event.target
        if(target.classList.contains("addCart")||target.classList.contains("addCart__img")){
            let targetProduct = target.closest(".product")
            let cartEmpty = document.querySelector(".cart__empty")
            cartEmpty.classList.add("invisible")
            Cart.createProduct(targetProduct.id)
            console.log(targetProduct.id)
        }
    }
}
export {showCase}