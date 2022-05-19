import { ApiRequest } from "./controller/apiRequest.js";
import {showCase} from './models/showCaseDOM.js';

import Login from "./models/login.js";
import Register from "./models/register.js";

const btnLogar = document.querySelector(".button__login")
const loginDiv = document.querySelector(".div__login")

btnLogar.addEventListener("click", ()=>{
    Login.loginModal()
    loginDiv.classList.remove("hidden")
})
showCase.homePage()

