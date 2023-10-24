import { View, Text, StyleSheet } from 'react-native'

const ChatSettingsScreen = () => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Something in the way</Text>
        </View>
    )
}

export default ChatSettingsScreen

const styles = StyleSheet.create({
    chatScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

