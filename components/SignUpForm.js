import { Entypo, FontAwesome5, Zocial } from '@expo/vector-icons'
import { useReducer } from 'react'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { validateInput } from '../utils/actions/formActions'

const reducer = (state, action) => {
    const { validationResult, inputId } = action

    const updatedValidities = {
        ...state.inputValidities,
        [inputId]: validationResult
    }

    let updatedFormIsValid = true

    for (const key in updatedValidities) {
        if (updatedValidities[key] !== undefined) {
            updatedFormIsValid = false
            break
        }
    }

    return {
        ...state,
        formIsValid: validationResult === undefined
    }
}

const initialState = {
    inputValidities: {
        firstName: false,
        lastName: false,
        email: false,
        password: false
    },
    formIsValid: false
}

const SignUpForm = () => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState)

    const inputChangedHandler = (inputId, inputValue) => {
        const result = validateInput(inputId, inputValue)

        dispatchFormState({ inputId, validationResult: result })
    }

    return (
        <>
            <Input
                label={"FirstName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                placeholder={'First Name'}
                onInputChanged={inputChangedHandler}
                id='first-name'
                autoCapitalize={'words'}
                secureTextEntry={false}
                keyboardType={'default'}
            />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                placeholder={'Last Name'}
                onInputChanged={inputChangedHandler}
                id='last-name'
                autoCapitalize={'words'}
                secureTextEntry={false}
                keyboardType={'default'}
            />
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                placeholder={'Email'}
                onInputChanged={inputChangedHandler}
                id='email'
                autoCapitalize={'none'}
                secureTextEntry={false}
                keyboardType={'email-address'}
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                placeholder={'Password'}
                onInputChanged={inputChangedHandler}
                id='password'
                autoCapitalize={'none'}
                secureTextEntry={true}
                keyboardType={'default'}
            />

            <SubmitButton
                buttonTitle={'Sign Up'}
                onPress={() => console.log('Button Pressed')}
                disabled={!formState.formIsValid}
            />
        </>
    )
}

export default SignUpForm
