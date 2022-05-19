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
            if(res.status === 201){
                const divRegister = document.querySelector(".divregisterBox")
                divRegister.innerHTML = ''
                
                Login.loginModal()
            }else{
                Register.registerErrorModal("Ops! Verifique seu email ou senha!")
            }
        })
    }

    static logarUsuario(data){
        fetch(
            this.BASIC__URL + "/auth/login",
            {
                method: "POST",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            }
        )
        .then(res => res.json())
        .then((res)=>{
            if(res.status === 200){
                localStorage.setItem("token", res)
                
            }
        })
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