import ApiDash from "../controller/apidashboard.js";

ApiDash.getItem().then((d) => data = d);

let data = []



function createPost(productArray = []){
    document.getElementById('container__products').innerHTML =''
    productArray.forEach(element => {
        const container = document.getElementById('container__products')
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
        edit.classList.add('edit__image', 'edit__button__event')
        trash.classList.add('trash__button__event')

        pName.innerText = element.nome
        imgProduct.src = element.imagem
        category.innerText = element.categoria
        description.innerText = element.descricao
        trash.src = "../assert/trash.svg"
        edit.src = "../assert/edit.svg"
        trash.name = element.id
        edit.name = element.id

        buttons.append(edit, trash)
        name.append(imgProduct, pName)
        line.append(name, category, description, buttons)
        table.append(line)
        container.append(table)
    })
}


const inputValue = document.getElementById("input__dashboard")
inputValue.addEventListener("keydown",(event) => {
    const keyName = event.key;
    if(keyName === 'Enter'){
        findPost()
    }
})

function findPost() {
    const inputValue = document.getElementById("input__dashboard")
    const newData = [];
    for (let i = 0; i < data.length; i++){
        if(data[i].nome.toLowerCase().indexOf(inputValue.value.toLowerCase()) !== -1 || data[i].categoria.toLowerCase().indexOf(inputValue.value.toLowerCase()) !== -1){
            newData.push(data[i]);
        }
    }
    createPost(newData);
}
