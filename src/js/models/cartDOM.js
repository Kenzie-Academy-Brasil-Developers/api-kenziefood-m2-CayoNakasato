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
            divProductInfoH3.classList.add("cart__product__name")
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
                this.deleteItem(event)
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
    static async cartMobile() {
        const body = document.querySelector("body")
        const buttonModal = document.createElement("button")
        const buttonModalImg = document.createElement("img")
        const modalContainer = document.createElement("section")
        const modal = document.createElement("aside")
        const modalTitle = document.createElement("div")
        const modalTitleLogo = document.createElement("div")
        const modaltitleLogoImg = document.createElement("img")
        const modaltitleLogoh2 = document.createElement("h2")
        const modalTitleImg = document.createElement("img")
        const modalCart = document.createElement("div")

        buttonModal.classList.add("cart__button")
        modalContainer.classList.add("modal__container")
        modal.classList.add("modal")
        modalTitle.classList.add("modal__title")
        modalTitleLogo.classList.add("modal__title__logo")
        modaltitleLogoImg.classList.add("modal__title__img__cart")
        modalTitleImg.classList.add("modal__title__img__close")
        modalCart.classList.add("modal__cart")

        buttonModal.id ="openCart"
        buttonModalImg.src = "./src/assert/cart_white.svg"
        buttonModalImg.alt = "Imagem Carrinho"
        modaltitleLogoImg.src = "./src/assert/cart_white.svg"
        modaltitleLogoImg.alt = "Imagem Carrinho"
        modalTitleImg.src = "./src/assert/X.svg"
        modalTitleImg.alt = "Fechar Carrinho"
        
        body.append(buttonModal,modalContainer)
        buttonModal.append(buttonModalImg)
        modalContainer.append(modal)
        modal.append(modalTitle,modalCart)
        modalTitle.append(modalTitleLogo,modalTitleImg)
        modalTitleLogo.append(modaltitleLogoImg,modaltitleLogoh2)

        buttonModal.textContent = "Carrinho"
        modaltitleLogoh2.textContent = "Carrinho"
        buttonModal.textContent = "Carrinho"
    }
    static async deleteItem(event){
        let target = event.target
        if(target.classList.contains("cart__product__buttons__deleteBtn")){
            let targetProduct = target.closest(".cart__product")
            targetProduct.remove();
        }
    }
    static async addItem(event){
        let target = event.target
        if(target.classList.contains("cart__product__buttons__addBtn")){
            let targetProduct = target.closest(".cart__product")
            targetProduct.remove();
        }
    }
    static async removeItem(event){
        let target = event.target
        if(target.classList.contains("cart__product__buttons__removeBtn")){
            let targetProduct = target.closest(".cart__product")
            targetProduct.remove();
        }
    }
}
export {Cart}