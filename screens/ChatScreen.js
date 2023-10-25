import { Button, ImageBackground, StyleSheet, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ChatScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/images/chat_background.jpeg')}
            style={styles.imageBackgroundStyle}
        >
            <SafeAreaView style={styles.chatView}>
                <View style={styles.chatAreaView}></View>
                <View style={styles.inputContainer}>
                    <Button title='Image' />
                    <TextInput />
                    <Button title='Camera' />
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    chatView: {
        flex: 1,
        flexDirection: 'column'
    },
    imageBackgroundStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: 'white'
    },
    chatAreaView: {
        flex: 1
    }
})
