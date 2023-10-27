import { Entypo, Zocial } from '@expo/vector-icons'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { validateInput } from '../utils/actions/formActions'

const SignInForm = () => {
    const inputChangedHandler = (inputId, inputValue) => {
        console.log(validateInput(inputId, inputValue))
    }

    return (
        <>
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                placeholder={'Email'}
                autoCapitalize={'none'}
                secureTextEntry={false}
                keyboardType={'email-address'}
                onInputChanged={inputChangedHandler}
                id='email'
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                placeholder={'Password'}
                autoCapitalize={'none'}
                secureTextEntry={true}
                keyboardType={'default'}
                onInputChanged={inputChangedHandler}
                id='password'
            />

            <SubmitButton buttonTitle={'Sign In'} onPress={() => console.log('Button Pressed')} />
        </>
    )
}

export default SignInForm
