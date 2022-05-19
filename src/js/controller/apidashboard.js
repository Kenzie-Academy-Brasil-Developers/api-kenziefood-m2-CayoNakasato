class ApiDash{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
    static TOKEN = localStorage.getItem("token")
    static getItem () {
        const resp = fetch(`${this.BASIC__URL}/my/products`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.TOKEN}`,
                },
            })
            .then(res => res.json())
            .then(data => data);
        return resp
    }   

    static createProduct(data) {
        const response = fetch(`${this.BASIC__URL}/my/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.TOKEN}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error)    
    }

}

export default ApiDash