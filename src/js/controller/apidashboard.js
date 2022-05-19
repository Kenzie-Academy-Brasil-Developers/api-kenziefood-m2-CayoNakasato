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

    static createProduct(data) {
        const response = fetch(`${this.BASIC__URL}/my/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ApiDash.TOKEN}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .catch((error) => error)    
        return response
    }

}

export default ApiDash