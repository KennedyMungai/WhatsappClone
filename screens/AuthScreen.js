import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <SafeAreaView style={styles.chatScreenView}>
            {isSignUp ? <SignUpForm /> : <SignInForm />}
        </SafeAreaView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    chatScreenView: {
        margin: 10,
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    }
})

