export function validateName(nameInput,out) { 
    let name = nameInput;
    const nameRegex = /^([A-Za-z]){4,20}$/gm;
    if(!nameRegex.test(name)){
        document.getElementById(out).innerText = "Input valid name (Ex: John)"
    } else {
        document.getElementById(out).innerText = "";
    }
} 