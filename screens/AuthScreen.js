import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../components/Input'

const AuthScreen = () => {
    return (
        <SafeAreaView style={styles.chatScreenView}>
            <Input label={"Something"} />
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

