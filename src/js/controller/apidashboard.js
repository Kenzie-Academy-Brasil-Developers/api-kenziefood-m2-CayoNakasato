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
        .then((res) => console.log(res))
        .catch((error) => error)    
    }

    static async deletePost(id) {
        const response = await fetch(`https://api-blog-m2.herokuapp.com/post/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Api.token}`,
            },
        });
    }

}

export default ApiDash