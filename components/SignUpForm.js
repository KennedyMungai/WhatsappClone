import { Entypo, FontAwesome5, Zocial } from '@expo/vector-icons'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

const SignUpForm = () => {
    const inputChangedHandler = (inputId, inputValue) => {
        console.log("Input ID: " + inputId + " Input Value: " + inputValue)
    }

    return (
        <><Input
            label={"FirstName"}
            IconPack={FontAwesome5}
            iconName={"user"}
            iconSize={24}
            placeholder={'First Name'}
            onInputChanged={inputChangedHandler}
        />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                placeholder={'Last Name'}
                onInputChanged={inputChangedHandler}
            />
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                placeholder={'Email'}
                onInputChanged={inputChangedHandler}
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                placeholder={'Password'}
                onInputChanged={inputChangedHandler}
            />

            <SubmitButton buttonTitle={'Sign Up'} onPress={() => console.log('Button Pressed')} /></>

    )
}

export default SignUpForm
