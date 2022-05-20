class ApiRequest {
    static baseUrl = 'https://api-kenzie-food.herokuapp.com/'
    static async requisition(){
        const response = await fetch(this.baseUrl+"products", {
            method: "GET", 
            headers: {
              "Content-Type": "application/json", 
            },
        })
        .then(res => res.json())
        .then(data => data)
        return response
    }
  }

export {ApiRequest}