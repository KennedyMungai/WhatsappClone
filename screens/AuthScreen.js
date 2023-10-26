import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input'
import { FontAwesome5, Zocial, Entypo } from '@expo/vector-icons'

const AuthScreen = () => {
    return (
        <SafeAreaView style={styles.chatScreenView}>
            <Input
                label={"FirstName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
                placeholder={'First Name'}
            />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
                placeholder={'Last Name'}
            />
            <Input
                label={"Email"}
                IconPack={Zocial}
                iconName={"email"}
                iconSize={24}
                errorText={"Something in the way"}
                placeholder={'Email'}
            />
            <Input
                label={"Password"}
                IconPack={Entypo}
                iconName={"lock-open"}
                iconSize={24}
                errorText={"Something in the way"}
                placeholder={'Password'}
            />
        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    chatScreenView: {
        margin: 10,
        padding: 10,
        flex: 1,
        backgroundColor: 'white'
    }
})

