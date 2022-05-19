import { ApiRequest } from "../controller/apiRequest.js";
class Cart {
    static data = ApiRequest.requisition()
    static async emptyCart(){   
        let cart = document.createElement("aside")
            cart.classList="cart"
            cart.innerHTML=`
                <div class="cart__title">
                <img src="./src/assert/cart_white.svg" class="cart__title__img__cart" alt="Imagem Carrinho">
                <h2>Carrinho</h2>
                </div>
                <div class="cart__empty">
                    <img class="cart__empty__img" src="./src/assert/bag-svgrepo-com.svg" alt="sacola vazia">
                    <p class="cart__empty__text">Por enquanto não temos produtos no carrinho</p>
                </div>
            `
            document.querySelector("main").appendChild(cart);
    }
    static async createProduct(productId){
        const stock = await this.data
        const targetProduct = stock.filter(elem => elem.id == productId)
        targetProduct.forEach(elem => {
            const product = document.createElement("article")
            const picture = document.createElement("picture")
            const img = document.createElement("img")
            const divProductInfo = document.createElement("div")
            const divProductInfoH3 = document.createElement("h3")
            const divProductInfoCategory = document.createElement("small")
            const divProductInfoPrice = document.createElement("small")
            const divProductButtons = document.createElement("div")
            const divProductButtonsDeleteBtn = document.createElement("button")
            const divProductButtonsDeleteImg = document.createElement("img")
            const divProductButtonsAddBtn = document.createElement("button")
            const divProductButtonsAddImg = document.createElement("img")
            const divProductButtonsRemoveBtn = document.createElement("button")
            const divProductButtonsRemoveImg = document.createElement("img")

            product.classList.add("cart__product")
            picture.classList.add("cart__product__img")
            divProductInfo.classList.add("cart__product__info")
            divProductInfoH3.classList.add("cart__product__info h3")
            divProductInfoCategory.classList.add("cart__product__category")
            divProductInfoPrice.classList.add("cart__product__price")
            divProductButtons.classList.add("cart__product__buttons")
            divProductButtonsDeleteBtn.classList.add("cart__product__buttons__deleteBtn")
            divProductButtonsAddBtn.classList.add("cart__product__buttons__addBtn")
            divProductButtonsRemoveBtn.classList.add("cart__product__buttons__removeBtn")

            img.src=`${elem.imagem}`
            divProductButtonsDeleteImg.src="./src/assert/trash.svg"
            divProductButtonsAddImg.src="./src/assert/plus-svgrepo-com.svg"
            divProductButtonsRemoveImg.src="./src/assert/minus-svgrepo-com.svg"

            product.id=`${elem.id}`

            img.alt=`${elem.nome}`
            divProductButtonsDeleteImg.alt="remover produto"
            divProductButtonsAddImg.alt="adicionar um"
            divProductButtonsRemoveImg.alt="retirar um"
            

            divProductInfoH3.textContent=`${elem.nome}`
            divProductInfoCategory.textContent=`${elem.categoria}`
            divProductInfoPrice.textContent=`R$ ${elem.preco}`

            divProductButtonsDeleteBtn.addEventListener("click",(event)=>{
                event.preventDefault()
                
            })
            divProductButtonsAddBtn.addEventListener("click",(event)=>{
                event.preventDefault()
                //add product function
            })
            divProductButtonsRemoveBtn.addEventListener("click",(event)=>{
                event.preventDefault()
                //remove product function
            })

            const cart = document.querySelector(".cart")

            divProductButtonsRemoveBtn.append(divProductButtonsRemoveImg)
            divProductButtonsAddBtn.append(divProductButtonsAddImg)
            divProductButtonsDeleteBtn.append(divProductButtonsDeleteImg)
            divProductButtons.append(divProductButtonsDeleteBtn,divProductButtonsAddBtn,divProductButtonsRemoveBtn)
            divProductInfo.append(divProductInfoH3,divProductInfoCategory,divProductInfoPrice)
            picture.append(img)
            product.append(picture,divProductInfo,divProductButtons)

            cart.append(product)
        });
    }
    static async identifyProduct(event){
        let target = event.target
        if(target.classList.contains("cart__product__buttons__deleteBtn")){
            let targetProduct = target.closest(".cart__product")
            //modal to confirm detelete action
        }else  if(target.classList.contains("cart__product__buttons__addBtn")){
            //contIndividualItem +=1
        }else  if(target.classList.contains("cart__product__buttons__removeBtn")){
            //contIndividualItem -=1
            //condition => if contIndividualIte == 0 delete  it
        }
    }
}
export {Cart}