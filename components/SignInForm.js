import { Entypo, Zocial } from '@expo/vector-icons'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'

const SignInForm = () => {
    return (
        <>
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                placeholder={'Email'}
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                placeholder={'Password'}
            />

            <SubmitButton buttonTitle={'Sign In'} onPress={() => console.log('Button Pressed')} />
        </>
    )
}

export default SignInForm
