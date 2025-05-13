import { validateName } from './validation/validation.js';


//Validate Name Input
window.handleKeyUp = (value) => {
    if(!validateName(value)){
        document.getElementById("warning").innerText = "Input valid name characters between 4-30"
    } else {
        document.getElementById("warning").innerText = "";
    }
};

window.start = () => {
    let name = document.getElementById('name').value;
    if(!validateName(name)){
        alert("Please enter a valid name..")
    } else {
         window.location.href = `main.html?name=${encodeURIComponent(name)}`
    }
}
