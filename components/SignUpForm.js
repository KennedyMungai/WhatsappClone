import { Entypo, FontAwesome5, Zocial } from '@expo/vector-icons'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { validateEmail, validatePassword, validateString } from '../utils/validationConstraints'

const SignUpForm = () => {
    const inputChangedHandler = (inputId, inputValue) => {
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
            />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                placeholder={'Last Name'}
                onInputChanged={inputChangedHandler}
                id='last-name'
            />
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                placeholder={'Email'}
                onInputChanged={inputChangedHandler}
                id='email'
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                placeholder={'Password'}
                onInputChanged={inputChangedHandler}
                id='password'
                autoCapitalize='none'
            />

            <SubmitButton buttonTitle={'Sign Up'} onPress={() => console.log('Button Pressed')} />
        </>
    )
}

export default SignUpForm
