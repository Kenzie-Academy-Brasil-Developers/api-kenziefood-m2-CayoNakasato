class Login{
    static loginModal(){
        const principal = document.querySelector(".root")

        principal.innerHTML = ''
        
        const divloginBox = document.createElement("div")
        const loginBox = document.createElement("div")
        const loginBoxTitle = document.createElement("h1")
        const loginBoxForm = document.createElement("form")
        const loginBoxInputEmail = document.createElement("input")
        const loginBoxInputPassword= document.createElement("input")
        const loginBoxQuestion = document.createElement("p")
        const loginBoxText = document.createElement("p")
        const loginBoxRedirect = document.createElement("a")
        const loginBoxButton = document.createElement("button")

        divloginBox.classList.add("div__login")
        loginBox.classList.add("login__box")
        loginBoxTitle.classList.add("login__box__title")
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
        loginBoxInputEmail.placeholder = "Digite seu email"
        loginBoxInputPassword.placeholder = "Digite sua senha"
        loginBoxText.innerText = "Não possui conta?"
        loginBoxRedirect.innerText = "Registre-se!"
        loginBoxRedirect.href = "../Pages/dashboard.html"
        loginBoxButton.innerText = "Logar"

        loginBoxForm.append(loginBoxInputEmail, loginBoxInputPassword)

        loginBoxQuestion.append(loginBoxText, loginBoxRedirect)

        loginBox.append(loginBoxTitle, loginBoxForm, loginBoxQuestion, loginBoxButton)

        divloginBox.appendChild(loginBox)

        principal.appendChild(divloginBox);

    }
}
export default Login