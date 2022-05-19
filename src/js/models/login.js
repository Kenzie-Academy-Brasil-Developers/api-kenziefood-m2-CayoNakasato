import Api from "../controller/api.js"
import Register from "./register.js"

class Login{
    static loginModal(){
        const principal = document.querySelector(".root")
        
        const divloginBox = document.querySelector(".div__login")

        const loginBox = document.createElement("div")
        const loginBoxTitle = document.createElement("h1")
        const loginBoxHeader = document.createElement("div")
        const loginBoxButtonExit = document.createElement("button")
        const loginBoxForm = document.createElement("form")
        const loginBoxInputEmail = document.createElement("input")
        const loginBoxInputPassword= document.createElement("input")
        const loginBoxQuestion = document.createElement("p")
        const loginBoxText = document.createElement("p")
        const loginBoxRedirect = document.createElement("a")
        const loginBoxButton = document.createElement("button")

        loginBox.classList.add("login__box")
        loginBoxHeader.classList.add("login__box__header")
        loginBoxTitle.classList.add("login__box__title")
        loginBoxButtonExit.classList.add("login__box__header__btn__exit")
        loginBoxForm.classList.add("login__box__form")
        loginBoxInputEmail.classList.add("login__box__inputEmail")
        loginBoxInputPassword.classList.add("login__box__inputPassword")
        loginBoxQuestion.classList.add("login__box__question")
        loginBoxText.classList.add("login__box__text")
        loginBoxRedirect.classList.add("login__box__redirectText")
        loginBoxButton.classList.add("login__box__button")

        loginBoxInputEmail.name = "email"
        loginBoxInputPassword.name = "password"

        loginBoxTitle.innerText = "Login"
        loginBoxButtonExit.innerText = "X"
        loginBoxInputEmail.placeholder = "Digite seu email"
        loginBoxInputEmail.type = "email"
        loginBoxInputEmail.alt = "Coloque seu email"
        loginBoxInputPassword.placeholder = "Digite sua senha"
        loginBoxInputPassword.type = "password"
        loginBoxInputPassword.alt = "Coloque sua senha"
        loginBoxText.innerText = "Não possui conta?"
        loginBoxRedirect.innerText = "Registre-se!"
        loginBoxButton.innerText = "Logar"

        loginBoxButtonExit.addEventListener("click", ()=>{
            window.location = "/index.html"
        })
        
        loginBoxRedirect.addEventListener("click", ()=>{
            loginBox.classList.add("hidden")
            Register.registerModal()
        })

        loginBoxButton.addEventListener("click", ()=>{
            Api.loginUser({
                "email": loginBoxInputEmail.value,
                "password": loginBoxInputPassword.value
            })
        })

        loginBoxForm.append(loginBoxInputEmail, loginBoxInputPassword)

        loginBoxQuestion.append(loginBoxText, loginBoxRedirect)

        loginBoxHeader.append(loginBoxTitle, loginBoxButtonExit)

        loginBox.append(loginBoxHeader, loginBoxForm, loginBoxQuestion, loginBoxButton)

        divloginBox.appendChild(loginBox)

        principal.appendChild(divloginBox);

    }
}
export default Login