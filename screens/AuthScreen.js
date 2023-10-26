import { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import colors from '../constants/colors'

const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <SafeAreaView style={styles.chatScreenView}>
            {isSignUp ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity style={{ backgroundColor: colors.black, padding: 15, margin: 10, borderRadius: 8 }}>
                <Text style={{ color: colors.white, fontSize: 16, fontWeight: 'bold' }}>{`${isSignUp ? 'Sign In?' : 'Sign Up?'}`}</Text>
            </TouchableOpacity>
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

