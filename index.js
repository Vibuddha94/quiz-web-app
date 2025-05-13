import { validateName } from './validation/validation.js';


//Validate Name Input
window.handleKeyUp = (value) => {
    if(!validateName(value)){
        document.getElementById("warning").innerText = "Input valid name (Ex: John)"
    } else {
        document.getElementById("warning").innerText = "";
    }
};

window.start = () => {
    let name = document.getElementById('name').value;
    if(!validateName(name)){
        
    } else {
         window.location.href = `main.html?name=${encodeURIComponent(name)}`
    }
}
