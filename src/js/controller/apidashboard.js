class ApiDash{
    static BASIC__URL = "https://api-kenzie-food.herokuapp.com"
    static TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3YzAxNmQxLTk1M2EtNDUwZS1iZWE1LWMxYTNhM2U2YjU1MCIsImlhdCI6MTY1MzAwMDIwNywiZXhwIjoxNjUzODY0MjA3LCJzdWIiOiJbb2JqZWN0IFVuZGVmaW5lZF0ifQ.7IcJz03rjDofR8E_1eD8rtvpxiSzHBpMw9cJ_PIS7E0"
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
                Authorization: `Bearer ${ApiDash.TOKEN}`,
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => error)    
    }

}

export default ApiDash