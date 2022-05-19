import Api from "../controller/api.js"
import Login from "./login.js"

class Register{
    static registerModal(){
        const principal = document.querySelector(".root")
     
        const divregisterBox = document.createElement("div")
        const registerBox = document.createElement("div")
        const registerBoxHeader = document.createElement("div")
        const registerBoxButtonExit = document.createElement("button")
        const registerBoxTitle = document.createElement("h1")
        const registerBoxForm = document.createElement("form")
        const registerBoxInputName = document.createElement("input")
        const registerBoxInputEmail = document.createElement("input")
        const registerBoxInputPassword= document.createElement("input")
        const registerBoxQuestion = document.createElement("p")
        const registerBoxText = document.createElement("p")
        const registerBoxRedirect = document.createElement("a")
        const registerBoxButton = document.createElement("button")

        divregisterBox.classList.add("div__register")
        registerBox.classList.add("register__box")
        registerBoxHeader.classList.add("register__box__header")
        registerBoxButtonExit.classList.add("register__box__header__btn__exit")
        registerBoxTitle.classList.add("register__box__title")
        registerBoxForm.classList.add("register__box__form")
        registerBoxInputName.classList.add("register__box__inputEmail")
        registerBoxInputEmail.classList.add("register__box__inputEmail")
        registerBoxInputPassword.classList.add("register__box__inputPassword")
        registerBoxQuestion.classList.add("register__box__question")
        registerBoxText.classList.add("register__box__text")
        registerBoxRedirect.classList.add("register__box__redirectText")
        registerBoxButton.classList.add("register__box__button")

        registerBoxInputName.name = "name"
        registerBoxInputEmail.name = "email"
        registerBoxInputPassword.name = "password"

        registerBoxTitle.innerText = "Cadastro"
        registerBoxButtonExit.innerText = "X"
        registerBoxInputName.placeholder = "Digite seu nome"
        registerBoxInputName.alt = "Coloqueseu username"
        registerBoxInputEmail.placeholder = "Digite seu email"
        registerBoxInputEmail.alt = "Coloque seu Email"
        registerBoxInputEmail.type = "email"
        registerBoxInputPassword.placeholder = "Digite sua senha"
        registerBoxInputPassword.type = "password"
        registerBoxInputPassword.alt = "Coloque sua senha"
        registerBoxText.innerText = "Já possui conta?"
        registerBoxRedirect.innerText = "Logue!"
        registerBoxButton.innerText = "Cadastrar"

        registerBoxButtonExit.addEventListener("click", ()=>{
            window.location = "/index.html"
        })
     
        registerBoxRedirect.addEventListener("click", ()=>{
            divregisterBox.classList.add("hidden")
            Login.loginModal()
        })

        registerBoxButton.addEventListener("click", ()=>
            {
                Api.registerUser({
                                "name": registerBoxInputName.value,
                                "email": registerBoxInputEmail.value,
                                "password": registerBoxInputPassword.value
                            })
                divregisterBox.innerHTML = ''
            })

        registerBoxForm.append(registerBoxInputName,registerBoxInputEmail, registerBoxInputPassword)
        
        registerBoxQuestion.append(registerBoxText, registerBoxRedirect)

        registerBoxHeader.append(registerBoxTitle, registerBoxButtonExit)

        registerBox.append(registerBoxHeader, registerBoxForm, registerBoxQuestion, registerBoxButton)

        divregisterBox.appendChild(registerBox)

        principal.appendChild(divregisterBox);
    }

    static registerErrorModal(message){
        const principal = document.querySelector(".root")

        const divError = document.createElement("div")
        const errorBox = document.createElement("div")
        const errorBoxTitle = document.createElement("h1")
        const errorBoxInfo = document.createElement("p")
        const errorBoxButton = document.createElement("button")

        divError.classList.add("div__error")
        errorBox.classList.add("register__boxError")
        errorBoxTitle.classList.add("register__boxError__title")
        errorBoxInfo.classList.add("register__boxError__info")
        errorBoxButton.classList.add("register__boxError__btn")

        errorBoxTitle.innerText = "Ops! Ocorreu um erro!"
        errorBoxInfo.innerText = message
        errorBoxButton.innerText = "Voltar"

        errorBoxButton.addEventListener("click", ()=>{
            window.location = "./../index.html"
        })

        errorBox.append(errorBoxTitle, errorBoxInfo, errorBoxButton)

        divError.appendChild(errorBox)

        principal.appendChild(divError)
    }
}


export default Register