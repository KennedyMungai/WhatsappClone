import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AuthScreen = () => {
    return (
        <SafeAreaView style={styles.chatScreenView}>
            <Text>Auth Screen</Text>
        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    chatScreenView: {

    }
})

