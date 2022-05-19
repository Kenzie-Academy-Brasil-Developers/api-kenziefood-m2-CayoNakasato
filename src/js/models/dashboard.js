import ApiDash from "../controller/apidashboard.js"

// GET DOS ELEMENTOS DA PÁGINA

const container = document.getElementById('container__products')
const buttonNav = document.getElementById('ul__button') 
const modalRegister = document.getElementById('modal__register')
const fundoModal = document.getElementById('fundo__modal')
const trashRegModal = document.getElementById('modal__register__trash')
const registerNome = document.getElementById('modal__register_inputs__nome')
const registerDescricao = document.getElementById('modal__register_inputs__descricao')
const registerCategory = document.querySelectorAll('.register__category')
const registerPreco = document.getElementById('modal__register_inputs__preco')
const registerImage = document.getElementById('modal__register_inputs__imagem')
const registerButton = document.getElementById('modal__regiter__button')
const modalCreateDenied = document.getElementById('modal__status__denied')
const modalCreateAcept = document.getElementById('modal__status__acept')
const categoryPan = document.getElementById('register__category_Panificadora')
const categoryFru = document.getElementById('register__category_Panificadora')
const avatarImg = document.querySelector(".avatar__hover")
const infoLogoutButton = document.getElementById("header__Logout__Hover")
const logoutBtn = document.querySelector(".header__btn__logout")
const btnHomePage = document.querySelector("#header__button__menu")

// LISTENERS DA PÁGINA 

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

// API PARA APLICAÇÃO DOS ELEMENTOS NA PÁGINA

class Products {

    static DATA = ApiDash.getItem()

    static async inputProducts () {
        
        const data = await ApiDash.getItem()

        data.forEach(element => {
            const table = document.createElement('table')
            const line = document.createElement('tr')
            const name = document.createElement('td')
            const pName = document.createElement('p')
            const imgProduct = document.createElement('img')
            const category = document.createElement('td')
            const description = document.createElement('td')
            const buttons = document.createElement('td')
            const trash = document.createElement('img')
            const edit = document.createElement('img')

            table.classList.add('container__table__cells')
            line.classList.add('table__cells')
            name.classList.add('container__table__product')
            name.setAttribute('width', '25%')
            imgProduct.classList.add('container__table__product__img')
            category.classList.add('container__table__cell')
            category.setAttribute('width', '25%')
            description.classList.add('container__table__cell')
            description.setAttribute('width', '40%')
            buttons.classList.add('container__table__actions')
            buttons.setAttribute('width', '10%')
            edit.classList.add('edit__image')

            
            pName.innerText = element.nome
            imgProduct.src = element.imagem
            category.innerText = element.categoria
            description.innerText = element.descricao
            trash.src = "../assert/trash.svg"
            edit.src = "../assert/edit.svg"
            trash.alt = element.id
            edit.alt = element.id

            buttons.append(edit, trash)
            name.append(imgProduct, pName)
            line.append(name, category, description, buttons)
            table.append(line)
            container.append(table)
        });
    }
}

// FUNÇÃO PARA CRIAÇÃO DE ELEMENTOS - MODAL REGISTRO - BOTÃO FECHAR MODAL - FUNÇÃO TOGLE DAS CATEGORIAS - BOTÃO CRIAR PRODUTO

function showModalRegister() {
    console.log('tet')
    modalRegister.style.display = 'block'
    fundoModal.style.display = 'block'
}


async function createProduct() {
    const data = {}

    data[registerNome.name] = registerNome.value
    data[registerDescricao.name] = registerDescricao.value   
    data[registerPreco.name] = registerPreco.value
    data[registerImage.name] = registerImage.value
    data.categoria = category();

    const result = await ApiDash.createProduct(data)
    if(result.message != 'Token is missing'){
        modalCreateDenied.style.display = 'flex'
    } else {
        modalCreateAcept.style.display = 'flex'
    }
    //  setTimeout(() => {
    //      location.reload('/dashboard.html')
    //  }, 3000);
}

function closeModal() {
    modalRegister.style.display = 'none'
    fundoModal.style.display = 'none'
}
function category() {
    let res
    registerCategory.forEach(elem => {
            elem.addEventListener('click',() => {
            if(elem.classList == 'register__category__selected') {
                elem.classList.remove('register__category__selected')
                elem.classList.add('register__category')               
            } else {
                elem.classList.remove('register__category')
                elem.classList.add('register__category__selected')
                res = elem.textContent         
            }    
        })
    })
    return res
}
category()



Products.inputProducts()





