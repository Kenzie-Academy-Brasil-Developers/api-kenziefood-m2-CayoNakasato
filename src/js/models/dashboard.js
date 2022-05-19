import ApiDash from "../controller/apidashboard.js"

// GET DOS ELEMENTOS DA PÁGINA

const container = document.getElementById('container__products')


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

const btnHomePage = document.querySelector("#header__button__menu")

btnHomePage.addEventListener("click", ()=>{
    window.location = "../../index.html"
})

const avatarImage = document.querySelector(".avatar__hover")
avatarImage.addEventListener("click", ()=>{
    
})
