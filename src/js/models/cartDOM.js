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
}
export {Cart}