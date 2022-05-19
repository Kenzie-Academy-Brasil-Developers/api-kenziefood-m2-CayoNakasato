import Login from "../models/login.js"
import Register from "../models/register.js"

class Api{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
    static TOKEN = localStorage.getItem("token")
    static registerUser(data){
        fetch(
            this.BASIC__URL + "/auth/register",
        {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then((res) => {
            if(res.id){ 
                Login.loginModal()
            }else{
                const principal = document.querySelector(".root")
                principal.innerHTML = ''
                Register.registerErrorModal("Ops! Verifique seu email ou senha!")
            }
        })
    }

    static async loginUser(data){
        const response = await fetch(
            this.BASIC__URL + "/auth/login",
            {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        const responseData = await response.json();
        if(!responseData.error){
            
            localStorage.setItem("token", JSON.stringify(responseData))
            window.location = "/src/pages/dashboard.html"
        }
        else if(responseData.error){
            const divLogin = document.querySelector(".div__login")
            divLogin.classList.add("hidden")
            Register.registerErrorModal("Ops! Verifique seu email ou senha!")
        }
    }

    static getItem () {
        const resp = fetch(`${this.BASIC__URL}/products`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            })
            .then(res => res.json())
            .then(data => data);
        return resp
    }

    static createProduct(data) {
        const response = fetch("https://api-blog-m2.herokuapp.com/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Api.TOKEN}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json());    
        return response
    }

}

export default Api