import Login from "../JS/Login.js"
import Register from "../JS/Register.js"

class Api{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
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
            if(res.status === "Error" || res.status !== undefined){
                Register.registerErrorModal(res.message)
            }else{
                Login.loginModal()
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
        .then(()=>{
            window.location = "../pages/dashboard.html";
        })
    }
}

export default Api