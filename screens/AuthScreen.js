import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input'
import { FontAwesome5 } from '@expo/vector-icons'

const AuthScreen = () => {
    return (
        <SafeAreaView style={styles.chatScreenView}>
            <Input
                label={"FirstName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
            />
            <Input
                label={"LastName"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
            />
            <Input
                label={"Email"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
            />
            <Input
                label={"Password"}
                IconPack={FontAwesome5}
                iconName={"user"}
                iconSize={24}
                errorText={"Something in the way"}
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

