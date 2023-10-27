import { validateEmail, validatePassword, validateString } from '../validationConstraints'

export const validateInput = (inputId, inputValue) => {
    if (inputId === 'first-name' || inputId === 'last-name') {
        console.log(validateString(inputId, inputValue))
    }
    else if (inputId === 'email') {
        console.log(validateEmail(inputId, inputValue))
    }
    else if (inputId === 'password') {
        console.log(validatePassword(inputId, inputValue))
    }
}