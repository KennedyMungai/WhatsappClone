import { validate } from 'validate.js'

export const validateString = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: "Can't be empty"
        }
    }

    if (value !== '') {
        constraints.format = {
            pattern: '[a-z]+',
            flag: 'i',
            message: 'can only contain letters'
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })

    return validationResult && validationResult[id]
}

export const validateEmail = (id, value) => {
    const constraints = {
        presence: {
            allowEmpty: false,
            message: "Can't be empty"
        }
    }

    if (value !== '') {
        constraints.format = {
            pattern: '[a-z]+',
            flag: 'i',
            message: 'can only contain letters'
        }
    }

    const validationResult = validate({ [id]: value }, { [id]: constraints })

    return validationResult && validationResult[id]
}