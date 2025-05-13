export function validateName(nameInput) { 
    let name = nameInput;
    const nameRegex = /^(?=.{4,30}$)[A-Za-z]+\s[A-Za-z]+$/;
    return nameRegex.test(name);
} 
