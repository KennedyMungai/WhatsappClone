import { validate } from 'validate.js'

export const validateString = (id, value) => {
    if (id === 'first-name' || id === 'last-name') {
        const constraints = {
            presence: {
                allowEmpty: false,
                message: "Can't be empty"
            }
        }

        if (inputValue !== '') {
            constraints.format = {
                pattern: '[a-z]+',
                flag: 'i',
                message: 'can only contain letters'
            }
        }

        console.log(validate({ [id]: value }, { [id]: constraints }))
    }
}