import { View, TextInput, StyleSheet, Button } from 'react-native'
import { ImageBackground } from 'react-native'

const ChatScreen = ({ navigation }) => {
    return (
        <View style={styles.chatView}>
            <ImageBackground
                source={require('../assets/images/chat_background.jpeg')}
                style={styles.imageBackgroundStyle}
            >
            </ImageBackground>
            <View style={styles.inputContainer}>
                <Button title='Image' />
                <TextInput />
                <Button title='Camera' />
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    chatView: {
        flex: 1,
        flexDirection: 'column'
    },
    imageBackgroundStyle: {
        flex: 1
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 10
    }
})
