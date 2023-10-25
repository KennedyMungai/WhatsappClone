import { View, Text, StyleSheet, Button } from 'react-native'
import { ImageBackground } from 'react-native'

const ChatScreen = ({ navigation }) => {
    return (
        <View style={styles.chatView}>
            <ImageBackground
                source={require('../assets/images/chat_background.jpeg')}
                style={styles.imageBackgroundStyle}
            >
            </ImageBackground>
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
    }
})
