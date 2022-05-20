import { showCase } from "./showCaseDOM";
import { ApiRequest } from "../controller/apiRequest.js";

class searchBar {
    static createPost = showCase.homePage()
    static data = ApiRequest.requisition()
    static async searching(){
        const inputValue = document.getElementById('serch-input')
        console.log(inputValue);

        inputValue.forEach(element => {
            const newData = []
            if(data[i].nome.indexOf(inputValue.value) !== -1){
                newData.push(data[i])
            } else if( data[i].categoria.indexOf(inputValue.value) !== -1){
                newData.push(data[i])
            } else {
                return 'Error'
            }    
        })
        this.createPost(newData);
    }
}