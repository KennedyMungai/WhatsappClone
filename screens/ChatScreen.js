import { View, Text, StyleSheet, Button } from 'react-native'

const ChatScreen = ({ navigation }) => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Chat Screen</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    chatScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
