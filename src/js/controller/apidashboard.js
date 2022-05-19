class ApiDash{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
    static TOKEN = localStorage.getItem("token")

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
    
}

export default ApiDash