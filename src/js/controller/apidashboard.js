class ApiDash{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
    static TOKEN = localStorage.getItem('token')

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
                "Authorization": `Bearer ${this.TOKEN}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((res) => res)
        .catch((error) => error)    
    }

    static deleteProduct(id) {
        const response = fetch(`${this.BASIC__URL}/my/products/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.TOKEN}`,
            },
        });
    }

    static async patchProduct(id, content) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${Api.token}`,
            },
            body: JSON.stringify(content),
        })
        .then((res) => res.json());    
        return response
    }

}

export default ApiDash