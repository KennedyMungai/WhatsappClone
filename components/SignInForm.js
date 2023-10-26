import Input from '../components/Input'
import { FontAwesome5, Zocial, Entypo } from '@expo/vector-icons'
import SubmitButton from '../components/SubmitButton'
import Input from './Input'
import SubmitButton from './SubmitButton'

const SignInForm = () => {
    return (
        <><Input
            label={"FirstName"}
            IconPack={FontAwesome5}
            iconName={"user"}
            iconSize={24}
            placeholder={'First Name'}
        />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                placeholder={'Last Name'}
            />
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

            <SubmitButton buttonTitle={'Sign Up'} onPress={() => console.log('Button Pressed')} /></>

    )
}

export default SignInForm
