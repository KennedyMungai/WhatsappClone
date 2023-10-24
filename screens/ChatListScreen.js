import { View, Text, StyleSheet, Button } from 'react-native'

const ChatListScreen = (props) => {
    return (
        <View style={styles.chatScreenView}>
            <Text>Chat List Screen</Text>
            <Button title={'Chat Settings'} onPress={() => { props.navigate('ChatSettings') }} />
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
