class Register{
    static registerModal(){
        const principal = document.querySelector(".root")

        const divregisterBox = document.createElement("div")
        const registerBox = document.createElement("div")
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
        registerBoxInputName.placeholder = "Digite seu nome"
        registerBoxInputEmail.placeholder = "Digite seu email"
        registerBoxInputPassword.placeholder = "Digite sua senha"
        registerBoxText.innerText = "Já possui conta?"
        registerBoxRedirect.innerText = "Logue!"
        registerBoxRedirect.href = "#"
        registerBoxButton.innerText = "Cadastrar"

        registerBoxButton.addEventListener("click", ()=>{
            Api.registerUser({
                "name": registerBoxInputName.value,
                "email": registerBoxInputEmail.value,
                "password": registerBoxInputPassword.value
                })
                divregisterBox.innerHTML = ''
            })

        registerBoxForm.append(registerBoxInputName,registerBoxInputEmail, registerBoxInputPassword)

        registerBoxQuestion.append(registerBoxText, registerBoxRedirect)

        registerBox.append(registerBoxTitle, registerBoxForm, registerBoxQuestion, registerBoxButton)

        divregisterBox.appendChild(registerBox)

        principal.appendChild(divregisterBox);
    }
}