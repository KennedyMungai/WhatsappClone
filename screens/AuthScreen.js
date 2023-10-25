import { View, Text, StyleSheet } from 'react-native'

const AuthScreen = () => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Auth Screen</Text>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    chatScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

