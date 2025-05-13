import { validateName } from './validation/validation.js';

//Validate Name Input
window.handleKeyUp = (value) => validateName(value,"warning");