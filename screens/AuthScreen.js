import { useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import colors from '../constants/colors'

const AuthScreen = () => {
    const [isSignUp, setIsSignUp] = useState(true)

    return (
        <ScrollView style={{ flex: 1 }} alwaysBounceVertical >
            <ImageBackground style={styles.chatScreenView} source={require('../assets/images/whatsapp_splashscreen.png')} resizeMode='cover'>
                {isSignUp ? <SignUpForm /> : <SignInForm />}

                <TouchableOpacity
                    style={{ backgroundColor: colors.black, padding: 15, margin: 10, borderRadius: 8 }}
                    onPress={() => setIsSignUp(prevState => !prevState)}
                >
                    <Text style={{ color: colors.white, fontSize: 16, fontWeight: 'bold' }}>{`${isSignUp ? 'Sign In?' : 'Sign Up?'}`}</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>

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

