import { View, Text, StyleSheet, Button } from 'react-native'

const ChatListScreen = ({ navigate }) => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Chat List Screen</Text>
            <Button title={'Chat Settings'} onPress={() => { navigate('ChatSettings') }} />
        </View>
    )
}

export default ChatListScreen

const styles = StyleSheet.create({
    chatScreenView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
