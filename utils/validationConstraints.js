export const validateString = (id, value) => {
    if (inputId === 'first-name' || inputId === 'last-name') {
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

        console.log(validate({ [inputId]: inputValue }, { [inputId]: constraints }))
    }
}