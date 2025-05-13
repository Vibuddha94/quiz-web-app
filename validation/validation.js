export function validateName(nameInput) { 
    let name = nameInput;
    const nameRegex = /^([A-Za-z]){4,20}$/gm;
    return nameRegex.test(name);
} 