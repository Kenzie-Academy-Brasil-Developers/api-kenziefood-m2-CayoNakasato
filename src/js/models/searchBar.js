import { showCase } from "./showCaseDOM.js";
import { ApiRequest } from "../controller/apiRequest.js";

let data = []

ApiRequest.requisition().then((d) => data = d);

const inputValue = document.getElementById("serch-input")
inputValue.addEventListener("keydown",(event) => {
    const keyName = event.key;
    if(keyName === 'Enter'){
        findPost()
    }
})

function findPost() {
    const inputValue = document.getElementById("serch-input")
    const newData = [];
    for (let i = 0; i < data.length; i++){
        if(data[i].nome.toLowerCase().indexOf(inputValue.value.toLowerCase()) !== -1 || data[i].categoria.toLowerCase().indexOf(inputValue.value.toLowerCase()) !== -1){
            newData.push(data[i]);
        }
    }
    showCase.homePageFiltered(newData);
}
